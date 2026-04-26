// DevPet - Gentle Break Messages
// Varied, educational, never forceful

const MICRO_BREAK_MESSAGES = [
  { title: 'Quick Stretch!', body: 'DevPet suggests: Look away from the screen for 20 seconds. Your eyes will thank you!' },
  { title: 'Micro Break', body: 'DevPet says: Roll your shoulders back — tension builds up faster than you think.' },
  { title: 'Tiny Reset', body: 'DevPet tip: Blink 10 times slowly. Screen work reduces blinking by 60%!' },
  { title: 'Posture Check', body: 'DevPet reminds you: Sit up straight and unclench your jaw. Feel the difference?' },
  { title: 'Deep Breath', body: 'DevPet says: Take 3 deep breaths. Oxygen boosts focus and creativity.' },
];

const SHORT_BREAK_MESSAGES = [
  { title: 'Break Time!', body: "DevPet says: Take 5 and stretch. Short breaks boost productivity by up to 13%!" },
  { title: 'Recharge', body: 'DevPet says: Step away for a bit. Your subconscious keeps solving problems while you rest.' },
  { title: 'Break Time!', body: 'DevPet tip: Grab some water! Hydration improves concentration and reduces fatigue.' },
  { title: 'Rest Your Mind', body: "DevPet says: You've been focused — take a 5 minute walk. Movement sparks new ideas." },
  { title: 'Pause & Reset', body: 'DevPet says: Look out a window at something far away. It reduces eye strain significantly.' },
  { title: 'You Earned It', body: "DevPet says: Great session! Regular breaks prevent burnout and keep you sharp." },
];

const LONG_BREAK_MESSAGES = [
  { title: 'Long Break!', body: "DevPet says: You've done 4 solid rounds! Take 15 minutes — go for a walk or grab a snack." },
  { title: 'Extended Recharge', body: 'DevPet says: Time for a real break. Studies show 15-min breaks after deep work restore full focus.' },
  { title: 'Well Deserved Rest', body: "DevPet says: 4 cycles complete! Your brain consolidates learning during longer breaks." },
];

const IDLE_BREAK_MESSAGES = [
  { title: 'Natural Pause', body: "DevPet noticed you paused — perfect time for a quick stretch before diving back in." },
  { title: 'Good Timing', body: "DevPet says: You've naturally slowed down. That's your brain asking for a breather." },
  { title: 'Pause Detected', body: "DevPet says: Looks like a natural stopping point. How about a short break?" },
];

const WINDOW_SWITCH_MESSAGES = [
  { title: 'Taking a Break?', body: "DevPet noticed you stepped away from code. If you're taking a break, enjoy it fully!" },
  { title: 'Context Switch', body: "DevPet tip: If you're switching tasks, take 30 seconds to clear your mind first." },
];

const RETURN_MESSAGES = [
  { title: 'Welcome Back!', body: "DevPet says: Ready to roll! Let's pick up where you left off." },
  { title: 'Back in Action!', body: "DevPet says: Refreshed and ready! Break's over — let's build something great." },
  { title: 'Recharged!', body: "DevPet says: Great break! Your focus should be restored. Let's go!" },
];

function pickRandom(messages) {
  return messages[Math.floor(Math.random() * messages.length)];
}

export const BreakMessages = {
  micro: () => pickRandom(MICRO_BREAK_MESSAGES),
  short: () => pickRandom(SHORT_BREAK_MESSAGES),
  long: () => pickRandom(LONG_BREAK_MESSAGES),
  idle: () => pickRandom(IDLE_BREAK_MESSAGES),
  windowSwitch: () => pickRandom(WINDOW_SWITCH_MESSAGES),
  returnToWork: () => pickRandom(RETURN_MESSAGES),
};
