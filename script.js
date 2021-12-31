//Delay load in
$(document).ready(() => {
    setTimeout(()=>{
        $('#wrapper').fadeIn(500);
        $('.container__links').fadeIn(500);
    }, 5000);

    
});

//refresh page on browser resize
$(window).bind('resize', (e)=>{
  console.log('window resized..');
  this.location.reload(false); /* false to get page from cache */
  /* true to fetch page from server */
});



// const togglePopup = () => {
//   document.getElementById("popup-1").classList.toggle("active");
// }
