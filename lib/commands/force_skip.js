// Generated by CoffeeScript 1.3.3
var forceSkipCommand,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

forceSkipCommand = (function(_super) {

  __extends(forceSkipCommand, _super);

  function forceSkipCommand() {
    return forceSkipCommand.__super__.constructor.apply(this, arguments);
  }

  forceSkipCommand.prototype.init = function() {
    this.command = '/forceskip';
    this.parseType = 'startsWith';
    return this.rankPrivelege = 'mod';
  };

  forceSkipCommand.prototype.functionality = function() {
    var msg, param;
    msg = this.msgData.message;
    if (msg.length > 11) {
      param = msg.substr(11);
      if (param === 'enable') {
        data.forceSkip = true;
        return API.sendChat("Forced skipping enabled.");
      } else if (param === 'disable') {
        data.forceSkip = false;
        return API.sendChat("Forced skipping disabled.");
      }
    }
  };

  return forceSkipCommand;

})(Command);