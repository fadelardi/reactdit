var extendObservable = require('mobx').extendObservable;
var action = require('mobx').action;
var axios = require('axios');

var ThreadStore = function() {
  this.id = Math.random();
  this.load = function() {
    var self = this;
    axios.get('http://localhost:3000')
    .then(function(res) {
      self.threads = res.data;
      self.loading = false;
    });
  };

   extendObservable(this, {
    loading: true,
    threads: []
  });
};


module.exports = new ThreadStore();
