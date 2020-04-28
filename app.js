$(window).on('load', function(){
    $('.preloader').addClass('complete')
    $('.audio-series').hide()
})

$('#reveal-audio-series').on('click', () => {
  $('.media-sermon-audio').fadeOut()
  $('.audio-series').fadeIn()
})

    AOS.init();



    // **********************************************
    // Timer

    var countDownDate = new Date("May 3, 2020 10:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
    
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Display the result in the element with id="demo"
      document.getElementById("days").innerHTML = days + "d ";
      document.getElementById("hours").innerHTML = hours + "h ";
      document.getElementById("mins").innerHTML = minutes + "m ";
      document.getElementById("sec").innerHTML = seconds + "s ";
    
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('live-text').innerHTML = "We Are Live Watch Us Now!"
        document.getElementById("gen-span").classList.add('hide')
        document.getElementById('live-btn').classList.remove('hide')
      }
    }, 1000);