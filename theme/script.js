let i = 0;
let html = document.documentElement;
document.querySelector('img').addEventListener('click', function ()
{
  if (i == 0) {
    html.style.setProperty('--primary', '#7d0000');
    html.style.setProperty('--secondary', 'gold');
    pisnicka.src= 'plugins/music/media/sound2.mp3'
    player.pause();
    player.load();
    player.play();
    ++i;
  } else if (i == 1) {
    html.style.setProperty('--primary', 'black');
    html.style.setProperty('--secondary', 'lime');
    pisnicka.src= 'plugins/music/media/sound3.mp3'
    player.pause();
    player.load();
    player.play();
    ++i;
  } else if (i == 2){
    html.style.setProperty('--primary', 'midnightblue');
    html.style.setProperty('--secondary', 'cadetblue');
    pisnicka.src= 'plugins/music/media/sound4.mp3'
    player.pause();
    player.load();
    player.play();
    ++i;
  } else if (i == 3){
    html.style.setProperty('--primary', '#e06700');
    html.style.setProperty('--secondary', '#7aff00');
    pisnicka.src= 'plugins/music/media/sound5.mp3'
    player.pause();
    player.load();
    player.play();
    ++i;
  } else if (i == 4){
    html.style.setProperty('--primary', '#540075');
    html.style.setProperty('--secondary', 'gold');
    pisnicka.src= 'plugins/music/media/sound6.mp3'
    player.pause();
    player.load();
    player.play();
    ++i;
  } else {
    html.style.setProperty('--primary', '#123');
    html.style.setProperty('--secondary', '#bada55');
    pisnicka.src= 'plugins/music/media/sound7.mp3'
    player.pause();
    player.load();
    player.play();
    i = 0;
  }
});




