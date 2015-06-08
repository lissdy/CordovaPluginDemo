var AdvancePlugin = function() {};  
  
AdvancePlugin.prototype.alert = function() {  
    alert("I am a advance plugin");  
};  
  
var advancePlugin = new AdvancePlugin();  
module.exports = advancePlugin;
