import difflib
import os
import re
import pathlib
from collections import OrderedDict

root = pathlib.Path(__file__).resolve().parent
plan_path = root / 'src' / 'data' / 'practicePlans.js'
lib_path = root / 'src' / 'data' / 'drillLibrary.js'


def normalize_label(value: str) -> str:
    value = value.lower()
    value = re.sub(r"\(.*?\)", ' ', value)
    value = re.sub(r"[^a-z0-9]+", ' ', value)
    return re.sub(r"\s+", ' ', value).strip()


def load_drill_library(file_path):
    text = file_path.read_text(encoding='utf-8')
    entries = re.findall(r"id:\s*'([^']+)',\s*name:\s*'([^']+)'", text)
    return OrderedDict((id_, name) for id_, name in entries)


def load_practice_plans(file_path):
    text = file_path.read_text(encoding='utf-8')
    plan_blocks = re.findall(r"\{\s*id:\s*'([^']+)'[\s\S]*?drillBlocks:\s*\[([\s\S]*?)\]", text)
    plans = {}
    for plan_id, block_text in plan_blocks:
        ids = re.findall(r"drillId:\s*'([^']+)'", block_text)
        plans[plan_id] = ids
    return plans


def load_text_plan(file_path):
    text = file_path.read_text(encoding='utf-8', errors='ignore').splitlines()
    labels = []
    for line in text:
        line = line.strip()
        match = re.match(r"^(\d+)\s+(.*)$", line)
        if not match:
            continue
        raw = match.group(2)
        label = re.split(r"\s+Description:\s*", raw, flags=re.I)[0].strip()
        if not label:
            continue
        norm = normalize_label(label)
        if norm in {'pre practice character message', 'character message', 'character message practice'}:
            continue
        labels.append(label)
    return labels


def main():
    drill_name_map = load_drill_library(lib_path)
    drill_norm_map = {}
    for drill_id, drill_name in drill_name_map.items():
        norm = normalize_label(drill_name)
        drill_norm_map.setdefault(norm, []).append(drill_id)

    manual_label_map = {
        'passing chest bounce overhead baseball': 'passing-chest-bounce-overhead',
        'layups 0 dribbles 1 dribble': 'layups-0-1-dribble',
        'layups 0 dribbles 1 dribble': 'layups-0-1-dribble',
        'layups 1 dribble': 'layup-1-dribble',
        'layups and layups': 'layup-1-dribble-3pt',
        'layups': 'layups-fundamental',
        'form shooting and form shooting 5 lines': 'form-shooting',
        'passing chest bounce overhead': 'passing-chest-bounce-overhead',
        'red light green light stance quick stop': 'red-light-green-light-stance',
        'v cuts and fill cuts': 'v-cuts-and-fill-cuts',
        '3 person 2 ball shooting': '3-person-2-ball-shooting',
        '3v3 no dribble and 2 dribbles': '3v3',
        '4v4 2 dribbles progress to unlimited dribbles': '4v4-2-dribbles',
        '4v4 cutters motion offense 2 dribbles': '4v4-2-dribbles',
        '4v4 shell defense': 'shell-drill-4v4',
        '4v4 shell cutters': '4v4-cutters',
        'okie cross press breaker': 'okie-cross-press-breaker',
        '1 on 1 closeouts': '1v1-closeouts',
        '1v1 closeouts on touch 1v1 closeouts': '1v1-closeouts-on-touch',
        'ball handling stationary': 'ball-handling-stationary',
        'ball handling on the move': 'ball-handling-moving',
        'change of directions moves stationar': 'change-of-direction-moves',
        'dynamic stretching warm up': 'dynamic-warmup',
        '3 person 2 ball shooting': '3-person-2-ball-shooting',
        'speed dribbling': 'speed-dribble-quick-stop',
        'motion offense 5v0 cutters and 5v5 cutters': '5v0-cutters',
    }

    def map_label_to_id(label):
        norm = normalize_label(label)
        if norm in manual_label_map:
            return manual_label_map[norm]
        if norm in drill_norm_map and len(drill_norm_map[norm]) == 1:
            return drill_norm_map[norm][0]
        best = max(
            ((difflib.SequenceMatcher(None, norm, normalize_label(name)).ratio(), drill_id)
             for drill_id, name in drill_name_map.items()),
            key=lambda item: item[0]
        )
        return best[1]

    practice_plans = load_practice_plans(plan_path)

    txt_files = sorted([p for p in root.glob('*.txt') if re.match(r'^(Beginner|Intermediate) \d+ - 90 min\.txt$', p.name)])
    mismatches = []
    for txt_file in txt_files:
        text_labels = load_text_plan(txt_file)
        mapped_ids = [map_label_to_id(label) for label in text_labels]
        num = int(re.search(r'^(Beginner|Intermediate) (\d+) - 90 min\.txt$', txt_file.name).group(2))
        plan_id = f"beginner-{num:02d}-90min" if txt_file.name.startswith('Beginner') else f"intermediate-{num:02d}-90min"
        plan_ids = practice_plans.get(plan_id)
        if plan_ids != mapped_ids:
            mismatches.append((txt_file.name, plan_id, text_labels, mapped_ids, plan_ids))

    print('checked', len(txt_files), 'txt files')
    print('matches', len(txt_files) - len(mismatches))
    print('mismatches', len(mismatches))
    for txt_name, plan_id, labels, mapped_ids, plan_ids in mismatches[:20]:
        print('\n---', txt_name, plan_id)
        print('text labels:')
        for idx, label in enumerate(labels):
            print(f'{idx:2d}.', label)
        print('mapped ids:')
        for idx, mid in enumerate(mapped_ids):
            expected = plan_ids[idx] if plan_ids and idx < len(plan_ids) else None
            marker = '!=' if expected and mid != expected else '=='
            print(f'{idx:2d}. {mid} {marker} expected {expected}')


if __name__ == '__main__':
    main()
