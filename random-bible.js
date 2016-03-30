$(document).ready(function(){

  function getQuote(){

    var quotes = ["Your breast are like two fawns, like twin fawns of a gazella that browse among the lillies", "Everything is meaningless", "It is better to live alone in the desert than with a crabby, complaining wife.", "Give beer to those who are perishing, wine to those who are in anguish.", "My breath is offensive to my wife; I am loathsome to my own brothers.", "She lusted after her lovers, whose genitals were like those of donkeys and whose emission was like that of horses.", "Do not wear clothing woven of two kinds of material", "Do not trim off the hair on your temples or trim your beards."];

    var author = ["- Song of Songs 4:5", "- Ecclesiastes 1:2", "- Proverbs 21:19", "- Proverbs 31:6", "- Job 19:17", "- Ezekiel 23:20", "- Leviticus 19:19", "- Leviticus 19:27"];

    var randomNum = Math.floor((Math.random() * quotes.length));
    var randomQuote = quotes[randomNum];
    var randomAuthor = author[randomNum];

    $(".quoteSite").text(randomQuote);
    $(".authorSite").text(randomAuthor);
  }

  $(".btn-primary").on("click", function() {
    getQuote();
  });
});
