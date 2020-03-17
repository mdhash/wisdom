var wisdom = require('../../assets/wisdom.json');

module.exports = {

  fn: async function (inputs) {
    var random = Math.floor(Math.random() * wisdom.length),
      author = wisdom[random].author,
      quote = wisdom[random].quote;
      return {  [author] : quote };
}
};