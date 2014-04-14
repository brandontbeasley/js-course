var Events = {
  on: function(name, func){
    if (this.events === undefined) {
      this.events = {};
    }
    if (this.events[name] === undefined)
    this.events[name] = [];
    this.events[name].push(func);
  },
  trigger: function(name){
    length = this.events[name].length
    for (var i=0; i < length; i++){
      this.events[name][i]();
    }
  },

};
