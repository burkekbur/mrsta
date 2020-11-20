document.write(`
<div class="vyjizdec">
    <div class="vyjizdec-obal ieundefined">
      <div class="vyjizdec-header druhy"><span class="vyjizdec-title">AKTUÁLNÍ INFO</span>
      </div>
      <div class="vyjizdec-content">
        <div class="vyjizdec-content-pad">
          <h2>Lorem ipsum</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, minus deserunt ullam nobis beatae assumenda ad modi ipsam excepturi praesentium eius facere fugiat, animi, vel odio dignissimos at! Ipsum, et.</p>
        </div>
      </div>
    </div>
  </div>
`)


document.addEventListener('DOMContentLoaded', function (event) {
  if ( /*@cc_on!@*/ true) {
    var ieclass = 'ie' + document.documentMode;
    document.querySelector('.vyjizdec-obal').classList.add(ieclass);
  }
  document.querySelector('.vyjizdec').classList.add('vyjizdec-right');
  var contwidth = document.querySelector('.vyjizdec-content').offsetWidth + 2;
  document.querySelector('.vyjizdec').style.setProperty('right', '-' + contwidth + 'px');
  document.querySelector('.vyjizdec').style.setProperty('visibility', 'visible');
  document.querySelector('.vyjizdec').classList.add('vyjizec');
  let popupHeader = document.querySelectorAll(".vyjizdec-header");
  for (let i = 0; i < popupHeader.length; i++) {
    console.log(this)
    popupHeader[i].addEventListener('click', function () {
      if (popupHeader[i].parentElement.parentElement.classList.contains('open')) {
        popupHeader[i].parentElement.parentElement.style.setProperty('right', '-' + contwidth + 'px');
        popupHeader[i].parentElement.parentElement.classList.remove('open');
        console.log('Má třídu');
      } else {
        popupHeader[i].parentElement.parentElement.classList.add('open');
        popupHeader[i].parentElement.parentElement.style.setProperty('right', '0');
        console.log('Nemá třídu');
      }
    });
  };
});