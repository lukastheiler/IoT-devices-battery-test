Devices=new Meteor.Collection("devices");
Infos=new Meteor.Collection("infos");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('devices', function devicesPublication() {
    return Devices.find();
  });
  Meteor.publish('infos', function devicesPublication() {
    return Infos.find();
  });
}

// simplicty, allow updates for logged in user
Devices.allow({
  update: function(userId, doc, fieldNames, modifier) {
    if (!Meteor.userId()) return false;
    return true;
  }
})
Infos.allow({
  update: function(userId, doc, fieldNames, modifier) {
    if (!Meteor.userId()) return false;
    return true;
  }
})
