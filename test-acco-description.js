// Simulate the getActivityDescription function logic more accurately
function getActivityDescription(activity) {
  const titleLower = activity.title.toLowerCase();
  const type = activity.type;

  // Check if it matches any specific conditions (partial list from the actual file)
  if (titleLower.includes('shabbos') || titleLower.includes('shabbat')) {
    return "Experience the true beauty of Shabbos in Eretz Yisrael - a day of spiritual elevation, amazing food, and unforgettable memories. Connect with your friends and counselors in the most meaningful way possible.";
  }
  if (titleLower.includes('wall') || titleLower.includes('kotel')) {
    return "Stand at the holiest site in the world, where Jews have prayed for thousands of years. Feel the energy of thousands of years of Jewish history as you connect with Hashem. Write your own personal tefillah and place it in the cracks of the ancient stones.";
  }
  if (titleLower.includes('climbing') || titleLower.includes('zip line')) {
    return "Scale new heights and soar through the air on thrilling zip lines. Challenge yourself to overcome fears and achieve the impossible as you climb rock faces and zip across canyons. Push your limits and discover what you're truly capable of.";
  }
  if (titleLower.includes('black canyon')) {
    return "Explore the dramatic Black Canyon with its stunning rock formations and challenging terrain! Navigate through narrow passages, climb over boulders, and experience the raw beauty of Israel's natural landscapes. An adventure that will test your skills and reward you with incredible views.";
  }
  if (titleLower.includes('park')) {
    return "Explore a beautiful park and enjoy outdoor activities in a natural setting! Whether it's walking trails, playgrounds, or scenic views, this is your chance to connect with nature and have fun in the great outdoors.";
  }

  // Multi-day events
  if (activity.isMultiDay) {
    return "An epic multi-day adventure that will challenge you, inspire you, and create memories that will last forever.";
  }

  // Default description
  return "An incredible experience that will push your limits, expand your horizons, and create memories you'll never forget.";
}

// Test with Acco Extreme Park
const accoActivity = {
  id: '63kcur58h9qvk3ckdp19lu3bh6',
  title: "Acco Extreme Park",
  date: '2025-07-17',
  fullDate: new Date('2025-07-17'),
  type: 'leisure',
  isMultiDay: false
};

console.log('=== ACCO EXTREME PARK DESCRIPTION TEST ===');
console.log(`Title: ${accoActivity.title}`);
console.log(`Type: ${accoActivity.type}`);
console.log(`Date: ${accoActivity.date}`);
console.log('\n=== GENERATED DESCRIPTION ===');
console.log(getActivityDescription(accoActivity));

// Test what happens with "park" in the title
console.log('\n=== TESTING "PARK" KEYWORD ===');
const parkActivity = {
  title: "Some Park Activity",
  type: 'leisure',
  isMultiDay: false
};
console.log(`Title: ${parkActivity.title}`);
console.log(`Description: ${getActivityDescription(parkActivity)}`); 