'use strict'

module.exports = stringRemove;

function stringRemove(str, options) {
  str = str + '';
  options.forEach(function(s) {
	str = str.replaceAll(s, ''); 
  });
  return str;
}

String.prototype.replaceAll = function(a, b) {
   return this.replace(new RegExp(a.replace(/([.?*+^$[\]\\(){}|-])/ig, "\\$1"), 'ig'), b)
}
