const { SyncWaterfallHook } = require("tapable");

const hook = new SyncWaterfallHook(["arg1", "arg2", "arg3"]);

hook.tap("SyncWaterfallHook1", (arg1, arg2, arg3) => {
  console.log("SyncWaterfallHook1:", arg1, arg2, arg3);
  return "SyncWaterfallHook1";
});

hook.tap("SyncWaterfallHook2", (arg1, arg2, arg3) => {
  console.log("SyncWaterfallHook2:", arg1, arg2, arg3);
});

hook.tap("SyncWaterfallHook3", (arg1, arg2, arg3) => {
  console.log("SyncWaterfallHook3:", arg1, arg2, arg3);
});

// 调用事件并传递执行参数
hook.call("参数1", "参数2", "参数3");

// 输出结果
// SyncWaterfallHook1: 参数1 参数2 参数3
// SyncWaterfallHook2: SyncWaterfallHook1 参数2 参数3
// SyncWaterfallHook3: SyncWaterfallHook1 参数2 参数3
