document.addEventListener('DOMContentLoaded', function (event) {

  if (window.innerWidth > 750) {
    let vyjizdec = document.createElement('vyjizdec');
    vyjizdec.classList.add('vyjizdec');
    vyjizdec.innerHTML = `
          <div class="vyjizdec-header">
          <span>Změnit barvy</span>
          </div>
          <div class="vyjizdec-content">
            <h2>Změnit barevné téma</h2>
            <div class="barvy">
              <span onclick="html.style.setProperty('--primary', '#123');
              html.style.setProperty('--secondary', '#bada55');pisnicka.src= 'plugins/music/media/sound.mp3'; player.pause(); player.load(); player.play();" class="barva item-1"></span>
              <span onclick="html.style.setProperty('--primary', '#7d0000');
              html.style.setProperty('--secondary', 'gold');;pisnicka.src= 'plugins/music/media/sound2.mp3'; player.pause(); player.load(); player.play();" class="barva item-2"></span>
              <span onclick="html.style.setProperty('--primary', 'black');
              html.style.setProperty('--secondary', 'lime');pisnicka.src= 'plugins/music/media/sound3.mp3'; player.pause(); player.load(); player.play();" class="barva item-3"></span>
              <span onclick="html.style.setProperty('--primary', 'midnightblue');
              html.style.setProperty('--secondary', 'cadetblue');pisnicka.src= 'plugins/music/media/sound4.mp3'; player.pause(); player.load(); player.play();" class="barva item-4"></span>
              <span onclick="html.style.setProperty('--primary', '#540075');
              html.style.setProperty('--secondary', 'gold');pisnicka.src= 'plugins/music/media/sound5.mp3'; player.pause(); player.load(); player.play();" class="barva item-5"></span>
              <span onclick="html.style.setProperty('--primary', '#e06700');
              html.style.setProperty('--secondary', '#7aff00');pisnicka.src= 'plugins/music/media/sound6.mp3'; player.pause(); player.load(); player.play();" class="barva item-6"></span>
              <span onclick="html.style.setProperty('--primary', '#321');
              html.style.setProperty('--secondary', '#bada55');;pisnicka.src= 'plugins/music/media/sound7.mp3'; player.pause(); player.load(); player.play();" class="barva item-7"></span>
              <span title="Připravuje se" class="barva item-disabled disable"></span>
            </div>
          </div>
    `;
    document.body.appendChild(vyjizdec);
  }

  if ( /*@cc_on!@*/ true) {
    let ieclass = 'ie' + document.documentMode;
    document.querySelector('vyjizdec').classList.add('ie', ieclass);
  }
  let contWidth = document.querySelector('.vyjizdec-content').offsetWidth + 2;
  document.querySelector('.vyjizdec').style.setProperty('left', '-' + contWidth + 'px');
  document.querySelector('.vyjizdec').style.setProperty('visibility', 'visible');
  let vyjizdecHeader = document.querySelectorAll(".vyjizdec-header");
  for (let i = 0; i < vyjizdecHeader.length; i++) {
    vyjizdecHeader[i].addEventListener('click', function () {
      if (vyjizdecHeader[i].parentElement.classList.contains('open')) {
        vyjizdecHeader[i].parentElement.style.setProperty('left', '-' + contWidth + 'px');
        vyjizdecHeader[i].parentElement.classList.remove('open');
      } else {
        vyjizdecHeader[i].parentElement.classList.add('open');
        vyjizdecHeader[i].parentElement.style.setProperty('left', '0');
      }
    });
  };

});