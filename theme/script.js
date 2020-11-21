let i = 0;
let html = document.documentElement;
document.querySelector('img').addEventListener('click', function ()
{
  if (i == 0) {
    html.style.setProperty('--primary', '#7d0000');
    html.style.setProperty('--secondary', 'gold');
    ++i;
  } else if (i == 1) {
    html.style.setProperty('--primary', 'black');
    html.style.setProperty('--secondary', 'lime');
    ++i;
  } else {
    html.style.setProperty('--primary', '#123');
    html.style.setProperty('--secondary', '#bada55');
    i = 0;
  }
});