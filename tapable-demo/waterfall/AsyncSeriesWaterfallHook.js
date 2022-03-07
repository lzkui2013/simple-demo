const { AsyncSeriesWaterfallHook } = require("tapable");

const hook = new AsyncSeriesWaterfallHook(["arg1", "arg2", "arg3"]);

console.time("timer");

hook.tapPromise("AsyncSeriesWaterfallHook1", (arg1, arg2, arg3) => {
  console.log("AsyncSeriesWaterfallHook1:", arg1, arg2, arg3);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
});

hook.tapAsync("AsyncSeriesWaterfallHook2", (arg1, arg2, arg3, callback) => {
  console.log("AsyncSeriesWaterfallHook2:", arg1, arg2, arg3);
  setTimeout(() => {
    callback();
  }, 1000);
});

// 调用事件并传递执行参数
hook.callAsync("参数1", "参数2", "参数3", () => {
  console.log("全部执行完毕 done");
  console.timeEnd("timer");
});

// 输出结果
// AsyncSeriesWaterfallHook1: 参数1 参数2 参数3
// AsyncSeriesWaterfallHook2: true 参数2 参数3
// 全部执行完毕 done
// timer: 1581.788ms
