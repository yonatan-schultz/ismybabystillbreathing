//First attempt at a fader.

(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        if (quoteIndex < quotes.length-1) {
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(500)
            .fadeOut(1000, showNextQuote);
       } else {
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000);
       }
      }
    showNextQuote();

    
})();

