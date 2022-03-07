const { AsyncSeriesBailHook } = require("tapable");

const hook = new AsyncSeriesBailHook(["arg1", "arg2", "arg3"]);

console.time("timer");

hook.tapPromise("AsyncSeriesBailHook1", (arg1, arg2, arg3, callback) => {
  console.log("AsyncSeriesBailHook1:", arg1, arg2, arg3);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
});

hook.tapAsync("AsyncSeriesBailHook2", (arg1, arg2, arg3, callback) => {
  console.log("AsyncSeriesBailHook2:", arg1, arg2, arg3);
  setTimeout(() => {
    callback();
  }, 2000);
});

hook.tapAsync("AsyncSeriesBailHook3", (arg1, arg2, arg3, callback) => {
  console.log("AsyncSeriesBailHook3:", arg1, arg2, arg3);
  setTimeout(() => {
    callback();
  }, 3000);
});

hook.callAsync("参数1", "参数2", "参数3", () => {
  console.log("全部执行完毕 done");
  console.timeEnd("timer");
});

// 执行结果
// AsyncSeriesBailHook1: 参数1 参数2 参数3
// 全部执行完毕 done
// timer: 1061.214ms
