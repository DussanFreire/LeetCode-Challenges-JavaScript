// 1360. Number of Days Between Two Dates
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Write a program to count the number of days between two dates.

// The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.

 

// Example 1:

// Input: date1 = "2019-06-29", date2 = "2019-06-30"
// Output: 1
// Example 2:

// Input: date1 = "2020-01-15", date2 = "2019-12-31"
// Output: 15
 

// Constraints:

// The given dates are valid dates between the years 1971 and 2100.

function daysBetweenDates(date1: string, date2: string): number {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const time1 = new Date(date1).getTime();
    const time2 = new Date(date2).getTime();
    
    return Math.round(Math.abs(time1 - time2) / millisecondsPerDay);
}
