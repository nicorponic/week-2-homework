function giveItBackLater(value, callback) {
  setTimeout(callback, 500, value);
}

function promiseToGiveItBackLater(value) {
  return new Promise(resolve => {
    function giveItBackLater(value, callback) {
      setTimeout(callback, 500, value);
    }
    resolve(value);
  });
}

function addSomePromises(somePromise) {
  return new Promise(somePromise => {
    function chainPromiseAndReject(val1, val2) {
      Promise.then(val1, val2)
        .then(val1 => val1val1)
        .catch(val2 => val2val2val2);
    }
  });
}

module.exports = { giveItBackLater, promiseToGiveItBackLater, addSomePromises };
