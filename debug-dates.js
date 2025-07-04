console.log('=== Date Debug Test ===');

// Test the departure date from the data
const departureDate = new Date('2025-07-07');
console.log('\n1. Departure date from data:');
console.log('  Original:', departureDate.toString());
console.log('  Local date:', departureDate.toLocaleDateString());
console.log('  UTC date:', departureDate.toUTCString());
console.log('  ISO:', departureDate.toISOString());

// Test different ways to create July 7, 2025
console.log('\n2. Different ways to create July 7, 2025:');

const method1 = new Date('2025-07-07');
const method2 = new Date(2025, 6, 7); // month is 0-indexed
const method3 = new Date('2025-07-07T00:00:00');

console.log('  Method 1 (new Date("2025-07-07")):', method1.toLocaleDateString());
console.log('  Method 2 (new Date(2025, 6, 7)):', method2.toLocaleDateString());
console.log('  Method 3 (new Date("2025-07-07T00:00:00")):', method3.toLocaleDateString());

// Test normalization functions
console.log('\n3. Testing normalization functions:');

function normalizeDateUTC(date) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

function normalizeDateLocal(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

const normalizedUTC = normalizeDateUTC(departureDate);
const normalizedLocal = normalizeDateLocal(departureDate);

console.log('  Original departure date:', departureDate.toLocaleDateString());
console.log('  UTC normalized:', normalizedUTC.toLocaleDateString());
console.log('  Local normalized:', normalizedLocal.toLocaleDateString());

// Test what the data actually contains
console.log('\n4. Testing what the data contains:');
const testDate = new Date(2025, 6, 7); // This is how the data is created
console.log('  Data creation method (new Date(2025, 6, 7)):', testDate.toLocaleDateString());
console.log('  Data creation method toString:', testDate.toString());
console.log('  Data creation method ISO:', testDate.toISOString());

// Test calendar day generation
console.log('\n5. Testing calendar day generation:');
const startDate = new Date(2025, 6, 7); // July 7, 2025
console.log('  Calendar start date:', startDate.toLocaleDateString());
console.log('  Calendar start date toString:', startDate.toString());

// Test the actual issue
console.log('\n6. Testing the actual comparison issue:');
const calendarDay = new Date(2025, 6, 7); // July 7 from calendar
const dataDate = new Date('2025-07-07'); // July 7 from data

const normalizedCalendarDay = normalizeDateLocal(calendarDay);
const normalizedDataDate = normalizeDateLocal(dataDate);

console.log('  Calendar day (normalized):', normalizedCalendarDay.toLocaleDateString());
console.log('  Data date (normalized):', normalizedDataDate.toLocaleDateString());
console.log('  Are they equal?', normalizedCalendarDay.getTime() === normalizedDataDate.getTime());

console.log('\n=== End Debug Test ==='); 