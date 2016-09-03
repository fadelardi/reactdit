var mockData = require('../mock_data');

module.exports.getThreads = function getThreads() {
  return {
    type: 'THREADS_LIST',
    payload: mockData.threads
  };
};
