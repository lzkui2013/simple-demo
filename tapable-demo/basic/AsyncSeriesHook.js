const { AsyncSeriesHook } = require("tapable");
const queue = new AsyncSeriesHook(["name"]);

console.time("timer");
queue.tapPromise("1", function (name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(1, name);
      resolve();
    }, 500);
  });
});

queue.tapPromise("2", function (name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(2, name);
      resolve();
    }, 1000);
  });
});
queue.tapAsync("3", function (name, callback) {
  setTimeout(function () {
    console.log(3, name);
    callback(3);
  }, 1500);
});

// queue.promise("AsyncSeriesHook").then((data) => {
//   console.log(data);
// });

queue.callAsync("AsyncSeriesHook", (data) => {
  console.log(data);
  console.timeEnd("timer");
});

// 执行结果
// 1 'AsyncSeriesHook'
// 2 'AsyncSeriesHook'
// 3 'AsyncSeriesHook'
// undefined
// timer: 3101.241ms
