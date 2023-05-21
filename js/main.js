// drope down menu

const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dorpDown = document.querySelector('.inner-menu');

toggleBtn.onclick = function() {
    dorpDown.classList.toggle('open')
}
