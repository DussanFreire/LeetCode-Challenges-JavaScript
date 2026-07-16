// 1185. Day of the Week
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a date, return the corresponding day of the week for that date.

// The input is given as three integers representing the day, month and year respectively.

// Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

// Note: January 1, 1971 was a Friday.

// Example 1:
// Input: day = 31, month = 8, year = 2019
// Output: "Saturday"
// Example 2:
// Input: day = 18, month = 7, year = 1999
// Output: "Sunday"
// Example 3:
// Input: day = 15, month = 8, year = 1993
// Output: "Sunday"

// Constraints:
// The given dates are valid dates between the years 1971 and 2100.

function dayOfTheWeek(day: number, month: number, year: number): string {
    const daysOfWeek = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const isLeapYear = (y: number): boolean => {
        return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
    };

    let totalDays = 0;

    for (let y = 1971; y < year; y++) {
        totalDays += isLeapYear(y) ? 366 : 365;
    }

    for (let m = 0; m < month - 1; m++) {
        totalDays += daysInMonth[m];
        if (m === 1 && isLeapYear(year)) {
            totalDays += 1;
        }
    }

    totalDays += day - 1;

    return daysOfWeek[totalDays % 7];
}
