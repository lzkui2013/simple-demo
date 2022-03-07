const { SyncLoopHook } = require("tapable");

let SyncLoopHook1 = 2;
let SyncLoopHoo2 = 1;

const hook = new SyncLoopHook(["arg1", "arg2", "arg3"]);

hook.tap("SyncLoopHook1", (arg1, arg2, arg3) => {
  console.log("SyncLoopHook1");
  if (SyncLoopHook1 !== 3) {
    return SyncLoopHook1++;
  }
});

hook.tap("SyncLoopHoo2", (arg1, arg2, arg3) => {
  console.log("SyncLoopHoo2");
  if (SyncLoopHoo2 !== 3) {
    return SyncLoopHoo2++;
  }
});

// 调用事件并传递执行参数
hook.call("参数1", "参数2", "参数3");
// 执行结果
// SyncLoopHook1
// SyncLoopHook1
// SyncLoopHook2
// SyncLoopHook1
// SyncLoopHook2
// SyncLoopHook1
// SyncLoopHook2
