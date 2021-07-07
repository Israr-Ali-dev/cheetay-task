//Create meeting pair object
const meetPair = (start, end, index) => ({
  start,
  end,
  index,
});

const maxMetting = (arr, n) => {
  //Sort the meeting based on the finish time in descending order
  arr.sort((a, b) => {
    if (a.end < b.end) {
      return -1;
    } else if (a.end > b.end) {
      return 1;
    } else {
      return 0;
    }
  });

  //To track the result
  const result = [];
  result.push(arr[0].index);

  //Track the finish time of current meeting
  let timeLimit = arr[0].end;

  //Iterate all the meetings
  for (let i = 1; i < arr.length; i++) {
    //If meeting is not overlapping with previous meeting then push it in the result
    if (arr[i].start > timeLimit) {
      result.push(arr[i].index);
      timeLimit = arr[i].end;
    }
  }

  return result;
};

// Starting time
const s = [75250, 50074, 43659, 8931, 11273, 27545, 50879, 77924];

// Finish time
const f = [112960, 114515, 81825, 93424, 54316, 35533, 73383, 160252];

const meeting = [];
for (let i = 0; i < s.length; i++) {
  meeting.push(meetPair(s[i], f[i], i));
}

console.log(maxMetting(meeting).length);
