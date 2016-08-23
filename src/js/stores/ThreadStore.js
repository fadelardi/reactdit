var observable = require('mobx').observable;
var threadData = require('../mock_data.js').threads;

var ThreadStore = function() {
  return observable({
    id: Math.random(),
    threads: threadData
  });
};

module.exports = ThreadStore();
