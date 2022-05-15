var snd = new Audio('http://www.orangefreesounds.com/wp-content/uploads/2015/01/Cat-sound.mp3?_=1'),
    catMew = document.querySelector('#catSayMeow');
// delegated event on inputs of checkboxControl
catMew.addEventListener('click', function(e){
		snd.currentTime = 0;
		snd.play(); 
});