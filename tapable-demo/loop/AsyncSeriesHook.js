const { AsyncSeriesLoopHook } = require("tapable");

let AsyncSeriesLoopHook1 = 2;
let AsyncSeriesLoopHook2 = 1;
console.time("timer");
const hook = new AsyncSeriesLoopHook(["arg1", "arg2", "arg3"]);

hook.tapPromise("AsyncSeriesLoopHook1", (arg1, arg2, arg3) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("AsyncSeriesLoopHook1");
      if (AsyncSeriesLoopHook1 !== 3) {
        resolve(AsyncSeriesLoopHook1++);
      } else {
        resolve();
      }
    }, 100);
  });
});

hook.tapAsync("AsyncSeriesLoopHook2", (arg1, arg2, arg3, callback) => {
  setTimeout(() => {
    console.log("AsyncSeriesLoopHook2");
    if (AsyncSeriesLoopHook2 !== 3) {
      callback(null, AsyncSeriesLoopHook2++);
    } else {
      callback(null, undefined);
    }
  }, 200);
});

// 调用事件并传递执行参数
hook.callAsync("参数1", "参数2", "参数3", function (data) {
  console.log(`AsyncSeriesLoopHook all done`);
  console.timeEnd("timer");
});
// 执行结果
// AsyncSeriesLoopHook1
// AsyncSeriesLoopHook1
// AsyncSeriesLoopHook2
// AsyncSeriesLoopHook1
// AsyncSeriesLoopHook2
// AsyncSeriesLoopHook1
// AsyncSeriesLoopHook2
// AsyncSeriesLoopHook all done
// timer: 1088.660ms
