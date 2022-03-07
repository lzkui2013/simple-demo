const { SyncBailHook } = require("tapable");

const hook = new SyncBailHook(["arg1", "arg2", "arg3"]);

hook.tap("syncBailHook1", (arg1, arg2, arg3) => {
  console.log("syncBailHook1", arg1, arg2, arg3);

  // return true;
});

hook.tap("syncBailHook2", (arg1, arg2, arg3) => {
  console.log("syncBailHook2", arg1, arg2, arg3);
});

hook.tap("syncBailHook3", (arg1, arg2, arg3) => {
  console.log("syncBailHook3", arg1, arg2, arg3);
});

hook.tap("syncBailHook4", (arg1, arg2, arg3) => {
  console.log("syncBailHook4", arg1, arg2, arg3);
});

hook.tap("syncBailHook5", (arg1, arg2, arg3) => {
  console.log("syncBailHook5", arg1, arg2, arg3);
});

hook.tap("syncBailHook6", (arg1, arg2, arg3) => {
  console.log("syncBailHook6", arg1, arg2, arg3);
});

hook.call("arg1", "arg2", "arg3");
