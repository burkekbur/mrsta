// -----------------
// Hudba



let hudba = document.createElement('hudba');
hudba.id = 'music';
hudba.innerHTML = `
<iframe src="theme/silence.mp3" allow="autoplay" id="audio" style="display: none"></iframe>
<audio autoplay loop id="hudba">
  <source src="theme/sound.mp3" type="audio/mpeg">
</audio>
<button style="" id="play" ><svg height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="music" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-music fa-w-16 fa-2x"><path fill="currentColor" d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z" class=""></path></svg></button>
<button style="text-decoration: line-through;" id="stop"><svg height="16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="music-slash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-music-slash fa-w-20 fa-2x"><path fill="currentColor" d="M192 387.92a139 139 0 0 0-32-3.92c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V327.88l-64-49.46zm441.82 70.18l-65.06-50.28c4.51-7.37 7.24-15.35 7.24-23.82V32a32 32 0 0 0-41.62-30.49L214.41 96a31.85 31.85 0 0 0-21 21.73L45.47 3.39A16 16 0 0 0 23 6.2L3.37 31.47a16 16 0 0 0 2.81 22.45l588.35 454.71a16 16 0 0 0 22.47-2.81l19.63-25.27a16 16 0 0 0-2.81-22.45zM512 323.92a139 139 0 0 0-32-3.92 137 137 0 0 0-22.15 2.11l-156.61-121L512 139.3z" class=""></path></svg></button>
`;
document.body.appendChild(hudba);
let player = document.getElementById('hudba');
document.getElementById('play').addEventListener('click',function(){
  player.load();
  player.play();
})

document.body.addEventListener('mousemove', function() {
  player.play();
})

document.getElementById('stop').addEventListener('click',function(){
  player.pause();
})

let pisnicka = document.querySelector('audio source');

/*-------------*/
let i = 0;
let html = document.documentElement;
document.querySelector('img').addEventListener('click', function ()
{
  if (i == 0) {
    html.style.setProperty('--primary', '#7d0000');
    html.style.setProperty('--secondary', 'gold');
    pisnicka.src= 'theme/sound2.mp3'
    player.pause();
    player.load();
    player.play();



    ++i;
  } else if (i == 1) {
    html.style.setProperty('--primary', 'black');
    html.style.setProperty('--secondary', 'lime');
    ++i;
  } else if (i == 2){
    html.style.setProperty('--primary', 'midnightblue');
    html.style.setProperty('--secondary', 'cadetblue');
    ++i;
  } else if (i == 3){
    html.style.setProperty('--primary', '#e06700');
    html.style.setProperty('--secondary', '#7aff00');
    ++i;
  } else if (i == 4){
    html.style.setProperty('--primary', '#540075');
    html.style.setProperty('--secondary', 'gold');
    ++i;
  } else {
    html.style.setProperty('--primary', '#123');
    html.style.setProperty('--secondary', '#bada55');
    i = 0;
  }
});




