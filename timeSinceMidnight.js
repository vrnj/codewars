// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

let h = 0;
let m = 1;
let s = 1;

function past(h, m, s){
  //#Happy Coding! ^_^
  return h * 3600000 + m * 60000 + s * 1000;
}

//one-line solution ->
//const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);