// 写出一个函数 initArray ，接受两个参数m和n，返回一个数组，它的长度是m，每个值都是n.
// https://scriptoj.com/problems/54

const initArray = (m, n) => {
  return new Array(m).fill(n);
}

console.log(initArray(4,3));
