# toystep

Toy Steps Problem

We have an array A = [1,2,3,5,5,2,6], representing the thousands of total steps they have taken each day for the last 7 days. Assume 0 steps can never occur.

Given a starting day, the longest streak is the number of continuous days into the future (to the right of the array) that contains increasing or the same number of steps, versus the previous day’s steps. Missing a day breaks the streak.

Write a function that takes in arrays like A, and return an array containing the longest streak for each day in A.

For example, if the input is A above, the output is [4,3,2,1,0,1,0].

If input is B = [5,2,4,7,1,3,4], the output is [0,2,1,0,2,1,0].
