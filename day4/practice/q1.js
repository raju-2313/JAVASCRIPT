//for a given array with marks of students ->> [85,97,44,37,76,60]
// find the average of the entire class


let marks = [85,97,44,37,76,60];

let sum = 0;
for (let val of marks)
{
    sum+=val;

}

console.log("Average of the marks of the studnet is :", sum/marks.length);