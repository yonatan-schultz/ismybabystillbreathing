//First attempt at a fader.

(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        document.getElementById("submit").disabled = true; 
        ++quoteIndex;
        if (quoteIndex < quotes.length-1) {
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(300)
            .fadeOut(500, showNextQuote);
       } else {
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000);
            document.getElementById("submit").disabled = false; 
       }
      }
    showNextQuote();

    
})();

