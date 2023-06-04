window.addEventListener('DOMContentLoaded', () => {
    const marcasButton = document.querySelector('#navbar li:nth-child(2)');
    const submenu = document.querySelector('.submenu');

    marcasButton.addEventListener('mouseenter', () => {
        submenu.style.display = 'block';
    });

    marcasButton.addEventListener('mouseleave', () => {
        submenu.style.display = 'none';
    });
});



let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 2000);

function nextImage() {
    count++;
    if(count>3){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}
