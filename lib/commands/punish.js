// Generated by CoffeeScript 1.4.0
var punishCommand,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

punishCommand = (function(_super) {

  __extends(punishCommand, _super);

  function punishCommand() {
    return punishCommand.__super__.constructor.apply(this, arguments);
  }

  punishCommand.prototype.init = function() {
    this.command = 'punish';
    this.parseType = 'startsWith';
    return this.rankPrivelege = 'mod';
  };

  punishCommand.prototype.getPunishment = function(username) {
    var p, punishment, punishments;
    punishments = ["/me rubs sandpaper on @{victim}'s scrotum", "/me pokes @{victim} in the eyes", "/me throws sand in @{victim}'s eyes", "/me makes @{victim}'s mother cry", "/me penetrates @{victim} with a sharpie", "/me pinches @{victim}'s nipples super hard", "/me gives @{victim} a wet willy"];
    p = Math.floor(Math.random() * punishments.length);
    punishment = punishments[p].replace('{victim}', username);
    return punishment;
  };

  punishCommand.prototype.functionality = function() {
    var msg, name, r, user;
    msg = this.msgData.message;
    r = new RoomHelper();
    if (msg.length > 8) {
      name = msg.substr(8);
      user = r.lookupUser(name);
      if (user === false) {
        API.sendChat("/me punishes @" + this.msgData.from + " for getting the syntax wrong.");
        return setTimeout(function() {
          return API.sendChat("Seriously though, I don't recognize the username '" + name + "'");
        }, 750);
      } else {
        if (user.owner) {
          return API.sendChat(this.getPunishment(this.msgData.from));
        } else {
          return API.sendChat(this.getPunishment(user.username));
        }
      }
    }
  };

  return punishCommand;

})(Command);
