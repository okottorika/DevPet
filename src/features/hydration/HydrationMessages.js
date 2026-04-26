// DevPet - Gentle Hydration Reminder Messages
// Varied, encouraging, never guilt-tripping

const HYDRATION_REMINDERS = [
  { title: 'Time for Water!', body: 'DevPet says: Hydration boosts focus and energy. Grab a glass!' },
  { title: 'Water Break', body: 'DevPet tip: Even mild dehydration can reduce concentration by 25%. Drink up!' },
  { title: 'Stay Hydrated!', body: 'DevPet says: Your brain is 75% water. Keep it topped up for peak coding!' },
  { title: 'H2O Time', body: 'DevPet suggests: A glass of water now keeps the headaches away later.' },
  { title: 'Hydration Check', body: 'DevPet says: Water improves memory and mood. Take a sip!' },
  { title: 'Water Reminder', body: 'DevPet tip: Regular hydration helps prevent eye strain from screen time.' },
  { title: 'Drink Up!', body: 'DevPet says: Coding is thirsty work! Time for some water.' },
  { title: 'Quick Sip', body: 'DevPet says: Small, frequent sips beat chugging a whole bottle. Grab some water!' },
];

const LOGGED_RESPONSES = [
  'Nice! Keep it up!',
  'Great choice!',
  'Your brain thanks you!',
  'Hydration hero!',
  'Well done!',
];

function pickRandom(messages) {
  return messages[Math.floor(Math.random() * messages.length)];
}

export const HydrationMessages = {
  reminder: () => pickRandom(HYDRATION_REMINDERS),
  logged: () => pickRandom(LOGGED_RESPONSES),
};
