// Drill Library - Extracted from Coach Jim Huber's Breakthrough Basketball Practice Plans
// Source: 32 practice plans (16 Beginner, 16 Intermediate) + 4 resource PDFs
// Total: 215+ unique drills

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
  CONDITIONING: 'Conditioning',
  PIVOTING: 'Pivoting'
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
    details: 'Dynamic stretching routine without basketballs. Proper form and technique.'
  },
  {
    id: 'dynamic-stretch-without-basketballs',
    name: 'Dynamic Stretch Without Basketballs',
    duration: 6,
    category: DRILL_CATEGORIES.WARMUP,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Dynamic stretching warm-up routine',
    details: 'Proper form and technique. Progress through as many stretches as possible.'
  },
  {
    id: 'pre-practice-character-message',
    name: 'Character Message',
    duration: 3,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Team character message before practice',
    details: 'Coach shares a short message to set tone, focus, and expectations for practice.'
  },

  // === PIVOTING DRILLS ===
  {
    id: 'forward-reverse-pivots',
    name: 'Forward/Reverse Pivots',
    duration: 7,
    category: DRILL_CATEGORIES.PIVOTING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Forward and reverse pivot technique',
    details: 'Staying low, staying on balance. Essential footwork development.'
  },
  {
    id: 'red-light-green-light-stance',
    name: 'Red Light Green Light - Stance/Quick Stop',
    duration: 8,
    category: DRILL_CATEGORIES.PIVOTING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Coming to a quick stop on balance',
    details: 'Staying low, staying on balance, feet barely leave ground. Athletic stance development.'
  },

  // === BALL HANDLING - STATIONARY ONE BALL (BASIC) ===
  {
    id: 'ball-handling-stationary',
    name: 'Ball Handling (Stationary)',
    duration: 10,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Stationary ball handling drills to develop control and confidence',
    details: 'One ball drills: Pound dribble (knee/waist/shoulder), figure 8, around the world, pretzel. Athletic stance, eyes up, smash the ball.'
  },
  {
    id: 'ball-pounds',
    name: 'Ball Pounds',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Stationary pound dribble at different heights',
    details: 'Knee level (10 sec), waist level (5 sec), shoulder level (5 sec). Bend knees, stay low, arm bar out.'
  },
  {
    id: 'ball-pounds-opposite-side',
    name: 'Ball Pounds Opposite Side',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Cross-body stationary pound dribble',
    details: 'Right hand dribbles outside left knee, then switch. Off hand stays active.'
  },
  {
    id: 'popcorn',
    name: 'Popcorn',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Random placement dribbling',
    details: 'Dribble hitting different spots on floor at different heights for 10 seconds each hand.'
  },
  {
    id: 'side-to-side',
    name: 'Side to Side',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Lateral dribbling motion',
    details: 'Dribble side to side from one foot to the other. Off hand stays active. Start slow, go faster.'
  },
  {
    id: 'push-pull',
    name: 'Push/Pull',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Front-back dribbling motion',
    details: 'Push ball back and pull forward on side of body. Start slow, go quicker.'
  },

  // === BALL HANDLING - STATIONARY ONE BALL (INTERMEDIATE) ===
  {
    id: 'side-to-side-cross',
    name: 'Side to Side Cross',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Combination side-to-side and crossover',
    details: 'Two side-to-side dribbles, then crossover. Repeat pattern.'
  },
  {
    id: 'side-to-side-front-back',
    name: 'Side to Side-Front Back',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Combination lateral and push/pull',
    details: 'Alternate between side-to-side and push/pull dribbles.'
  },
  {
    id: 'front-back-side-side-cross',
    name: 'Front to Back-Side to Side-Cross',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Complex combination dribble pattern',
    details: 'Push/pull once, side-to-side once, crossover. Continue pattern.'
  },
  {
    id: 'spider-dribble',
    name: 'Spider Dribble',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Quick hands development drill',
    details: 'Ball centered between legs. Right hand front, left hand back, right hand back, left hand front. Build speed, eyes up.'
  },
  {
    id: 'one-leg-dribble',
    name: 'One Leg Dribble',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Dribble around one leg',
    details: 'Dribble clockwise around right leg, switch to counterclockwise on command. Repeat with left hand/leg.'
  },
  {
    id: 'figure-8-one-hand',
    name: 'Figure 8 - One Hand',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Figure 8 pattern with single hand',
    details: 'Right hand only - around right leg, through legs, around left leg. Keep eyes up, head centered.'
  },
  {
    id: 'figure-8-two-hands',
    name: 'Figure 8 - Two Hands',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Standard figure 8 dribble',
    details: 'Alternate hands through figure 8 pattern. Switch direction after reps.'
  },
  {
    id: 'figure-8-two-dribbles',
    name: 'Figure 8 - Two Dribbles',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Figure 8 with dribble-wrap combo',
    details: 'Dribble once in front, push between legs, wrap around with other hand. Continue pattern.'
  },

  // === BALL HANDLING - MOVING ONE BALL ===
  {
    id: 'ball-handling-moving',
    name: 'Ball Handling (Moving)',
    duration: 10,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Ball handling drills with movement',
    details: 'Control dribble, speed dribble, changing speed, changing direction. Keep head up, protect ball.'
  },
  {
    id: 'one-hand-moving-dribble',
    name: 'One Hand Moving Dribble',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Full court dribbling with one hand',
    details: 'Sideline to sideline with right hand, then left. Open stance, off hand active.'
  },
  {
    id: 'one-hand-side-to-side',
    name: 'One Hand Side to Side',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Moving side-to-side dribble',
    details: 'Side-to-side while moving sideline to sideline. Open stance.'
  },
  {
    id: 'side-to-side-front-to-back-moving',
    name: 'Side to Side-Front to Back (Moving)',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Moving combination dribble',
    details: 'Front to back then side to side while moving. Start slow, increase rhythm.'
  },
  {
    id: 'front-back-side-side-change-moving',
    name: 'Front to Back-Side to Side Change (Moving)',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Moving combo with crossover',
    details: 'Front to back, side to side, then cross while moving.'
  },
  {
    id: 'one-hand-one-leg-moving',
    name: 'One Hand One Leg (Moving)',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Around leg while walking',
    details: 'Dribble around right leg with right hand while moving. Can go either direction.'
  },
  {
    id: 'figure-8-crabwalk',
    name: 'Figure 8 Crabwalk',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Figure 8 while walking',
    details: 'Pass ball between legs after each step while walking sideline to sideline.'
  },
  {
    id: 'figure-8-dribble-moving',
    name: 'Figure 8 Dribble (Moving)',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Figure 8 pattern while advancing',
    details: 'Execute figure 8 dribble while walking. Can go either direction.'
  },

  // === BALL HANDLING - TWO BALL STATIONARY ===
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
    id: 'two-ball-pound-dribble',
    name: 'Two Ball Pound Dribble',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Simultaneous pound dribble',
    details: 'Execute pound dribble at knee, waist, and shoulder height with two balls.'
  },
  {
    id: 'two-ball-alternate-dribble',
    name: 'Two Ball Alternate Dribble',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Alternating pound dribble',
    details: 'Alternate each ball at knee, waist, and shoulder height.'
  },
  {
    id: 'two-ball-side-to-side',
    name: 'Two Ball Side to Side',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Simultaneous lateral dribble',
    details: 'Execute side-to-side dribble with ball in each hand.'
  },
  {
    id: 'egg-beater',
    name: 'Egg Beater',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'In-and-out pattern with two balls',
    details: 'Dribble balls in and out with both hands. Both in, both out simultaneously.'
  },
  {
    id: 'two-ball-push-pull-sync',
    name: 'Push/Pull - In Sync',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Synchronized push/pull',
    details: 'Execute push/pull dribble with both hands moving together.'
  },
  {
    id: 'two-ball-push-pull-async',
    name: 'Push/Pull - Out of Sync',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Alternating push/pull',
    details: 'One hand pushing while other pulling. One going up, one going back.'
  },
  {
    id: 'one-low-one-high',
    name: 'One Low One High',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Different height dribbling',
    details: 'One ball at knee height, other at waist or shoulder. Switch hands.'
  },
  {
    id: 'two-ball-crossover',
    name: 'Two Ball Crossover',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Simultaneous crossover',
    details: 'Three hard dribbles, then cross both balls. Progress from 3 to 2 to 1 dribble.'
  },
  {
    id: 'one-ball-circle-one-pound',
    name: 'One Ball Circle and One Ball Pound',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Combination circle and pound',
    details: 'Right hand around right leg, left hand pound in front. Switch sides.'
  },
  {
    id: 'two-ball-figure-8',
    name: 'Two Ball Figure 8',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Figure 8 with second ball',
    details: 'One ball in figure 8, other ball dribbled in front switching hands.'
  },

  // === BALL HANDLING - TWO BALL MOVING ===
  {
    id: 'two-ball-on-the-move',
    name: '2 Ball on the Move',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Coach-directed two ball movement',
    details: 'Coach gestures: forward, backward, lateral, stop, alternate heights. Forces eyes up.'
  },
  {
    id: 'two-ball-follow-the-leader',
    name: 'Follow the Leader',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Partner mirroring drill',
    details: 'Leader dribbles two balls with movement, follower mirrors. Challenges coordination.'
  },
  {
    id: 'two-ball-partner-passing',
    name: '2 Ball Partner Passing',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Passing while dribbling two balls',
    details: 'One partner dribbles two balls, passes one while crossover with other.'
  },
  {
    id: 'two-ball-resistance',
    name: '2 Ball Resistance',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Dribbling under pressure',
    details: 'Partner provides resistance on shoulders. Dribbler explodes when released.'
  },

  // === BALL HANDLING - CONTROL DRIBBLE ===
  {
    id: 'control-dribble-stationary',
    name: 'Control Dribble - Stationary',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Protected dribble stance',
    details: 'Face baseline, closed off stance, dribble by back leg, arm bar up.'
  },
  {
    id: 'control-dribble-forward',
    name: 'Control Dribble - Forward',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Advancing with control dribble',
    details: 'Green light = move forward with step reach. Red light = stop. Feet get wider.'
  },
  {
    id: 'control-dribble-backward',
    name: 'Control Dribble - Backwards',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Retreat dribble technique',
    details: 'Backward movement on command. Stance remains wide with controlled dribble.'
  },
  {
    id: 'control-dribble-multidirectional',
    name: 'Control Dribble - Forward and Backward',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Coach-directed control dribble',
    details: 'Hand signals for forward, backward, right, left. Closed off stance. Eyes up.'
  },
  {
    id: '1v1-control-dribble',
    name: '1v1 Control Dribble',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Live control dribble pressure',
    details: 'Dribble to 3-point line, explode back. If defender closes out, attack. 3 dribble max, stay in lane.'
  },

  // === BALL HANDLING - SPEED DRIBBLE ===
  {
    id: 'speed-dribble-quick-stop',
    name: 'Speed Dribble with Quick Stop',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Full speed dribbling technique',
    details: 'Triple threat start, explosive first step, speed dribble 3/4 court, jump stop. No false steps.'
  },
  {
    id: 'duke-speed-dribble',
    name: 'Duke Speed Dribble',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Hand-switching speed dribble',
    details: 'Switch hands every dribble. Protects ball from trailing defenders. Quick stop 3/4 court.'
  },
  {
    id: 'two-ball-speed-dribble',
    name: '2 Ball Speed Dribble',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Speed with two basketballs',
    details: 'Sprint down court dribbling both balls in sync. Quick stop 3/4 court.'
  },
  {
    id: 'two-ball-speed-alternating',
    name: '2 Ball Speed Dribble Alternating',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Alternating two ball sprint',
    details: 'Sprint while alternating dribbles. Quick stop 3/4 court.'
  },
  {
    id: 'speed-dribble-hand-signals',
    name: 'Speed Dribble with Hand Signals',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Coach-directed speed drill',
    details: 'Coach signals: forward, retreat, control dribble. Use both hands.'
  },
  {
    id: '1v1-with-chaser',
    name: '1v1 with Chaser',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Speed dribble under pressure',
    details: 'From midcourt, front player speed dribbles, chaser tries to knock ball out. Take step first, push ball out.'
  },
  {
    id: 'partner-dribble-tag',
    name: 'Partner Dribble Tag',
    duration: 7,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Tag game while dribbling',
    details: 'Both dribbling, one is "it". Tag partner. Allow time to release. Work on speed and direction changes.'
  },
  {
    id: 'partner-speed-dribble',
    name: 'Partner Speed Dribble',
    duration: 5,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Partner speed dribble racing drill',
    details: 'Players pair up with one basketball. First player speed dribbles to the other end and back, then partner goes. Change rules each race: left hand, right hand, alternate. Focus on eyes up and ball control.'
  },
  {
    id: 'close-practice-reminders',
    name: 'Close Practice - Reminders',
    duration: 3,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Close practice with reminders and wrap-up',
    details: 'Finish practice with a short team review and reminders. Reinforce key learnings, next steps, and positive habits.'
  },
  {
    id: 'dribble-tag-1v-all',
    name: 'Dribble Tag 1v All',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Group elimination tag',
    details: 'One player "it", tags others out until none left. Multiple ball handling skills.'
  },

  // === BALL HANDLING - CHANGE OF SPEED ===
  {
    id: 'stop-and-go-move',
    name: 'Stop and Go Move',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Speed variation technique',
    details: 'Speed dribble, dead stop (stay low, sell fake), go. 3 times to 3/4 court.'
  },
  {
    id: 'hesitation-move',
    name: 'Hesitation Move',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Pace change deception',
    details: 'Speed dribble, slow down (relax, sell fake), speed up. 3 times to 3/4 court.'
  },

  // === BALL HANDLING - CHANGE OF DIRECTION ===
  {
    id: 'cone-dribbling',
    name: 'Cone Dribbling',
    duration: 10,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Change of direction dribbling through cones',
    details: 'Crossover, between legs, behind back, inside-out moves at each cone.'
  },
  {
    id: 'stationary-crossover',
    name: 'Stationary Crossover',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Crossover fundamentals',
    details: 'Two pound dribbles, crossover. Work down to continuous. Below knees, tight, quick, cross near opposite foot.'
  },
  {
    id: 'stationary-behind-back',
    name: 'Stationary Behind the Back',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Behind back technique',
    details: 'Two pound dribbles, behind back crossover. Work down to continuous. Low, tight, quick, protects with body.'
  },
  {
    id: 'stationary-between-legs',
    name: 'Stationary Between the Legs',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Between legs fundamentals',
    details: 'Two pound dribbles, between legs. Work down to continuous. Chest/shoulders forward, feet/hips pointed direction.'
  },
  {
    id: 'inside-out-hand-action',
    name: 'Inside Out - Hand Action',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Inside-out ball manipulation',
    details: 'Feet shoulder width. Stay on side/top of ball. Bring to middle and back repeatedly.'
  },
  {
    id: 'inside-out-violent-jab',
    name: 'Inside Out - Violent Jab',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Inside-out with jab step',
    details: 'Violently jab opposite foot. Bring ball to middle during jab. Sell with head and eyes.'
  },
  {
    id: 'inside-out',
    name: 'Inside Out',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Complete inside-out move',
    details: 'Combine hand action and violent jab. Long step forward, shoulder to hip. Develop "go to" move.'
  },
  {
    id: 'inside-out-to-counter',
    name: 'Inside Out to Counter Move',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Combination moves',
    details: 'Inside-out followed by crossover, between legs, or behind back. Double move breaks down defenders.'
  },
  {
    id: 'cones-crossover',
    name: 'Straight/Staggered Cones - Crossover',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Crossover at each cone',
    details: 'Execute crossover at every cone. Change speeds. Speed dribble back.'
  },
  {
    id: 'cones-between-legs',
    name: 'Straight/Staggered Cones - Between the Legs',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Between legs at each cone',
    details: 'Execute between legs at every cone. Change speeds. Speed dribble back.'
  },
  {
    id: 'cones-behind-back',
    name: 'Straight/Staggered Cones - Behind the Back',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Behind back at each cone',
    details: 'Execute behind back at every cone. Change speeds. Speed dribble back.'
  },
  {
    id: 'cones-inside-out',
    name: 'Straight Cones - Inside Out',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Inside-out at each cone',
    details: 'Execute inside-out at every cone. Return changing direction every two dribbles.'
  },
  {
    id: 'cones-double-move',
    name: 'Straight Cones - Double Move',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Combination moves at cones',
    details: 'Execute double move at every cone. Return changing direction every two dribbles.'
  },
  {
    id: 'change-of-direction-moves',
    name: 'Change of Direction Moves',
    duration: 10,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Crossover, behind back, between legs, inside-out',
    details: 'Using cones, practice all change of direction moves. Change speeds, eyes up, keep ball low, go hard.'
  },

  // === BALL HANDLING - ESCAPE/BEATING PRESSURE ===
  {
    id: 'escape-dribble-change-directions',
    name: 'Escape Dribble - Change Directions',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Pressure release technique',
    details: 'Two hard forward, two back, change direction forward, two back. Eyes forward, pull ball back hard, explode.'
  },
  {
    id: 'escape-dribble-inside-out',
    name: 'Escape Dribble - Inside Out',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Escape with inside-out',
    details: 'Two forward, two back, inside-out forward, two back. Use both hands.'
  },
  {
    id: 'escape-dribble-step-back-crossover',
    name: 'Escape Dribble - Step Back Crossover',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Step back to crossover',
    details: 'Two dribbles, dip shoulder, drop front foot hard, quick cross. Avoid 5-second violation.'
  },
  {
    id: 'two-dribble-step-back-crossover',
    name: '2 Dribble - Step Back Crossover',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Cone drill with step back cross',
    details: 'Speed dribble to cone, back dribble twice, crossover. Continue pattern.'
  },
  {
    id: 'two-dribble-step-back-inside-out',
    name: '2 Dribble Step Back Inside Out',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Cone drill with inside-out',
    details: 'Speed dribble to cone, back dribble twice, inside-out. Continue pattern.'
  },
  {
    id: 'one-dribble-step-back-crossover',
    name: '1 Dribble - Step Back Crossover',
    duration: null,
    category: DRILL_CATEGORIES.BALL_HANDLING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Quick step back at cones',
    details: 'Reach cone, step back, crossover, explode. Dip shoulder to create space.'
  },

  // === PASSING DRILLS - STATIONARY ===
  {
    id: 'passing-fundamental',
    name: 'Passing (Fundamental)',
    duration: 10,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Basic passing techniques and catching',
    details: 'Chest pass, bounce pass, overhead pass. Step, snap, follow through. On target, one time, on a line.'
  },
  {
    id: 'passing-chest-bounce-overhead',
    name: 'Passing: Chest, Bounce, Overhead',
    duration: 7,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Stationary passing drills with chest, bounce, and overhead passes',
    details: 'Spend 90 seconds on each stationary passing drill. Focus on passing on a line and passing accurately.'
  },
  {
    id: 'chest-pass',
    name: 'Chest Pass',
    duration: null,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Fundamental chest pass',
    details: 'Thumbs facing in, step, lock elbows, snap wrists, thumbs down. 15 feet apart. Show target, meet ball in air.'
  },
  {
    id: 'bounce-pass',
    name: 'Bounce Pass',
    duration: null,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Fundamental bounce pass',
    details: 'Same as chest pass. Throw 3/4 of way to receiver at waist height. Lunge step, shoulders over knee.'
  },
  {
    id: 'flick-pass',
    name: 'Flick Pass',
    duration: null,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'One-handed flick pass',
    details: 'Haircut pass - by defender\'s ear. Lock elbow, flick wrist, one hand. Step with same foot. Add fake.'
  },
  {
    id: 'flick-bounce-pass',
    name: 'Flick Bounce Pass',
    duration: null,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'One-handed bounce variation',
    details: 'Rip ball shoulder to shoulder. Step across body with opposite foot. Step through defender.'
  },
  {
    id: 'overhead-pass',
    name: 'Overhead Pass',
    duration: null,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Two-handed overhead pass',
    details: 'Same grip as chest. Ball tight to head. Step, lock elbows, snap wrists. Aim at forehead. For skip passes, outlet, inbounds.'
  },
  {
    id: 'baseball-pass',
    name: 'Baseball Pass',
    duration: null,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Long distance one-hand pass',
    details: 'Ball in dominant hand, off hand on side. Lead step, ear level, lock elbow, snap wrist. Arc and rotation.'
  },
  {
    id: 'two-ball-flick-passes',
    name: '2 Ball Flick Passes',
    duration: null,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Rapid fire partner passing',
    details: '15 feet apart, both have ball. Continually throw flick passes back and forth.'
  },
  {
    id: 'cp3-passing',
    name: 'CP3 Passing',
    duration: null,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'One-handed passing drill',
    details: 'Exaggerate sitting stance. 5-8 feet apart. One-handed air and bounce passes. Lock elbow, snap wrist, on a line.'
  },
  {
    id: 'flick-pass-air-and-bounce',
    name: 'Flick Pass - Air and Bounce',
    duration: null,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Combination passing drill',
    details: '5-8 feet apart. One player air pass, other bounce pass simultaneously.'
  },
  {
    id: 'flick-pass-off-dribble',
    name: 'Flick Pass off the Dribble',
    duration: null,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Passing after dribble',
    details: 'Smash dribble, pass immediately. Receiver presents target.'
  },
  {
    id: 'crossover-flick-pass',
    name: 'Crossover Flick Pass',
    duration: null,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Crossover into pass',
    details: 'Smash dribble, crossover, pass immediately. Complete with both hands.'
  },
  {
    id: 'double-move-flick-pass',
    name: 'Double Move Flick Pass',
    duration: null,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Combination move into pass',
    details: 'Smash dribble, crossover left and right, pass immediately.'
  },
  {
    id: '3-man-stationary-passing',
    name: '3-Man Stationary Passing',
    duration: null,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Triangle passing fundamentals',
    details: 'Groups of 3. Step with pivot foot, lock elbow, snap wrist. Ball in air, feet in air. Triple threat catch.'
  },

  // === PASSING DRILLS - ON THE MOVE ===
  {
    id: 'line-passing',
    name: 'Line Passing',
    duration: 10,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Passing on the move with proper footwork',
    details: 'Partners pass while moving down court. Ball in air, feet in air. Turn and face after catch.'
  },
  {
    id: 'line-passing-with-rip',
    name: 'Line Passing with Rip',
    duration: null,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Passing with rip through',
    details: 'Dribble with outside hand. Quick stop, step through, rip across body, flick pass with outside hand.'
  },
  {
    id: 'monkey-in-the-middle',
    name: 'Monkey in the Middle',
    duration: null,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Passing with passive defense',
    details: '15 feet apart, defender in middle with arms high or low. Read defender, make proper pass, follow ball to defense.'
  },
  {
    id: 'monkey-in-the-middle-live',
    name: 'Monkey in the Middle (Live)',
    duration: 5,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Live pressure passing drill',
    details: 'Defender tries to steal. Can\'t pass until defender touches. Athletic stance, rip hard, pass fakes, strong base.'
  },
  {
    id: 'triangle-passing-3v1',
    name: 'Triangle Passing 3v1',
    duration: null,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Decision making passing drill',
    details: 'Defender in middle tries to deflect. Use pass fakes, look opposite, avoid slow/bounce passes. Count deflections.'
  },
  {
    id: 'triangle-passing-3v2',
    name: 'Triangle Passing 3v2',
    duration: null,
    category: DRILL_CATEGORIES.PASSING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Advanced passing with help',
    details: 'One on ball, one anticipator. Square shoulders for options. Anticipator becomes ball pressure after pass.'
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

  // === SHOOTING DRILLS - FORM ===
  {
    id: 'form-shooting',
    name: 'Form Shooting',
    duration: 5,
    category: DRILL_CATEGORIES.SHOOTING,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Fundamental shooting mechanics and form development',
    details: 'BEEF technique: Balance, Eyes, Elbow, Follow-through. Start close to basket and gradually move back.'
  },
  {
    id: 'pendulum-shooting',
    name: 'Pendulum Shooting',
    duration: null,
    category: DRILL_CATEGORIES.SHOOTING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Shooting motion practice',
    details: 'Hand on knee, swing up. Coach calls "Set" (lock elbow), "Shot" (follow through). Check BEEF.'
  },
  {
    id: 'lying-down-one-hand',
    name: 'Lying Down Shooting - One Hand',
    duration: null,
    category: DRILL_CATEGORIES.SHOOTING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Rotation and follow through',
    details: 'Lie on back. Extend arm, lock elbow, snap wrist. Ball straight up and down. Great rotation.'
  },
  {
    id: 'lying-down-two-hands',
    name: 'Lying Down Shooting - Two Hands',
    duration: null,
    category: DRILL_CATEGORIES.SHOOTING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Full form while lying down',
    details: 'Add off hand on side. Four fingers to ceiling, thumbs form T. Can elevate elbow as strength improves.'
  },
  {
    id: 'line-shooting-one-hand',
    name: 'Line Shooting - One Hand',
    duration: null,
    category: DRILL_CATEGORIES.SHOOTING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Accuracy development',
    details: '12 feet apart. Ball lands on line = point. Great shooters don\'t miss right or left.'
  },
  {
    id: 'line-shooting-two-hands',
    name: 'Line Shooting - Two Hands',
    duration: null,
    category: DRILL_CATEGORIES.SHOOTING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Full form line shooting',
    details: 'Add guide hand. Progress: from pocket, after dribble. Hips apart, staggered feet, elbow up, follow through.'
  },
  {
    id: 'backboard-shooting-one-hand',
    name: 'Backboard Shooting - One Hand',
    duration: null,
    category: DRILL_CATEGORIES.SHOOTING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Mechanics focus on backboard',
    details: 'Face backboard to side. Hit same spot every time. Focus on mechanics not makes/misses.'
  },
  {
    id: 'backboard-shooting-two-hands',
    name: 'Backboard Shooting - Two Hands',
    duration: null,
    category: DRILL_CATEGORIES.SHOOTING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Full form backboard work',
    details: 'Add guide hand. Hips down, ready to shoot. Can be done at wall.'
  },
  {
    id: 'backboard-shooting-pocket',
    name: 'Backboard Shooting - Shooting Pocket',
    duration: null,
    category: DRILL_CATEGORIES.SHOOTING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'From pocket position',
    details: 'Ball starts in shooting pocket. Can add dribble and ball pickup.'
  },
  {
    id: 'feather-shooting-one-hand',
    name: 'Feather Shooting - One Hand',
    duration: null,
    category: DRILL_CATEGORIES.SHOOTING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Close range form work',
    details: 'One giant step from basket. Five spots. Make 1-3 before rotating as skill develops.'
  },
  {
    id: 'feather-shooting-two-hands',
    name: 'Feather Shooting - Two Hands',
    duration: null,
    category: DRILL_CATEGORIES.SHOOTING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Full form close range',
    details: 'Step and half from rim. Five spots. Check BEEF on every shot. Make certain number before rotating.'
  },
  {
    id: 'feather-shooting-shot-pocket',
    name: 'Feather Shooting - Shot Pocket',
    duration: null,
    category: DRILL_CATEGORIES.SHOOTING,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'From shooting pocket',
    details: 'Two giant steps away. Ball from pocket. Land slightly forward. Don\'t progress if mechanics fall apart.'
  },

  // === SHOOTING DRILLS - GAME SITUATIONS ===
  {
    id: 'klay-thompson-shooting',
    name: 'Klay Thompson Shooting',
    duration: 10,
    category: DRILL_CATEGORIES.SHOOTING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Progressive shooting drill - step back after 2 makes',
    details: 'Receive pass, 1-2 step or hop, shoot. Make 2 = step back. Miss 2 = step in. Identifies shooting range.'
  },
  {
    id: 'game-shots',
    name: 'Game Shots',
    duration: 10,
    category: DRILL_CATEGORIES.SHOOTING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Shooting from game situations',
    details: 'Speed dribble to quick stop, pivot to basket. Self-toss with 1-2 step. Finish misses. Mix dribble variations.'
  },
  {
    id: 'game-shots-pivot',
    name: 'Game Shots: Pivot',
    duration: null,
    category: DRILL_CATEGORIES.SHOOTING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Shooting with four pivot',
    details: 'Pass to self, turn in air with four pivot while catching. Work on foot positioning while ball in air.'
  },
  {
    id: '3-person-2-ball-shooting',
    name: '3 Person/2 Ball Shooting',
    duration: 10,
    category: DRILL_CATEGORIES.SHOOTING,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'High-rep shooting drill with three players',
    details: 'Continuous shooting from spots. Shoot, rebound own shot, pass to same person. Can add 1-dribble pull up. Make competitive.'
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
    id: 'layups-0-1-dribble',
    name: 'Layups: 0 Dribbles & 1 Dribble',
    duration: 6,
    category: DRILL_CATEGORIES.FINISHING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Layup finishing techniques from both right and left sides',
    details: 'Work on 0 dribble and 1 dribble layups from the first hash mark. Emphasize ripping the ball to the ear, using the backboard, and proper footwork.'
  },
  {
    id: 'cadence-drill',
    name: 'Cadence Drill',
    duration: null,
    category: DRILL_CATEGORIES.FINISHING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Step-by-step layup instruction',
    details: 'Coach calls: Stance, Right (step), Dribble, Rip, Left step (shoot). Each step of layup correctly. Both hands, can go off two feet.'
  },
  {
    id: 'layup-0-dribbles',
    name: 'Layup - 0 Dribbles',
    duration: null,
    category: DRILL_CATEGORIES.FINISHING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Close range finishing',
    details: 'Start on block in lunge. Inside foot back, ball outside. Step/plant inside foot, drive outside knee. Angle to top of square, upper right corner. Don\'t open up, jump high.'
  },
  {
    id: 'layup-1-dribble',
    name: 'Layup - 1 Dribble',
    duration: null,
    category: DRILL_CATEGORIES.FINISHING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'One dribble finishing',
    details: 'Outside foot back, inside forward, ball outside. Step with outside foot/dribble, step/plant inside foot, drive up outside knee. Both sides, both hands.'
  },
  {
    id: 'layup-1-dribble-elbow',
    name: 'Layup - 1 Dribble Elbow',
    duration: null,
    category: DRILL_CATEGORIES.FINISHING,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Attack from elbow',
    details: 'Triple threat at elbow. Attack hard to get there in 1 dribble. Both sides, both hands.'
  },
  {
    id: 'layup-1-dribble-3pt',
    name: 'Layup - 1 Dribble 3-Point Line',
    duration: null,
    category: DRILL_CATEGORIES.FINISHING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Extended finishing',
    details: 'Triple threat at 3-point line. Attack hard to reach rim in 1 dribble. Both sides, both hands.'
  },
  {
    id: 'layups-half-court',
    name: 'Layups ½ Ct.',
    duration: null,
    category: DRILL_CATEGORIES.FINISHING,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Layups from half court',
    details: 'Players start at half court and drive to the basket for layups. Focus on proper footwork and finishing technique.'
  },
  {
    id: 'finishing-layups',
    name: 'Finishing: Lay Ups',
    duration: null,
    category: DRILL_CATEGORIES.FINISHING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Layup finishing techniques',
    details: 'Work on various layup finishing techniques including reverses, off-hand finishes, and contact finishes.'
  },
  {
    id: '1v1-foster-drill',
    name: '1v1 Foster Drill',
    duration: 5,
    category: DRILL_CATEGORIES.OFFENSIVE_SKILLS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: '1v1 speed dribble drill',
    details: 'Speed dribble around a cone and try to beat defender to the basket. Focus on dribbling fast, attacking the basket, and reading the defender.'
  },
  {
    id: '2v1-halfcourt-break',
    name: '2v1 Halfcourt Break',
    duration: 5,
    category: DRILL_CATEGORIES.TEAM_OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: '2 on 1 fast break drill',
    details: 'Start at half court with 2 offense vs 1 defense. Focus on reading the defense and making the correct pass, finishing at the rim.'
  },
  {
    id: '3v3-x-out-closeouts',
    name: '3v3 X Out Closeouts',
    duration: 5,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: '3v3 closeout drill',
    details: '3v3 closeout drill focusing on proper closeout technique and defensive rotations.'
  },
  {
    id: '4v4-cutters-motion-offense',
    name: '4v4 Cutters Motion Offense',
    duration: 10,
    category: DRILL_CATEGORIES.TEAM_OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: '4v4 motion offense with cutters',
    details: '4v4 motion offense drill with 2 dribble limit. Focus on proper spacing, reading defense and making correct cuts, squaring up to the basket.'
  },
  {
    id: '4v4-shell-defense-cutters',
    name: 'Defense 4v4 Shell Cutters',
    duration: 10,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: '4v4 defensive shell drill with cutters',
    details: '4v4 defensive shell drill working on defensive positioning. Focus on on-ball defense, gap defense, help side defense, and seeing the ball at all times.'
  },
  {
    id: '1v1-with-chair',
    name: '1v1 with a Chair',
    duration: 10,
    category: DRILL_CATEGORIES.FINISHING,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Finishing against late closeout',
    details: 'Defender sits in chair. Offensive player drives. On first dribble, defender gets up and contests. Can finish 1 foot or 2 foot power.'
  },
  {
    id: '1v1-with-chair-variations',
    name: '1v1 with a Chair - Variations',
    duration: null,
    category: DRILL_CATEGORIES.FINISHING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Advanced chair drill options',
    details: 'Crossover step or step through and rip before drive. Step through to middle. Self-toss, pivot, drive with layers.'
  },
  {
    id: 'dematha-finishing',
    name: 'Dematha Finishing',
    duration: 10,
    category: DRILL_CATEGORIES.FINISHING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Competitive finishing drill',
    details: 'Two players at elbow. Coach passes to one. Receiver tries to score before other player cuts them off. 1 or 2 foot finish. Coach can vary pass difficulty.'
  },

  // === DEFENSIVE DRILLS - STANCE & FUNDAMENTALS ===
  {
    id: 'defensive-warmup',
    name: 'Defensive Warm-up',
    duration: 5,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Defensive stance, slides, and positioning',
    details: 'Focus on proper stance, lateral movement, and maintaining position.'
  },
  {
    id: 'defensive-stance-mirror',
    name: 'Defensive Stance and Stance Mirror Drill',
    duration: 6,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Proper defensive stance development',
    details: 'Staying low in athletic stance, proper balance. Coach leads, players mirror. Quick feet, yell "Defense".'
  },
  {
    id: 'mirror-drill',
    name: 'Mirror Drill',
    duration: null,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Defensive movement fundamentals',
    details: 'Run in place with quick feet. Coach yells "Defense", players get in stance. Where coach goes, players go. Push off opposite leg, step reach, stay low, don\'t bring feet together.'
  },
  {
    id: 'quick-turn-drill',
    name: 'Quick Turn Drill',
    duration: null,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Recovery technique when beaten',
    details: 'Quick feet. Coach points shoulder. Both feet barely off floor simultaneously. Hips/shoulders turn to catch driving player. Turn back to face up.'
  },
  {
    id: 'quick-turn-push-steps',
    name: 'Quick Turn → Push Steps',
    duration: null,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Recovery with push steps',
    details: 'Quick turn toward pointed shoulder, two push steps at 45 degrees, sprint back and face up.'
  },
  {
    id: 'quick-turn-step-through',
    name: 'Quick Turn → Step Through',
    duration: null,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Recovery to get in front',
    details: 'Run where offensive player is going, not where he is. Crossover step, sprint to cut off, break down. Eyes on player.'
  },
  {
    id: 'closeouts',
    name: 'Closeouts',
    duration: 5,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Proper closeout technique',
    details: 'Sprint, chop feet last half, high hands, get lower than offense. Turn and sprint, hands up halfway, chop steps, trace ball. Foot to foot with offense.'
  },
  {
    id: 'team-closeout-drill',
    name: 'Team Closeout Drill',
    duration: null,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Group closeout practice',
    details: 'Defensive stance, turn to skip side, sprint out, halfway hands up, chop steps and get low. Build speed each time.'
  },
  {
    id: 'guarding-jab-steps',
    name: 'Guarding Jab Steps',
    duration: null,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Reaction to offensive jab',
    details: 'Offensive jab = drop step. When come back, bring lead foot back and even up. Ball fake = stay down, hands up. Yell "Shot".'
  },
  {
    id: 'team-contested-shot-drill',
    name: 'Team Contested Shot Drill',
    duration: null,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Contest without jumping',
    details: 'Coach jabs, defender drops. Coach squares, defender evens up. Three pump fakes, defender mirrors with hands. Coach shoots, all yell "Shot".'
  },

  // === DEFENSIVE DRILLS - 1v1 ===
  {
    id: '1v0-cover-the-court',
    name: '1v0 Cover the Court',
    duration: null,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Defensive movement pattern',
    details: 'Push step to cone 1, sprint/closeout cone 2, quick turn/push steps cone 3, turn/sprint/closeout cone 4, quick turn/step through/sprint cone 5, push step finish. Both directions.'
  },
  {
    id: '1v1-closeouts-on-touch',
    name: '1v1 Closeouts on Touch',
    duration: null,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Closeout with live drive',
    details: 'Pass, sprint and closeout, touch. Offense has 4 dribbles to get in lane. Prevent penetration "outside our house". Score: lane = 1pt, score = 2pts.'
  },
  {
    id: '1v1-closeouts',
    name: '1v1 Closeouts',
    duration: 10,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Live closeouts and defense',
    details: 'Defender starts under basket, sprints to closeout, plays live defense. No touch needed. Close out at angle forcing to corner. 4 dribbles to lane.'
  },

  // === DEFENSIVE DRILLS - HELP & TEAM ===
  {
    id: 'weakside-to-helpside-closeout',
    name: 'Weakside to Helpside Closeout',
    duration: null,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Help position and rotation',
    details: 'Players on equator. Coach dribbles at basket, players push step twice. Coach dribbles back, players return. Skip pass, sprint and closeout. See ball and man.'
  },
  {
    id: 'ball-pressure',
    name: 'Ball Pressure',
    duration: null,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'On-ball pressure fundamentals',
    details: 'Arm\'s length in triple threat. Active hands. Tighter if ball above head. Foot to foot. Yell "Ball" if dribble alive, "Dead" if picked up.'
  },
  {
    id: 'ball-pressure-drill',
    name: '4 Second Ball Pressure Drill',
    duration: 5,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'On-ball pressure technique',
    details: 'Offense passes to self, pivots, faces. Defender pressures 4 sec. Offense dribbles 4 sec, defender cuts off. Offense picks up, defender pressures dead ball. Stay low, active hands, keep out of lane.'
  },
  {
    id: '2v2-defense',
    name: '2v2 Defense',
    duration: null,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Help defense principles',
    details: 'Offense drives to gap, help defender cuts off, kick out, sprint and closeout, repeat. Off-ball defender halfway between man and ball. Talk - "Gap/help" and "Ball".'
  },
  {
    id: '3v3-defense',
    name: '3v3 Defense',
    duration: null,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Help defense rotation',
    details: 'Skip pass drill. Off-ball in gap, two passes away in lane. Move when ball in air. Sprint to help location. Butt/back to basket. See man and ball.'
  },
  {
    id: '3v3-no-paint-touches',
    name: '3v3 No Paint Touches',
    duration: 5,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Help defense drill - prevent paint penetration',
    details: 'Offense tries to penetrate to paint. Defense uses help to cut them off. Count paint touches for 20 sec. Offense not scoring, just reaching paint. No cutting, return to spots.'
  },
  {
    id: '3v3-live',
    name: '3v3 Live',
    duration: null,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Live 3-on-3 defense',
    details: 'Start with skip passes. Coach yells "Live". Offense can penetrate gap or baseline. Backside defender drops on baseline drive, top drops to middle, rotate and closeout.'
  },
  {
    id: 'shell-drill-4v4',
    name: '4v4 Shell Drill',
    duration: 10,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Help defense positioning and rotation',
    details: '1 pass away = halfway between man and ball. 2 passes away = 1 foot in paint. 3 passes away = rim line. Move when ball in air, sprint to help, see ball and man.'
  },
  {
    id: '4v4-shell-stationary',
    name: '4v4 Shell Stationary',
    duration: null,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Shell drill teaching positions',
    details: 'Pass and allow defense to rotate. Baseline drive = help from weak side. Keep ball one side. Can add coach at top for 1/2 pass away work. Interchange to switch positions. Don\'t go too fast - learn positions.'
  },
  {
    id: '4v4-cutters',
    name: '4v4 Cutters',
    duration: 10,
    category: DRILL_CATEGORIES.DEFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Shell drill with offensive cutters',
    details: 'Same as shell drill but offense cuts after passing. Defense works on defending cutters. Offense fills vacated spot. Gradually add concepts.'
  },

  // === REBOUNDING DRILLS ===
  {
    id: 'shadow-rebounding',
    name: 'Shadow Rebounding',
    duration: 5,
    category: DRILL_CATEGORIES.REBOUNDING,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Box out technique without the ball',
    details: 'Make contact, quick turn, butt and back into offensive player, hands up high. Step across with foot, forearm to chest, quick turn, push step with offense. Can add coach directing movement and "Go get it".'
  },
  {
    id: 'bull-in-the-ring',
    name: 'Bull in the Ring',
    duration: 5,
    category: DRILL_CATEGORIES.REBOUNDING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Competitive box out drill',
    details: 'Keep offensive player away from ball for 4 seconds. Low center of gravity, active feet. Offense can spin or swim. Consequence for losing.'
  },
  {
    id: 'backboard-rebounding',
    name: 'Backboard Rebounding',
    duration: null,
    category: DRILL_CATEGORIES.REBOUNDING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Rebound and finish',
    details: 'Throw ball off backboard, jump up, grab with two hands, land on two feet, go right back up and shoot. Grab at highest point, shoulders parallel to backboard.'
  },
  {
    id: 'backboard-rebounding-shot-fake',
    name: 'Backboard Rebounding - Shot Fake',
    duration: null,
    category: DRILL_CATEGORIES.REBOUNDING,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Rebound with pump fake',
    details: 'Same as backboard rebounding. Add pump fake before shooting. Head and ball move, not hips.'
  },
  {
    id: '1v1-rebounding',
    name: '1v1 Rebounding',
    duration: null,
    category: DRILL_CATEGORIES.REBOUNDING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Live rebounding competition',
    details: 'Coach tosses off backboard. Players fight for rebound. Who gets it becomes offense, other defense. Can pass back to coach for reset. Someone must score. Limit dribbles.'
  },
  {
    id: '2v2-rebounding-battle',
    name: '2v2 Rebounding Battle',
    duration: 10,
    category: DRILL_CATEGORIES.REBOUNDING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Live rebounding competition',
    details: 'Defenders on baseline, offense on elbows. Pass to offense, close out, offense shoots immediately, box out. Defense rebound = go on offense and get point. Offense make/rebound = stay on offense and get point. First to 3 wins.'
  },
  {
    id: '2v2-rebounding-battle-live',
    name: '2v2 Rebounding Battle Live',
    duration: null,
    category: DRILL_CATEGORIES.REBOUNDING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Live 2v2 after rebound',
    details: 'Same setup. Whoever gets rebound plays live 2v2. Defense no stop = rotate out.'
  },
  {
    id: '2v2-helpside-d-rebounding',
    name: '2v2 Helpside D Rebounding',
    duration: null,
    category: DRILL_CATEGORIES.REBOUNDING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Help defense with rebounding',
    details: 'Offense at 3-point line. Coach yells "Skip", offense skip passes, defense rotates. "Shot" = offense shoots, defense boxes out. Rebound made or missed. Keep kids active, rotate after rebound.'
  },
  {
    id: '2v2-helpside-d-rebounding-live',
    name: '2v2 Helpside D Rebounding Live',
    duration: null,
    category: DRILL_CATEGORIES.REBOUNDING,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Live 2v2 after board',
    details: 'Same setup. Whoever gets rebound plays live 2v2. Play out even if initial shot made.'
  },

  // === TRANSITION DRILLS - OFFENSE ===
  {
    id: 'utah-transition',
    name: 'Utah Transition',
    duration: 10,
    category: DRILL_CATEGORIES.TRANSITION,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Pitch ahead drill for transition offense',
    details: 'Rebound, outlet pass, fill lanes, sprint for layup. No over-dribbling. Focus on sprinting and filling lanes.'
  },
  {
    id: 'pitch-ahead',
    name: 'Pitch Ahead',
    duration: null,
    category: DRILL_CATEGORIES.TRANSITION,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Outlet and sprint drill',
    details: 'Sprinting up and down floor. Run early for layup. Don\'t over dribble. Half-second outlet for experienced only. Younger players secure first. Look after 3 strides. Can add 2-foot power, inside hand, goofy, Euro.'
  },
  {
    id: 'rim-runner',
    name: 'Rim Runner',
    duration: 5,
    category: DRILL_CATEGORIES.TRANSITION,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Middle lane cutting in transition',
    details: 'Trail player sprints to rim, cuts ball side at top of key for power layup. Back dribble creates passing space. Call names for communication.'
  },
  {
    id: 'catching-on-the-u',
    name: 'Catching on the U',
    duration: null,
    category: DRILL_CATEGORIES.TRANSITION,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'U-cut and transition finish',
    details: 'Catch after u-cut, speed dribble. Wing gets wide. If late, jump stop and ball fake. Pass for jump shot or layup. Sprint required.'
  },
  {
    id: 'wolf-drill',
    name: 'Wolf Drill',
    duration: 5,
    category: DRILL_CATEGORIES.TRANSITION,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: '1v1 transition finishing',
    details: 'Outlet becomes defender. Offensive player uses moves to finish opposite end. Cutoff dribble or crossover. Keep ball opposite defender. Change cone location for difficulty.'
  },
  {
    id: 'tear-butt-transition',
    name: 'Tear Butt Transition Drill',
    duration: 10,
    category: DRILL_CATEGORIES.TRANSITION,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Live transition offense and defense',
    details: 'Offense on baseline, defense at FT extended. Coach tosses to offense. Defender opposite must touch baseline before transitioning. Creates advantage. Can be 5v5, 4v4, 3v3. Coach can call multiple to touch creating bigger advantage. If no scoring in transition, flow to motion.'
  },

  // === TRANSITION DRILLS - DEFENSE ===
  {
    id: 'transition-defense-drill',
    name: 'Transition Defense Drill',
    duration: 5,
    category: DRILL_CATEGORIES.TRANSITION,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Sprint back and stop the ball',
    details: 'Sprint in 4 seconds or less, head on swivel, stop ball, push to sideline, protect basket. Coach tosses off backboard and rebounds, players sprint down court.'
  },
  {
    id: 'defensive-transition-4-seconds',
    name: 'Defensive Transition 4 Seconds',
    duration: 3,
    category: DRILL_CATEGORIES.TRANSITION,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Sprint back in 4 seconds',
    details: 'Bottom block to far bottom block in 4 seconds or less. Head on swivel to locate offense and ball. Closest stops ball, push to sideline, protect basket. Don\'t worry about matchups until settled.'
  },

  // === OFFENSIVE DRILLS - CONCEPTS & CUTS ===
  {
    id: 'v-cuts-and-fill-cuts',
    name: 'V-Cuts and Fill Cuts',
    duration: 8,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Getting open techniques',
    details: 'Cutting/filling fast, change speed on V-cut, target hand. Essential for motion offense.'
  },
  {
    id: 'v-cut-face-cut',
    name: 'V Cut - Face Cut',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'V-cut to get open and face cut',
    details: 'V-cut to get open, receive pass (ball in air feet in air), return pass. If defender didn\'t jump to ball, face cut for layup. Can add coach as defense.'
  },
  {
    id: 'fill-cut-rear-cut-backdoor',
    name: 'Fill Cut - Rear Cut - Backdoor',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Multiple cut variations',
    details: 'Fill cut to wing, triple threat, return pass, rear cut (behind defender), exit cut to corner. If overplayed, backdoor cut for layup.'
  },
  {
    id: 'fill-cut-1v1',
    name: 'Fill Cut 1v1',
    duration: 10,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Fill cut technique and finishing',
    details: 'Pass to coach, fill cut, receive pass, read defense. Options: shoot, step through drive, pull up. 3 dribbles to score.'
  },
  {
    id: 'fill-cut-jump-shot',
    name: 'Fill Cut - Jump Shot',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Fill cut into shot',
    details: 'Pass to coach, fill cut, catch and square to basket, shoot, rebound if missed.'
  },
  {
    id: 'fill-cut-step-through',
    name: 'Fill Cut - Step Through',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Fill cut into drive',
    details: 'Pass to coach, fill cut, catch and square, step through and drive for layup. Shoulder to hip, attack weak side, 1 dribble.'
  },
  {
    id: 'fill-cut-pull-up',
    name: 'Fill Cut - Pull Up',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Fill cut into pull-up jumper',
    details: 'Pass to coach, fill cut, catch and square, step through, one dribble, pull up for jump shot.'
  },
  {
    id: 'fill-cut-change-direction-layup',
    name: 'Fill Cut - Change Direction Layup',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Change of direction finish',
    details: 'Catch, step through, drive attacking weak side, one dribble, change direction, finish opposite side.'
  },
  {
    id: 'fill-cut-change-direction-pull-up',
    name: 'Fill Cut - Change Direction Pull Up',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Change direction into jumper',
    details: 'Catch, step through, drive, one dribble, change direction once or twice, pull up. Don\'t run all progressions every practice - choose 3.'
  },
  {
    id: 'l-cut-1v1',
    name: 'L Cut 1v1',
    duration: 10,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'L cut and sweep technique',
    details: 'Run across lane, L-cut, receive pass, back pivot, sweep and attack. Defender on block push steps parallel, sprints to closeout. Can change defender start location.'
  },
  {
    id: 'l-cut-sweep',
    name: 'L Cut - Sweep',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'L-cut with sweep move',
    details: 'Run across lane, L-cut, receive from coach, back pivot, hard sweep and attack basket.'
  },
  {
    id: 'l-cut-pull-up',
    name: 'L Cut - 1 Dribble Pull Up',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'L-cut into pull-up',
    details: 'Same start. Instead of driving to basket, dribble once and pull up for jump shot.'
  },
  {
    id: 'l-cut-variations',
    name: 'L Cut - Variations',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'L-cut with multiple finishes',
    details: 'Drive with change of direction to finish opposite side. Drive, change direction, pull up.'
  },

  // === OFFENSIVE DRILLS - LIVE PLAY ===
  {
    id: '1v1-live',
    name: '1v1 Live',
    duration: 10,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'One on one live play',
    details: 'Limit dribbles (3 max), stay within lane lines. Work on offensive moves and counters. Coach starts with ball, player cuts to get open. Can return pass once and cut again.'
  },
  {
    id: '2v0',
    name: '2v0',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Two player passing and cutting',
    details: 'Emphasize air passes. Ball in air feet in air. Reverse to corner, basket cut for layup. Can backdoor cut. Two-foot stop and square for baseline finishes.'
  },
  {
    id: '2v2-live',
    name: '2v2 Live',
    duration: 10,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER, SKILL_LEVELS.INTERMEDIATE],
    description: 'Two on two live play',
    details: 'Penetrate and pitch, dribble hand-offs, ball screens. Make defense commit before passing. Pass to coach initiates. Start no dribble, progress to 1, then 2 dribbles. Use one side of floor. Defense must pressure.'
  },
  {
    id: 'offense-2v0',
    name: 'Offense 2v0',
    duration: 8,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Passing and cutting fundamentals',
    details: 'Getting open, showing target hand, facing up to basket. Cut to score, cut to get open.'
  },
  {
    id: 'offense-2v0-2v2',
    name: 'Offense 2v0 - 2v2',
    duration: 10,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Work on passing and cutting with and without defense',
    details: 'Start with a 2v0 passing and cutting progression and move into 2v2 live play. Focus on getting open, showing target hand, and facing up to the basket.'
  },
  {
    id: '3v0',
    name: '3v0',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Three player cutting drill',
    details: 'V-cut to get open, finish cuts to rim, ball in air feet in air, fill in straight line, look for ball on all cuts. Can add coach denying reversal for backdoor.'
  },
  {
    id: '3v3',
    name: '3v3',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Three on three concepts',
    details: 'Start with passive dummy defense, 0 dribbles. Change speeds, cut hard, catch in triple threat. Add dribbles: for layup, shorten pass, or balance floor. Encourage uncontested shots. Reversals = driving lanes.'
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
    id: '4v0',
    name: '4v0',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Four player motion patterns',
    details: 'All cuts in play. Exit cut to open corner after cutting to rim. Fill spots toward ball, opening spot for exit cutters.'
  },
  {
    id: '4v4',
    name: '4v4',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Four on four motion offense',
    details: 'Cut to get open, cut to score. Face cut first, backdoor if overplayed, fill from next spot. Don\'t dance - finish back cuts. No dribbles. Allow dribble if needed for layup. Add 2-3 dribbles emphasizing straight line drives.'
  },
  {
    id: '4v4-2-dribbles',
    name: '4v4 2 Dribbles (Progress to Unlimited)',
    duration: 10,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Four on four with dribble restrictions',
    details: 'Start with 2 dribble max to emphasize passing and cutting. Progress to unlimited dribbles. Can be 3v3 or 5v5.'
  },
  {
    id: '5v0-no-post',
    name: '5v0 - 5v5 No Post',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Five out motion offense',
    details: '5v0: Dribble handoffs occur when dribbling at teammate. Look to score off handoff. Maintain spacing, pass and cut, sprint cuts. 5v5: Play to score, 3 dribble limit, handoffs available.'
  },
  {
    id: '5v0-temporary-post',
    name: '5v0 - 5v5 Temporary Post',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Motion with temporary post',
    details: 'Finish cut to rim, post under rim momentarily, move to first hash, post hard and call, pop out after one pass. Get low, wide, make contact. Laker cut available. 5v5: No jump shots until 2 temporary posts.'
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
    id: '5v0-cutters',
    name: '5v0 Cutters',
    duration: 10,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Five out cutting patterns',
    details: 'Spacing, cutting hard, giving hand target. Pass to outside hand, cut hard showing inside hand, backdoor if overplayed, attack off dribble, face up to hoop. Cut and fill.'
  },

  // === OFFENSIVE DRILLS - PENETRATE & PITCH ===
  {
    id: 'penetrate-and-pitch-2v0',
    name: 'Penetrate and Pitch 2v0',
    duration: 5,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Penetrate and pitch technique',
    details: 'Drive to rim explosively, attract help, deliver pass on time and on target. Wing drift or circle behind. Ball handler explosive, protect ball, stay low. Receiver shot ready: hips down, hands showing, feet in air on catch.'
  },
  {
    id: '2v2-penetrate-and-pitch',
    name: '2v2 Penetrate and Pitch (Chaser)',
    duration: 5,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Live penetrate and pitch with defense',
    details: 'Make defender commit before passing. Stay on one side. Defense live on dribble. Creates long closeouts for shot or blow-by.'
  },
  {
    id: '3v3-penetrate-and-pitch',
    name: '3v3 Penetrate and Pitch',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Three player penetrate and pitch',
    details: 'Make defender commit before pass. Wing drift to corner or circle behind. Baseline drive drift.'
  },

  // === OFFENSIVE DRILLS - DRIBBLE HANDOFF ===
  {
    id: 'dribble-handoff-2v2',
    name: 'Dribble Hand-Off 2v2',
    duration: 10,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Dribble hand-off technique',
    details: 'If defender tight = backdoor. If defender sagging = handoff and get downhill (2 feet in paint). Ball handler must dribble inside 3-point line. Show hand only on backdoor cut toward hoop. Can fake handoff - get same depth. Try to turn corner every handoff.'
  },
  {
    id: '3v3-handoffs',
    name: '3v3 Hand-Offs',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Three on three handoff drill',
    details: '3 dribble max. No jump shots until at least 2 dribble handoffs. Only open uncontested shots. Layups always allowed.'
  },

  // === OFFENSIVE DRILLS - BALL SECURITY ===
  {
    id: 'ball-toughness-low-rips',
    name: 'Low Ball Rips',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Ball security fundamentals',
    details: 'Sit in stance. Rip ball low and violently side to side. Keep connected. Elbow at 90 degrees, never extend.'
  },
  {
    id: 'ball-toughness-high-rips',
    name: 'High Ball Rips',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'High ball security',
    details: 'Rip across forehead with 90 degree angle.'
  },
  {
    id: 'ball-toughness-combo-rips',
    name: 'Combo Rips',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Mixed ball rips',
    details: 'Mix high and low rips simultaneously.'
  },
  {
    id: '1v0-create-space',
    name: '1v0 Create Space',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Face-up spacing technique',
    details: 'Step into imaginary defender without lunging (offensive foul). Stay within frame created by step - shoulders don\'t go beyond feet. Incorporate high and low rips with jab/pivot step.'
  },
  {
    id: '1v1-stationary-ball-security',
    name: '1v1 Stationary',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Ball security under pressure',
    details: 'Offense faces basket. Defense harasses (fouls ok). Offense strong with ball, face basket for duration. Next: offense facing away, must work to face up and handle pressure.'
  },
  {
    id: '1v1-live-ball-security',
    name: '1v1 Live Ball Security',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.BEGINNER],
    description: 'Pressure to live play',
    details: 'Handle pressure with rips and jabs until coach says "Go", then attack 1v1. Development drill - emphasize straight line driving, staying low, absorbing contact.'
  },

  // === OFFENSIVE DRILLS - AWAY SCREENS ===
  {
    id: 'away-screens-4v0',
    name: 'Away Screens 4v0',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Off-ball screening fundamentals',
    details: 'Screener: 1-2 steps to basket, sprint into screen, plant feet, get wide, communicate. Cutter: get to level of screen, shoulder to hip, cut to basket, target hands. Curl every time to simplify. Move to 4v4 when ready.'
  },
  {
    id: 'away-screens-4v4',
    name: 'Away Screens 4v4',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Live away screen play',
    details: 'Options: pass to wing and cut, away screen, hand-off, ball screen. Keep floor balanced.'
  },

  // === OFFENSIVE DRILLS - BALL SCREENS ===
  {
    id: 'ball-screens-4v0',
    name: 'Ball Screens 4v0',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'On-ball screening fundamentals',
    details: 'Screener: step or 2 to basket, sprint to screen, butt down feet wide, set, roll or run to basket. Ball handler: shoulder to hip, get to nail/middle of paint, attack hard.'
  },
  {
    id: 'ball-screens-4v4',
    name: 'Ball Screens 4v4',
    duration: null,
    category: DRILL_CATEGORIES.OFFENSE,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Live ball screen play',
    details: 'Options: pass to wing and cut, away screen, hand-off, ball screen. Keep floor balanced.'
  },

  // === SPECIAL SITUATIONS - PRESS BREAK ===
  {
    id: 'press-break-okie',
    name: 'Press Break - Okie',
    duration: 10,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Okie press breaker',
    details: 'Works against zone or man press. Player drives defender middle, breaks to sideline FT line extended. Stack screen at midcourt. Player runs off screen and sprints middle. Lead fast break, attack basket. Can go right or left.'
  },
  {
    id: 'okie-cross-press-breaker',
    name: 'Okie Cross Press Breaker',
    duration: null,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Okie variation with cross',
    details: 'Half court players cross instead of cutting directly. Teach reads - if overplayed, change direction and break for basket for over-the-top pass.'
  },
  {
    id: 'press-break-fire',
    name: 'Press Break - Fire',
    duration: 5,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Fire press breaker for defender on inbounder',
    details: 'Players run at inbounder yelling "Ball!" Cutter curls around screen for baseball pass and layup. Attack and score forces opponents to stop pressing.'
  },
  {
    id: 'press-breaker',
    name: 'Press Breaker',
    duration: null,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Multi-option press break',
    details: 'Attack defense, space floor, move ball, avoid coffin corners. Player 2 screens 3, 3 cuts for inbound. Three outlets: sideline, middle, behind. Continue with outlets. Inbounder runs baseline. Multiple variations shown.'
  },

  // === SPECIAL SITUATIONS - FULL COURT PRESSURE ===
  {
    id: 'full-court-pressure',
    name: 'Full Court Pressure',
    duration: 10,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Full court man press defense',
    details: 'Faceguard close to ball, 3/4 position further away, set good traps (feet to feet), hands up and active. Keep in front, sprint back if beaten. Focus on half-court first. Good ball handling beats press. Setting trap: feet to feet, hands up active, don\'t foul, chest to chest. Safety prevents over-top. Read eyes to anticipate.'
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

  // === SPECIAL SITUATIONS - ZONE OFFENSE ===
  {
    id: 'zone-offense-5-cut',
    name: 'Zone Offense - 5 Cut vs 2-3 Zone',
    duration: 10,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: '5 Cut zone offense vs 2-3 zone',
    details: 'Play gaps, ball reversals, inside-out, banana cuts, short corner position. Force defense to make decisions. Hard cuts, get ball inside, penetration, cutters move defenders. Fake pass to make pass. Short corner: butt/back to baseline, can catch/shoot, step through, or pass. Dives to basket on short corner entry.'
  },
  {
    id: '5-cut-vs-odd-front',
    name: '5 Cut vs. Odd Front Zone',
    duration: null,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Zone offense vs 1-3-1 or 1-2-2',
    details: 'Two guard front, third cuts middle and paints, two in short corners. Short corner to diver first option. Diver exits to opposite short corner, cutter sits in paint, guards rotate, short corner opposite can cheat to basket. Quick reversals create openings.'
  },
  {
    id: 'zone-offense-vs-trapping',
    name: 'Zone Offense vs. Trapping D',
    duration: null,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Four in the Hole vs trapping zone',
    details: 'Two guards high with good angles, three interchangeable. Corner pass: diver to basket (seal defender), opposite baseline flashes (high-low). Ball back to guard, middle stays and flashes, diver rotates opposite corner. Guards pass: three interior form triangle. Interior receives: two crash basket forcing 2v1, guards drift for kick out. Turn and face to see opportunities. Inside-out creates perimeter shots.'
  },

  // === SPECIAL SITUATIONS - OUT OF BOUNDS ===
  {
    id: 'blob-series',
    name: 'Baseline Out of Bounds (BLOB)',
    duration: 5,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Baseline inbounds plays',
    details: 'BLOB #1-4: stagger screens and seal options. Safety release to avoid 5-second call. Keep simple - all "1" numbers same play. Don\'t spend too much practice time. #1: screen for cutter to basket. #2: screener curls opposite. #3: screener leg whips and seals. #4: safety deep release.'
  },
  {
    id: 'blob-opposite-series',
    name: 'BLOB Opposite',
    duration: null,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Opposite side BLOB',
    details: 'Opposite #1-4: Screen from other side. Can run all options opposite.'
  },
  {
    id: 'blob-vs-zone',
    name: 'BLOB vs Zone',
    duration: null,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'BLOB against zone defense',
    details: '#1: screen outside defender, flash to corner. #2: pin middle defender, cutter flashes through lane. #3: flash to FT line, establish down low, high-low. Can run opposite.'
  },
  {
    id: 'slob-series',
    name: 'Sideline Out of Bounds (SLOB)',
    duration: 5,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Sideline inbounds plays',
    details: 'SLOB #1 (post option): Screen for shooter to perimeter, screener seals. Other players screen to clear. If not open, receiver passes out, gets ball screen, screener flashes across. SLOB #2 (stagger screen): Double screen for shooter to FT line. Set between 3pt and lane for proper range.'
  },
  {
    id: 'iso-clear',
    name: 'Iso Clear',
    duration: null,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Isolation out of bounds play',
    details: 'Isolate good 1v1 player in baseline corner. Screen for other wing to corner. Screener flashes to elbow, catches, turns/faces, can drive opposite. Token back screen as diversion.'
  },

  // === SPECIAL SITUATIONS - QUICK HITTERS ===
  {
    id: 'quick-hitters',
    name: 'Quick Hitters (2 Cut, Step Up, Flat Twist, Box)',
    duration: 10,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Set plays for quick scoring opportunities',
    details: '2 Cut 5v0 (flex screen), Step Up (flat ball screen), Flat Twist (screen the screener), Box (flare and screens). Work on one first, get good before adding. Don\'t run all the time - use 5 cut for positionless.'
  },
  {
    id: '2-cut-post-option',
    name: '2 Cut 5v0 Post Option',
    duration: null,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Flex screen quick hitter',
    details: 'Pass to wing, basket cut to opposite corner. Fill over, hard backdoor cut, stay ballside block. Walk defender to block, pop to FT. Pass to FT, to wing, flex screen, cutter fakes to FT goes under, posts at rim. All interchangeable.'
  },
  {
    id: '2-cut-stagger-option',
    name: '2 Cut 5v0 Double Stagger Option',
    duration: null,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Stagger screen option',
    details: 'If flex not open, run off double stagger to FT line for shot. Can run consecutively.'
  },
  {
    id: 'step-up',
    name: 'Step Up',
    duration: null,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Flat ball screen play',
    details: 'Ball handler can beat off dribble. Call name, player sprints up for flat screen. Allows penetration either direction. Weak side drifts to block, if help pulls pass for layup. Wings ready for pass and shoot. Four scoring options.'
  },
  {
    id: 'flat-twist',
    name: 'Flat Twist',
    duration: null,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Screen the screener play',
    details: 'Drive away from screener. Called player sets ball screen. Weak side drifts to block. Come off screen and attack, drive or kick to wing. Weak side sets screen for baseline, cutter fakes middle comes outside. Pass to FT for shot, screener seals for pass. Four scoring options.'
  },
  {
    id: 'box',
    name: 'Box',
    duration: null,
    category: DRILL_CATEGORIES.SPECIAL_SITUATIONS,
    skillLevel: [SKILL_LEVELS.INTERMEDIATE],
    description: 'Box set with multiple options',
    details: 'Pass to wing who flares. Set ball screen, cutter pops to top (shot option 1). Reverse to ball screen setter. Baseline sets screen for wing cutting to ballside block (option 2). Top sets screen for baseline, comes off for outside shot (option 3). Both sides. If not open, run 5 cut.'
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
    details: 'Reversal = 3pts, OReb = 2pts, Pass = 1pt, Basket = 2pts, TO = -2pts. First to 25 wins. Defense gets ball after stop/turnover. Adjust scoring for team goals (weak rebounding? OReb = 4pts). Competitive reps prepare for game day.'
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
