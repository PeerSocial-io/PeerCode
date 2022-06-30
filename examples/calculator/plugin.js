define(function (require, exports, module) {

  appPlugin.consumes = ["app", "plugins"];
  appPlugin.provides = ["calculator"];

  /* global $ */
  return appPlugin;

  function appPlugin(options, imports, register) {

    var Plugin = imports.plugin;

    var calculator = new Plugin();

    register(null, {
      calculator: calculator
    });

  }

});