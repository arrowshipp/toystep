function toyStep(A){

  var streaks = new Array(A.length);
  var streakCount = 0;

  for (var i=A.length-1; i>=0; i--) { // set i to index A starting at the end
    streaks[i]=streakCount;
    if (A[i-1] <= A[i]) { // day i has increasing or the same number of steps as previous day
      streakCount++;
    } else { // streak broken
      streakCount=0;
    }
  }
  return streaks;
}

console.log(toyStep([1,2,3,5,5,2,6]));
console.log(toyStep([5,2,4,7,1,3,4]));
