document.addEventListener('DOMContentLoaded', function (event) {

  if (window.innerWidth > 750) {
    let vyjizdec = document.createElement('vyjizdec');
    vyjizdec.classList.add('vyjizdec');
    vyjizdec.innerHTML = `
          <link rel="stylesheet" href="plugins/sticky/sticky.css">
          <div class="vyjizdec-header">
          <span>Změnit barvy</span>
          </div>
          <div class="vyjizdec-content">
            <h2>Změnit barevné téma</h2>
            <div class="barvy">
              <span onclick="html.style.setProperty('--primary', '#123');
              html.style.setProperty('--secondary', '#bada55')" class="barva item-1"></span>
              <span onclick="html.style.setProperty('--primary', '#7d0000');
              html.style.setProperty('--secondary', 'gold');" class="barva item-2"></span>
              <span onclick="html.style.setProperty('--primary', 'black');
              html.style.setProperty('--secondary', 'lime');" class="barva item-3"></span>
              <span onclick="html.style.setProperty('--primary', 'midnightblue');
              html.style.setProperty('--secondary', 'cadetblue');" class="barva item-4"></span>
              <span onclick="html.style.setProperty('--primary', '#540075');
              html.style.setProperty('--secondary', 'gold');" class="barva item-5"></span>
              <span onclick="html.style.setProperty('--primary', '#e06700');
              html.style.setProperty('--secondary', '#7aff00');" class="barva item-6"></span>
              <span onclick="html.style.setProperty('--primary', '#321');
              html.style.setProperty('--secondary', '#bada55');" class="barva item-7"></span>
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
  setInterval(function(){

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

  },1);


});