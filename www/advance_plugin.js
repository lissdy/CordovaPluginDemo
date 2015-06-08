var AdvancePlugin = function() {};  
  
AdvancePlugin.prototype.alert = function(str,callback) {  
    cordova.exec(callback, function(err) {
        callback('Nothing to echo.');
    }, "AndroidPluginDemo", "hello", [str]);
};  
  
var advancePlugin = new AdvancePlugin();  
module.exports = advancePlugin;
