
const res = a => (b => a+b);

console.log(res(1)(2));

const res2 = a => b => c => a + b+ c;

console.log(res2(1)(2)(3));