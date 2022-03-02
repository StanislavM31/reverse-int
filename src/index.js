module.exports = function reverse (n) {
  let size;
  let x;
  x=n+''; //string
  size = x.length;
  x=x.split(''); //object array
  x=x.reverse(); //revert array
  let res = x.join('');
  if(x[size-1] == '-'){
    x.pop();
    res = x.join('');
    return res
  }
  return res;
}
