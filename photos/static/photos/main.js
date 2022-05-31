const copyBtns = [...document.getElementsByClassName('copy-btn')];

let previous = null;

copyBtns.forEach(btn => btn.addEventListener('click', ()=> {
    const photoUrl = btn.getAttribute('data-url');
    fullUrl = '' + photoUrl
    navigator.clipboard.writeText(fullUrl);
    btn.textContent='Copied!';

    if (previous) {
         previous.textContent='Copy image url'
    }
    previous = btn
}))