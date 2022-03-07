const tapable = require("tapable");
const { SyncHook } = tapable;

const hook = new SyncHook(["arg1", "arg2", "arg3"]);

hook.tap("1", (arg1, arg2, arg3) => {
  console.log(1, arg1, arg2, arg3);
});

hook.tap("2", (arg11, arg2, arg3) => {
  console.log(2, arg11, arg2, arg3);
});

hook.tap("3", (arg1, arg2, arg3) => {
  console.log(3, arg1, arg2, arg3);
});

hook.call(1, 2, 3);
