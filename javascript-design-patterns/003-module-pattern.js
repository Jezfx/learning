// The Module pattern is a creational and structural design pattern which provides a way of encapsulating private members while producing a public API.

const Module = (function(num) {
  // Private data is stored within the closure

  const privateNum = 1;

  // Because the function is immediately invoked, the return value becomes the public API

  const api = {
    getPrivateData: () => privateNum,
    getDoublePrivateData: () => api.getPrivateData() * num
  };

  return api;
})(2);

const num = Module.getPrivateData();
console.log(num);
const num2 = Module.getDoublePrivateData();
console.log(num2);
