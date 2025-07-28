let  numbers = [1,2,4,5,23, 56, 70 ,199, 400, 660, 230, 454];

const limit = 30

console.log(numbers.lastIndex())

//while loop
//let n = 0
//while (n < numbers.length) {
  //if(numbers[n] > limit){
  //  console.log(numbers[n])
  //}
  //n++

//} 


// for loop 
//for (let i = 0; i < numbers.length; i++){
  //if (numbers[i] > limit){
  //console.log(numbers[i])
  //}
//}



let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;
let count = 0;
scores.forEach(score => {
  if (score > 87) {
    accumulator += score;
    count ++;
  }
});
if ( count > 0 ) {
  console.log(accumulator/count); 
} else {
  console.log("No scores reported.");
}