var extend = function(destination, source) {

for (var prop in source) {
  value = source[prop];
  destination[prop] = value;
}


return destination;
};
