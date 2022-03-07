const { AsyncParallelBailHook } = require("tapable");

// 初始化同步钩子
const hook = new AsyncParallelBailHook(["arg1", "arg2", "arg3"]);

console.time("timer");

// 注册事件
hook.tapPromise("AsyncParallelBailHook1", (arg1, arg2, arg3) => {
  return new Promise((resolve, reject) => {
    console.log("AsyncParallelBailHook1:", arg1, arg2, arg3);
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
});

hook.tapAsync("AsyncParallelBailHook2", (arg1, arg2, arg3, callback) => {
  setTimeout(() => {
    console.log("AsyncParallelBailHook2:", arg1, arg2, arg3);
    callback();
  }, 2000);
});

hook.tapAsync("AsyncParallelBailHook3", (arg1, arg2, arg3, callback) => {
  setTimeout(() => {
    console.log("AsyncParallelBailHook3:", arg1, arg2, arg3);
    callback();
  }, 3000);
});

hook.callAsync("参数1", "参数2", "参数3", () => {
  console.log("全部执行完毕 done");
  console.timeEnd("timer");
});

// 执行结果
// flag1 done: 19Qingfeng wang haoyu
// 全部执行完毕 done
// timer: 1.013s
// flag2 done: 19Qingfeng wang haoyu
