const makeAllCaps = function(words) {
  return new Promise(function(resolve, reject) {
    if (
      words.every(function(word) {
        return typeof word === 'string';
      })
    ) {
      resolve(
        sortWords(
          words.map(function(word) {
            return word.toUpperCase();
          })
        )
      );
    } else {
      reject('Not a string!');
    }
  });
};

const sortWords = function(words) {
  return new Promise(function(resolve, reject) {
    if (words) {
      resolve(words.sort());
    } else {
      reject('strings only!');
    }
  });
};

const areWords = ['promise', 'practice', 'break'];

makeAllCaps(areWords)
  .then(sortWords(areWords))
  .then(function(result) console.log(result))
  .catch(function(error) console.log(error));

const areNotWords = [1, 'hello', 9];

makeAllCaps(areNotWords)
  .then(sortWords(areNotWords))
  .then((function(result) console.log(result))
  .catch(function(error) console.log(error));