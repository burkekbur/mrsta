document.addEventListener('DOMContentLoaded', function (event) {

    let printer = document.createElement('tisk');
    printer.id = 'print';
    printer.innerHTML = `<link rel="stylesheet" href="plugins/print/print.css">
    <div>Tisk</div>`;
    document.body.appendChild(printer);

    printer.addEventListener('click',function(){
      window.print();
    })

})