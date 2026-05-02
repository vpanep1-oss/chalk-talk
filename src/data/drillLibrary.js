// Drill Library - Extracted from Coach Jim Huber's Breakthrough Basketball Practice Plans
// Source: 32 practice plans (16 Beginner, 16 Intermediate) + 4 resource PDFs

export const DRILL_CATEGORIES = {
  WARMUP: 'Warm-up',
  BALL_HANDLING: 'Ball Handling',
  PASSING: 'Passing',
  SHOOTING: 'Shooting',
  FINISHING: 'Finishing',
  DEFENSE: 'Defense',
  REBOUNDING: 'Rebounding',
  TRANSITION: 'Transition',
  OFFENSE: 'Offense',
  SPECIAL_SITUATIONS: 'Special Situations',
  SCRIMMAGE: 'Scrimmage',
  CONDITIONING: 'Conditioning'
};

export const SKILL_LEVELS = {
  BEGINNER: 'Beginner',
  INTERMEDIATE: 'Intermediate',
  ADVANCED: 'Advanced'
};

// Master drill library - all unique drills extracted from practice plans and resources
export const drills = [
  // === WARM-UP DRILLS ===
  {
    id: 'dynamic-warmup',
    name: 'Dynamic Warm-up',
    duration: 5,
    category: DRILL_CATEGORIES.WARMUP,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Dynamic stretching and movement preparation',
    series: 'Standard Warm-up',
    seriesOrder: 1
  },
  {
    id: 'form-shooting',
    name: 'Form Shooting',
    duration: 5,
    category: DRILL_CATEGORIES.SHOOTING,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Fundamental shooting mechanics and form development',
    details: 'BEEF technique: Balance, Eyes, Elbow, Follow-through. Start close to basket and gradually move back.',
    series: 'Standard Warm-up',
    seriesOrder: 2
  },
  {
    id: 'defensive-warmup',
    name: 'Defensive Warm-up',
    duration: 5,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Defensive stance, slides, and positioning',
    details: 'Focus on proper stance, lateral movement, and maintaining position.',
    series: 'Standard Warm-up',
    seriesOrder: 3
  },

  // === BALL HANDLING DRILLS ===
  {
    id: 'ball-handling-stationary',
    name: 'Ball Handling (Stationary)',
    duration: 10,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Stationary ball handling drills to develop control and confidence',
    details: 'One ball drills: Pound dribble (knee/waist/shoulder), figure 8, around the world, pretzel. Two ball drills: Pound, alternate, side to side, egg beater, push/pull.'
  },
  {
    id: 'ball-handling-moving',
    name: 'Ball Handling (Moving)',
    duration: 10,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Ball handling drills with movement',
    details: 'Control dribble, speed dribble, changing speed, changing direction. Focus on keeping head up and protecting the ball.'
  },
  {
    id: 'two-ball-dribbling',
    name: 'Two Ball Dribbling',
    duration: 10,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Advanced ball handling with two basketballs',
    details: 'Pound, alternate, crossover, one low/one high. Develops ambidexterity and coordination.'
  },
  {
    id: 'cone-dribbling',
    name: 'Cone Dribbling',
    duration: 10,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Change of direction dribbling through cones',
    details: 'Crossover, between legs, behind back, inside-out moves at each cone.'
  },

  // === PASSING DRILLS ===
  {
    id: 'passing-fundamental',
    name: 'Passing (Fundamental)',
    duration: 10,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Basic passing techniques and catching',
    details: 'Chest pass, bounce pass, overhead pass. Focus on step, snap, follow through. On target, one time, on a line.'
  },
  {
    id: 'passing-competitive',
    name: 'Passing (Competitive)',
    duration: 10,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Advanced passing under pressure',
    details: 'Monkey in the middle, triangle passing 3v1, 3v2. Flick pass, baseball pass, pass fakes.'
  },
  {
    id: 'line-passing',
    name: 'Line Passing',
    duration: 10,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Passing on the move with proper footwork',
    details: 'Partners pass while moving down court. Ball in air, feet in air. Turn and face after catch.'
  },

  // === SHOOTING DRILLS ===
  {
    id: 'klay-thompson-shooting',
    name: 'Klay Thompson Shooting',
    duration: 10,
    category: DRILL_CATEGORIES.SHOOTING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Progressive shooting drill - step back after 2 makes',
    details: 'Player receives pass, uses 1-2 step or hop, shoots. Make 2 in a row = step back. Miss 2 in a row = step in.'
  },
  {
    id: 'game-shots',
    name: 'Game Shots',
    duration: 10,
    category: DRILL_CATEGORIES.SHOOTING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Shooting from game situations',
    details: 'Speed dribble to quick stop, pivot to basket. Self-toss with 1-2 step. Finish misses.'
  },
  {
    id: '3-person-2-ball-shooting',
    name: '3 Person/2 Ball Shooting',
    duration: 10,
    category: DRILL_CATEGORIES.SHOOTING,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'High-rep shooting drill with three players',
    details: 'Continuous shooting from spots. Each player shoots, rebounds own shot, passes to same person.'
  },

  // === FINISHING DRILLS ===
  {
    id: 'layups-fundamental',
    name: 'Layups (Fundamental)',
    duration: 10,
    category: DRILL_CATEGORIES.FINISHING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Basic layup technique both hands',
    details: '0 dribble layups, 1 dribble layups. Pick up with 2 hands, rip to ear, drive outside knee up, jump UP not out.'
  },
  {
    id: '1v1-with-chair',
    name: '1v1 with a Chair',
    duration: 10,
    category: DRILL_CATEGORIES.FINISHING,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Finishing against late closeout',
    details: 'Defender sits in chair. Offensive player drives. On first dribble, defender gets up and contests.'
  },
  {
    id: 'dematha-finishing',
    name: 'Dematha Finishing',
    duration: 10,
    category: DRILL_CATEGORIES.FINISHING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Competitive finishing drill',
    details: 'Two players at elbow. Coach passes to one. Receiver tries to score before other player cuts them off.'
  },

  // === DEFENSIVE DRILLS ===
  {
    id: 'closeouts',
    name: 'Closeouts',
    duration: 5,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Proper closeout technique',
    details: 'Sprint, chop feet last half, high hands, get lower than offense.'
  },
  {
    id: '1v1-closeouts',
    name: '1v1 Closeouts',
    duration: 10,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Live closeouts and defense',
    details: 'Defender starts under basket, sprints to closeout, plays live defense.'
  },
  {
    id: 'shell-drill-4v4',
    name: '4v4 Shell Drill',
    duration: 10,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Help defense positioning and rotation',
    details: '1 pass away = halfway between man and ball. 2 passes away = 1 foot in paint. 3 passes away = rim line.'
  },
  {
    id: '4v4-cutters',
    name: '4v4 Cutters',
    duration: 10,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Shell drill with offensive cutters',
    details: 'Same as shell drill but offense makes cuts to basket after passing.'
  },
  {
    id: '3v3-no-paint-touches',
    name: '3v3 No Paint Touches',
    duration: 5,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Help defense drill - prevent paint penetration',
    details: 'Offense tries to penetrate to paint. Defense uses help to cut them off. Count paint touches.'
  },
  {
    id: 'ball-pressure-drill',
    name: '4 Second Ball Pressure Drill',
    duration: 5,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'On-ball pressure technique',
    details: 'Defender pressures for 4 seconds, offense dribbles for 4 seconds, defender pressures dead ball.'
  },

  // === REBOUNDING DRILLS ===
  {
    id: 'shadow-rebounding',
    name: 'Shadow Rebounding',
    duration: 5,
    category: DRILL_CATEGORIES.REBOUNDING,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Box out technique without the ball',
    details: 'Make contact, quick turn, butt and back into offensive player, hands up high.'
  },
  {
    id: 'bull-in-the-ring',
    name: 'Bull in the Ring',
    duration: 5,
    category: DRILL_CATEGORIES.REBOUNDING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Competitive box out drill',
    details: 'Keep offensive player away from ball for 4 seconds. Low center of gravity, active feet.'
  },
  {
    id: '2v2-rebounding-battle',
    name: '2v2 Rebounding Battle',
    duration: 10,
    category: DRILL_CATEGORIES.REBOUNDING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Live rebounding competition',
    details: 'Defenders closeout, offense shoots. Box out and fight for rebound. First to 3 points wins.'
  },

  // === TRANSITION DRILLS ===
  {
    id: 'utah-transition',
    name: 'Utah Transition',
    duration: 10,
    category: DRILL_CATEGORIES.TRANSITION,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Pitch ahead drill for transition offense',
    details: 'Rebound, outlet pass, fill lanes, sprint for layup. No over-dribbling.'
  },
  {
    id: 'rim-runner',
    name: 'Rim Runner',
    duration: 5,
    category: DRILL_CATEGORIES.TRANSITION,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Middle lane cutting in transition',
    details: 'Trail player sprints to rim, cuts ball side at top of key for power layup.'
  },
  {
    id: 'wolf-drill',
    name: 'Wolf Drill',
    duration: 5,
    category: DRILL_CATEGORIES.TRANSITION,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: '1v1 transition finishing',
    details: 'Outlet becomes defender. Offensive player uses moves to finish opposite end.'
  },
  {
    id: 'tear-butt-transition',
    name: 'Tear Butt Transition Drill',
    duration: 10,
    category: DRILL_CATEGORIES.TRANSITION,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Live transition offense and defense',
    details: 'Defender must touch baseline before transitioning. Creates numbers advantage for offense.'
  },
  {
    id: 'transition-defense-drill',
    name: 'Transition Defense Drill',
    duration: 5,
    category: DRILL_CATEGORIES.TRANSITION,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Sprint back and stop the ball',
    details: 'Sprint in 4 seconds or less, head on swivel, stop ball, push to sideline, protect basket.'
  },

  // === OFFENSIVE DRILLS ===
  {
    id: '1v1-live',
    name: '1v1 Live',
    duration: 10,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'One on one live play',
    details: 'Limit dribbles (3 max), stay within lane lines. Work on offensive moves and counters.'
  },
  {
    id: '2v2-live',
    name: '2v2 Live',
    duration: 10,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Two on two live play',
    details: 'Penetrate and pitch, dribble hand-offs, ball screens. Make defense commit before passing.'
  },
  {
    id: '3v3-live',
    name: '3v3 Live',
    duration: 10,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Three on three live play',
    details: 'Cut and fill, spacing, ball movement, player movement. Limit dribbles.'
  },
  {
    id: '4v4-2-dribbles',
    name: '4v4 2 Dribbles (Progress to Unlimited)',
    duration: 10,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Four on four with dribble restrictions',
    details: 'Start with 2 dribble max to emphasize passing and cutting. Progress to unlimited dribbles.'
  },
  {
    id: '5v5-5-cut-limit-dribble',
    name: '5v5 5 Cut - Limit Dribble',
    duration: 10,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: '5 out motion offense with dribble limits',
    details: '5 out motion - pass and cut only, no dribbles first 4 minutes, unlimited dribbles last 6 minutes.'
  },
  {
    id: 'penetrate-and-pitch-2v0',
    name: 'Penetrate and Pitch 2v0',
    duration: 5,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Penetrate and pitch technique',
    details: 'Drive to rim explosively, attract help, deliver pass on time and on target. Wing drift or circle behind.'
  },
  {
    id: '2v2-penetrate-and-pitch',
    name: '2v2 Penetrate and Pitch (Chaser)',
    duration: 5,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Live penetrate and pitch with defense',
    details: 'Make defender commit before passing. Stay on one side. Defense live on dribble.'
  },
  {
    id: 'dribble-handoff-2v2',
    name: 'Dribble Hand-Off 2v2',
    duration: 10,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Dribble hand-off technique',
    details: 'If defender tight = backdoor. If defender sagging = handoff and get downhill (2 feet in paint).'
  },
  {
    id: 'fill-cut-1v1',
    name: 'Fill Cut 1v1',
    duration: 10,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Fill cut technique and finishing',
    details: 'Pass to coach, fill cut, receive pass, read defense. Options: shoot, step through drive, pull up.'
  },
  {
    id: 'l-cut-1v1',
    name: 'L Cut 1v1',
    duration: 10,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'L cut and sweep technique',
    details: 'Run across lane, L-cut, receive pass, back pivot, sweep and attack.'
  },

  // === SPECIAL SITUATIONS ===
  {
    id: 'press-break-okie',
    name: 'Press Break - Okie',
    duration: 10,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Okie press breaker',
    details: 'Works against zone or man press. Player drives defender middle, breaks to sideline FT line extended. Stack screen at midcourt.'
  },
  {
    id: 'press-break-fire',
    name: 'Press Break - Fire',
    duration: 5,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Fire press breaker for defender on inbounder',
    details: 'Players run at inbounder yelling "Ball!" Cutter curls around screen for baseball pass and layup.'
  },
  {
    id: 'full-court-pressure',
    name: 'Full Court Pressure',
    duration: 10,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Full court man press defense',
    details: 'Faceguard close to ball, 3/4 position further away, set good traps (feet to feet), hands up and active.'
  },
  {
    id: 'full-court-pressure-and-press-break',
    name: 'Full Court Pressure and 5v0 Press Break',
    duration: 5,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Combined pressure defense and press break',
    details: 'Work both sides: applying pressure and breaking it.'
  },
  {
    id: 'zone-offense-5-cut',
    name: 'Zone Offense - 5 Cut vs 2-3 Zone',
    duration: 10,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: '5 Cut zone offense vs 2-3 zone',
    details: 'Play gaps, ball reversals, inside-out, banana cuts, short corner position. Force defense to make decisions.'
  },
  {
    id: 'blob-series',
    name: 'Baseline Out of Bounds (BLOB)',
    duration: 5,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Baseline inbounds plays',
    details: 'BLOB #1-4: stagger screens and seal options. Safety release to avoid 5-second call.'
  },
  {
    id: 'slob-series',
    name: 'Sideline Out of Bounds (SLOB)',
    duration: 5,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Sideline inbounds plays',
    details: 'SLOB #1 (post option), SLOB #2 (stagger screen), Iso Clear for isolation situations.'
  },
  {
    id: 'quick-hitters',
    name: 'Quick Hitters (2 Cut, Step Up, Flat Twist, Box)',
    duration: 10,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Set plays for quick scoring opportunities',
    details: '2 Cut 5v0 (flex screen), Step Up (flat ball screen), Flat Twist (screen the screener), Box (flare and screens).'
  },

  // === SCRIMMAGE ===
  {
    id: '5v5-scrimmage',
    name: '5v5 Scrimmage',
    duration: 15,
    category: DRILL_CATEGORIES.SCRIMMAGE,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Live 5 on 5 game play',
    details: 'Apply skills in game situations. Coach can add constraints or focus areas.'
  },
  {
    id: '25-point-game',
    name: '25 Point Game',
    duration: 15,
    category: DRILL_CATEGORIES.SCRIMMAGE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Competitive 5v5 with special scoring',
    details: 'Reversal = 3pts, OReb = 2pts, Pass = 1pt, Basket = 2pts, TO = -2pts. First to 25 wins.'
  },
  {
    id: '4v4-scrimmage',
    name: '4v4 Scrimmage',
    duration: 15,
    category: DRILL_CATEGORIES.SCRIMMAGE,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Live 4 on 4 game play',
    details: 'More touches per player. Emphasizes spacing and help defense.'
  },
  {
    id: '3v3-scrimmage',
    name: '3v3 Scrimmage',
    duration: 15,
    category: DRILL_CATEGORIES.SCRIMMAGE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Live 3 on 3 game play',
    details: 'Simplified game situations for younger players.'
  },

  // === CONDITIONING ===
  {
    id: 'conditioning',
    name: 'Conditioning',
    duration: 5,
    category: DRILL_CATEGORIES.CONDITIONING,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Conditioning and fitness work',
    details: 'Sprints, defensive slides, or other conditioning activities.'
  }
];

// Helper function to find drill by ID
export const getDrillById = (id) => {
  return drills.find(drill => drill.id === id);
};

// Helper function to filter drills by category
export const getDrillsByCategory = (category) => {
  return drills.filter(drill => drill.category === category);
};

// Helper function to filter drills by skill level
export const getDrillsBySkillLevel = (skillLevel) => {
  return drills.filter(drill => drill.skillLevel.includes(skillLevel));
};

// Helper function to search drills
export const searchDrills = (query) => {
  const lowerQuery = query.toLowerCase();
  return drills.filter(drill =>
    drill.name.toLowerCase().includes(lowerQuery) ||
    drill.description.toLowerCase().includes(lowerQuery) ||
    (drill.details && drill.details.toLowerCase().includes(lowerQuery))
  );
};
