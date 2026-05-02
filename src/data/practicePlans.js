// Practice Plans - Coach Jim Huber's Breakthrough Basketball 32 Practice Plans
// 16 Beginner plans + 16 Intermediate plans
// Each plan pre-loaded with drill sequences

import { SKILL_LEVELS } from './drillLibrary';

// Practice plan structure:
// - id: unique identifier
// - name: display name
// - level: BEGINNER or INTERMEDIATE
// - duration: 60, 75, or 90 minutes
// - drillBlocks: array of drill references with duration overrides
// - totalTime: calculated from drill blocks
// - focusAreas: array of skills emphasized in this plan

export const practicePlans = [
  // ========================================
  // BEGINNER PRACTICE PLANS (B1-B16)
  // ========================================

  // 60-minute Beginner Plans (B1-B4)
  {
    id: 'beginner-01-60min',
    name: 'Beginner Practice #1',
    level: SKILL_LEVELS.BEGINNER,
    duration: 60,
    focusAreas: ['Ball Handling', 'Shooting', 'Defense Basics'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'ball-handling-stationary', duration: 10 },
      { drillId: 'passing-fundamental', duration: 10 },
      { drillId: 'layups-fundamental', duration: 10 },
      { drillId: '1v1-live', duration: 10 },
      { drillId: '3v3-scrimmage', duration: 5 }
    ]
  },
  {
    id: 'beginner-02-60min',
    name: 'Beginner Practice #2',
    level: SKILL_LEVELS.BEGINNER,
    duration: 60,
    focusAreas: ['Passing', 'Finishing', 'Rebounding'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'cone-dribbling', duration: 10 },
      { drillId: 'passing-fundamental', duration: 10 },
      { drillId: '1v1-with-chair', duration: 10 },
      { drillId: 'shadow-rebounding', duration: 5 },
      { drillId: '3v3-scrimmage', duration: 10 }
    ]
  },
  {
    id: 'beginner-03-60min',
    name: 'Beginner Practice #3',
    level: SKILL_LEVELS.BEGINNER,
    duration: 60,
    focusAreas: ['Shooting Form', 'Defense', '1v1 Skills'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'ball-handling-moving', duration: 10 },
      { drillId: '3-person-2-ball-shooting', duration: 10 },
      { drillId: 'closeouts', duration: 5 },
      { drillId: '1v1-live', duration: 10 },
      { drillId: '3v3-scrimmage', duration: 10 }
    ]
  },
  {
    id: 'beginner-04-60min',
    name: 'Beginner Practice #4',
    level: SKILL_LEVELS.BEGINNER,
    duration: 60,
    focusAreas: ['Ball Control', 'Team Offense', 'Scrimmage'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'ball-handling-stationary', duration: 10 },
      { drillId: 'layups-fundamental', duration: 10 },
      { drillId: '2v2-live', duration: 10 },
      { drillId: '4v4-scrimmage', duration: 15 }
    ]
  },

  // 75-minute Beginner Plans (B5-B8)
  {
    id: 'beginner-05-75min',
    name: 'Beginner Practice #5',
    level: SKILL_LEVELS.BEGINNER,
    duration: 75,
    focusAreas: ['Dribbling', 'Passing', 'Live Play'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'cone-dribbling', duration: 10 },
      { drillId: 'passing-fundamental', duration: 10 },
      { drillId: 'layups-fundamental', duration: 10 },
      { drillId: '1v1-closeouts', duration: 10 },
      { drillId: '3v3-scrimmage', duration: 15 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },
  {
    id: 'beginner-06-75min',
    name: 'Beginner Practice #6',
    level: SKILL_LEVELS.BEGINNER,
    duration: 75,
    focusAreas: ['Shooting', 'Defense', 'Teamwork'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'ball-handling-moving', duration: 10 },
      { drillId: '3-person-2-ball-shooting', duration: 10 },
      { drillId: 'shadow-rebounding', duration: 5 },
      { drillId: '2v2-live', duration: 10 },
      { drillId: '4v4-scrimmage', duration: 20 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },
  {
    id: 'beginner-07-75min',
    name: 'Beginner Practice #7',
    level: SKILL_LEVELS.BEGINNER,
    duration: 75,
    focusAreas: ['Finishing', 'Rebounding', 'Competition'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'ball-handling-stationary', duration: 10 },
      { drillId: '1v1-with-chair', duration: 10 },
      { drillId: 'shadow-rebounding', duration: 5 },
      { drillId: 'fill-cut-1v1', duration: 10 },
      { drillId: '3v3-scrimmage', duration: 20 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },
  {
    id: 'beginner-08-75min',
    name: 'Beginner Practice #8',
    level: SKILL_LEVELS.BEGINNER,
    duration: 75,
    focusAreas: ['All-Around Skills', 'Game Situations'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'cone-dribbling', duration: 10 },
      { drillId: 'passing-fundamental', duration: 10 },
      { drillId: 'closeouts', duration: 5 },
      { drillId: '1v1-live', duration: 10 },
      { drillId: '4v4-scrimmage', duration: 20 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },

  // 90-minute Beginner Plans (B9-B16)
  {
    id: 'beginner-09-90min',
    name: 'Beginner Practice #9',
    level: SKILL_LEVELS.BEGINNER,
    duration: 90,
    focusAreas: ['Complete Skills', 'Extended Scrimmage'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'ball-handling-moving', duration: 10 },
      { drillId: 'passing-fundamental', duration: 10 },
      { drillId: 'layups-fundamental', duration: 10 },
      { drillId: '1v1-closeouts', duration: 10 },
      { drillId: '2v2-live', duration: 10 },
      { drillId: '5v5-scrimmage', duration: 20 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },
  {
    id: 'beginner-10-90min',
    name: 'Beginner Practice #10',
    level: SKILL_LEVELS.BEGINNER,
    duration: 90,
    focusAreas: ['Ball Handling', 'Shooting', 'Team Play'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'cone-dribbling', duration: 10 },
      { drillId: '3-person-2-ball-shooting', duration: 10 },
      { drillId: '1v1-with-chair', duration: 10 },
      { drillId: 'shadow-rebounding', duration: 5 },
      { drillId: '3v3-live', duration: 10 },
      { drillId: '5v5-scrimmage', duration: 25 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },
  {
    id: 'beginner-11-90min',
    name: 'Beginner Practice #11',
    level: SKILL_LEVELS.BEGINNER,
    duration: 90,
    focusAreas: ['Fundamentals Review', 'Competition'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'ball-handling-stationary', duration: 10 },
      { drillId: 'passing-fundamental', duration: 10 },
      { drillId: 'layups-fundamental', duration: 10 },
      { drillId: 'closeouts', duration: 5 },
      { drillId: '1v1-live', duration: 10 },
      { drillId: '4v4-scrimmage', duration: 25 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },
  {
    id: 'beginner-12-90min',
    name: 'Beginner Practice #12',
    level: SKILL_LEVELS.BEGINNER,
    duration: 90,
    focusAreas: ['Skill Progression', 'Live Situations'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'ball-handling-moving', duration: 10 },
      { drillId: 'cone-dribbling', duration: 10 },
      { drillId: '1v1-with-chair', duration: 10 },
      { drillId: 'fill-cut-1v1', duration: 10 },
      { drillId: '2v2-live', duration: 10 },
      { drillId: '5v5-scrimmage', duration: 20 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },
  {
    id: 'beginner-13-90min',
    name: 'Beginner Practice #13',
    level: SKILL_LEVELS.BEGINNER,
    duration: 90,
    focusAreas: ['Shooting Development', 'Defense', 'Scrimmage'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'ball-handling-stationary', duration: 10 },
      { drillId: '3-person-2-ball-shooting', duration: 10 },
      { drillId: '1v1-closeouts', duration: 10 },
      { drillId: 'shadow-rebounding', duration: 5 },
      { drillId: '3v3-live', duration: 10 },
      { drillId: '5v5-scrimmage', duration: 25 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },
  {
    id: 'beginner-14-90min',
    name: 'Beginner Practice #14',
    level: SKILL_LEVELS.BEGINNER,
    duration: 90,
    focusAreas: ['Complete Development', 'Team Concepts'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'cone-dribbling', duration: 10 },
      { drillId: 'passing-fundamental', duration: 10 },
      { drillId: 'layups-fundamental', duration: 10 },
      { drillId: 'closeouts', duration: 5 },
      { drillId: '2v2-live', duration: 10 },
      { drillId: '4v4-scrimmage', duration: 25 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },
  {
    id: 'beginner-15-90min',
    name: 'Beginner Practice #15',
    level: SKILL_LEVELS.BEGINNER,
    duration: 90,
    focusAreas: ['Offensive Skills', 'Defensive Positioning'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'ball-handling-moving', duration: 10 },
      { drillId: '1v1-with-chair', duration: 10 },
      { drillId: '1v1-closeouts', duration: 10 },
      { drillId: 'fill-cut-1v1', duration: 10 },
      { drillId: '3v3-live', duration: 10 },
      { drillId: '5v5-scrimmage', duration: 20 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },
  {
    id: 'beginner-16-90min',
    name: 'Beginner Practice #16',
    level: SKILL_LEVELS.BEGINNER,
    duration: 90,
    focusAreas: ['Season Review', 'Game Preparation'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'cone-dribbling', duration: 10 },
      { drillId: '3-person-2-ball-shooting', duration: 10 },
      { drillId: 'shadow-rebounding', duration: 5 },
      { drillId: '1v1-live', duration: 10 },
      { drillId: '2v2-live', duration: 10 },
      { drillId: '5v5-scrimmage', duration: 25 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },

  // ========================================
  // INTERMEDIATE PRACTICE PLANS (I1-I16)
  // ========================================

  // 60-minute Intermediate Plans (I1-I4)
  {
    id: 'intermediate-01-60min',
    name: 'Intermediate Practice #1',
    level: SKILL_LEVELS.INTERMEDIATE,
    duration: 60,
    focusAreas: ['Advanced Ball Handling', 'Help Defense', 'Motion Offense'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'two-ball-dribbling', duration: 10 },
      { drillId: 'shell-drill-4v4', duration: 10 },
      { drillId: '3v3-live', duration: 10 },
      { drillId: '4v4-scrimmage', duration: 15 }
    ]
  },
  {
    id: 'intermediate-02-60min',
    name: 'Intermediate Practice #2',
    level: SKILL_LEVELS.INTERMEDIATE,
    duration: 60,
    focusAreas: ['Transition', 'Competitive Passing', 'Live Play'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'utah-transition', duration: 10 },
      { drillId: 'passing-competitive', duration: 10 },
      { drillId: 'dematha-finishing', duration: 10 },
      { drillId: '3v3-scrimmage', duration: 15 }
    ]
  },
  {
    id: 'intermediate-03-60min',
    name: 'Intermediate Practice #3',
    level: SKILL_LEVELS.INTERMEDIATE,
    duration: 60,
    focusAreas: ['Shooting', 'Defense Rotation', 'Team Offense'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'game-shots', duration: 10 },
      { drillId: '4v4-cutters', duration: 10 },
      { drillId: '4v4-2-dribbles', duration: 10 },
      { drillId: '4v4-scrimmage', duration: 15 }
    ]
  },
  {
    id: 'intermediate-04-60min',
    name: 'Intermediate Practice #4',
    level: SKILL_LEVELS.INTERMEDIATE,
    duration: 60,
    focusAreas: ['Penetrate and Pitch', 'Rebounding', 'Competition'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'penetrate-and-pitch-2v0', duration: 5 },
      { drillId: '2v2-penetrate-and-pitch', duration: 10 },
      { drillId: '2v2-rebounding-battle', duration: 10 },
      { drillId: '4v4-scrimmage', duration: 20 }
    ]
  },

  // 75-minute Intermediate Plans (I5-I8)
  {
    id: 'intermediate-05-75min',
    name: 'Intermediate Practice #5',
    level: SKILL_LEVELS.INTERMEDIATE,
    duration: 75,
    focusAreas: ['Ball Handling', 'Shell Defense', 'Motion Concepts'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'cone-dribbling', duration: 10 },
      { drillId: 'line-passing', duration: 10 },
      { drillId: 'shell-drill-4v4', duration: 10 },
      { drillId: '3v3-no-paint-touches', duration: 5 },
      { drillId: '5v5-5-cut-limit-dribble', duration: 10 },
      { drillId: '5v5-scrimmage', duration: 10 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },
  {
    id: 'intermediate-06-75min',
    name: 'Intermediate Practice #6',
    level: SKILL_LEVELS.INTERMEDIATE,
    duration: 75,
    focusAreas: ['Transition Attack', 'Finishing', 'Full Court'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'rim-runner', duration: 5 },
      { drillId: 'wolf-drill', duration: 5 },
      { drillId: 'tear-butt-transition', duration: 10 },
      { drillId: 'dematha-finishing', duration: 10 },
      { drillId: '4v4-2-dribbles', duration: 10 },
      { drillId: '5v5-scrimmage', duration: 15 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },
  {
    id: 'intermediate-07-75min',
    name: 'Intermediate Practice #7',
    level: SKILL_LEVELS.INTERMEDIATE,
    duration: 75,
    focusAreas: ['Shooting Range', 'Competitive Defense', 'Live Play'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'klay-thompson-shooting', duration: 10 },
      { drillId: 'ball-pressure-drill', duration: 5 },
      { drillId: '4v4-cutters', duration: 10 },
      { drillId: 'bull-in-the-ring', duration: 5 },
      { drillId: '3v3-live', duration: 10 },
      { drillId: '5v5-scrimmage', duration: 15 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },
  {
    id: 'intermediate-08-75min',
    name: 'Intermediate Practice #8',
    level: SKILL_LEVELS.INTERMEDIATE,
    duration: 75,
    focusAreas: ['Complete Skills', 'Special Situations'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'dribble-handoff-2v2', duration: 10 },
      { drillId: 'l-cut-1v1', duration: 10 },
      { drillId: 'blob-series', duration: 5 },
      { drillId: 'slob-series', duration: 5 },
      { drillId: '4v4-2-dribbles', duration: 10 },
      { drillId: '5v5-scrimmage', duration: 15 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },

  // 90-minute Intermediate Plans (I9-I16)
  {
    id: 'intermediate-09-90min',
    name: 'Intermediate Practice #9',
    level: SKILL_LEVELS.INTERMEDIATE,
    duration: 90,
    focusAreas: ['Press Break', 'Help Defense', 'Motion Offense'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'two-ball-dribbling', duration: 10 },
      { drillId: 'press-break-okie', duration: 10 },
      { drillId: 'shell-drill-4v4', duration: 10 },
      { drillId: '3v3-no-paint-touches', duration: 5 },
      { drillId: '5v5-5-cut-limit-dribble', duration: 10 },
      { drillId: '25-point-game', duration: 25 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },
  {
    id: 'intermediate-10-90min',
    name: 'Intermediate Practice #10',
    level: SKILL_LEVELS.INTERMEDIATE,
    duration: 90,
    focusAreas: ['Transition Excellence', 'Finishing', 'Competition'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'utah-transition', duration: 10 },
      { drillId: 'rim-runner', duration: 5 },
      { drillId: 'transition-defense-drill', duration: 5 },
      { drillId: 'tear-butt-transition', duration: 10 },
      { drillId: '1v1-with-chair', duration: 10 },
      { drillId: '4v4-2-dribbles', duration: 10 },
      { drillId: '5v5-scrimmage', duration: 20 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },
  {
    id: 'intermediate-11-90min',
    name: 'Intermediate Practice #11',
    level: SKILL_LEVELS.INTERMEDIATE,
    duration: 90,
    focusAreas: ['4v4 Limited Dribble', 'Motion Concepts'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'ball-handling-moving', duration: 10 },
      { drillId: 'passing-competitive', duration: 10 },
      { drillId: 'klay-thompson-shooting', duration: 10 },
      { drillId: 'shell-drill-4v4', duration: 10 },
      { drillId: '3v3-no-paint-touches', duration: 5 },
      { drillId: '4v4-2-dribbles', duration: 10 },
      { drillId: '5v5-scrimmage', duration: 15 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },
  {
    id: 'intermediate-12-90min',
    name: 'Intermediate Practice #12',
    level: SKILL_LEVELS.INTERMEDIATE,
    duration: 90,
    focusAreas: ['5 Cut Motion', 'Limited Dribble Offense'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'cone-dribbling', duration: 10 },
      { drillId: 'line-passing', duration: 10 },
      { drillId: 'game-shots', duration: 10 },
      { drillId: '4v4-cutters', duration: 10 },
      { drillId: 'bull-in-the-ring', duration: 5 },
      { drillId: '5v5-5-cut-limit-dribble', duration: 10 },
      { drillId: '5v5-scrimmage', duration: 15 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },
  {
    id: 'intermediate-13-90min',
    name: 'Intermediate Practice #13',
    level: SKILL_LEVELS.INTERMEDIATE,
    duration: 90,
    focusAreas: ['4v4 Development', 'Team Defense'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'two-ball-dribbling', duration: 10 },
      { drillId: 'penetrate-and-pitch-2v0', duration: 5 },
      { drillId: '2v2-penetrate-and-pitch', duration: 10 },
      { drillId: 'shell-drill-4v4', duration: 10 },
      { drillId: '2v2-rebounding-battle', duration: 10 },
      { drillId: '4v4-2-dribbles', duration: 10 },
      { drillId: '5v5-scrimmage', duration: 15 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },
  {
    id: 'intermediate-14-90min',
    name: 'Intermediate Practice #14',
    level: SKILL_LEVELS.INTERMEDIATE,
    duration: 90,
    focusAreas: ['Penetrate and Pitch', '5 Cut Motion', 'Special Situations'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'ball-handling-moving', duration: 10 },
      { drillId: 'passing-competitive', duration: 10 },
      { drillId: 'dematha-finishing', duration: 10 },
      { drillId: 'ball-pressure-drill', duration: 5 },
      { drillId: '2v2-penetrate-and-pitch', duration: 5 },
      { drillId: '5v5-5-cut-limit-dribble', duration: 10 },
      { drillId: '25-point-game', duration: 20 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },
  {
    id: 'intermediate-15-90min',
    name: 'Intermediate Practice #15',
    level: SKILL_LEVELS.INTERMEDIATE,
    duration: 90,
    focusAreas: ['Motion Offense Mastery', 'Complete Skills'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'cone-dribbling', duration: 10 },
      { drillId: 'klay-thompson-shooting', duration: 10 },
      { drillId: 'l-cut-1v1', duration: 10 },
      { drillId: 'shell-drill-4v4', duration: 10 },
      { drillId: '3v3-no-paint-touches', duration: 5 },
      { drillId: '4v4-2-dribbles', duration: 10 },
      { drillId: '5v5-scrimmage', duration: 15 },
      { drillId: 'conditioning', duration: 5 }
    ]
  },
  {
    id: 'intermediate-16-90min',
    name: 'Intermediate Practice #16',
    level: SKILL_LEVELS.INTERMEDIATE,
    duration: 90,
    focusAreas: ['Full Court Pressure', 'Press Break', 'Advanced Concepts'],
    drillBlocks: [
      { drillId: 'dynamic-warmup', duration: 5 },
      { drillId: 'form-shooting', duration: 5 },
      { drillId: 'defensive-warmup', duration: 5 },
      { drillId: 'two-ball-dribbling', duration: 10 },
      { drillId: 'line-passing', duration: 10 },
      { drillId: 'game-shots', duration: 10 },
      { drillId: 'full-court-pressure-and-press-break', duration: 5 },
      { drillId: '2v2-penetrate-and-pitch', duration: 5 },
      { drillId: '5v5-5-cut-limit-dribble', duration: 10 },
      { drillId: '25-point-game', duration: 20 },
      { drillId: 'conditioning', duration: 5 }
    ]
  }
];

// Helper functions
export const getPracticePlanById = (id) => {
  return practicePlans.find(plan => plan.id === id);
};

export const getPracticePlansByLevel = (level) => {
  return practicePlans.filter(plan => plan.level === level);
};

export const getPracticePlansByDuration = (duration) => {
  return practicePlans.filter(plan => plan.duration === duration);
};

export const calculatePlanTotalTime = (plan) => {
  return plan.drillBlocks.reduce((total, block) => total + block.duration, 0);
};
