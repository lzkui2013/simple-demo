const { AsyncParallelHook } = require("tapable");

// 初始化同步钩子
const hook = new AsyncParallelHook(["arg1", "arg2", "arg3"]);

console.time("timer");
// 注册事件
hook.tapPromise("事件1", (arg1, arg2, arg3) => {
  console.log("事件1:", arg1, arg2, arg3);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
});

hook.tapAsync("事件2", (arg1, arg2, arg3, callback) => {
  console.log("事件2:", arg1, arg2, arg3);
  setTimeout(() => {
    callback();
  }, 2000);
});

// 调用事件并传递执行参数
hook.callAsync("参数1", "参数2", "参数3", () => {
  console.log("AsyncParallelHook done");
  console.timeEnd("timer");
});

// 执行结果
// 事件1: 参数1 参数2 参数3
// 事件2: 参数1 参数2 参数3
// AsyncParallelHook done
// timer: 2055.387ms
