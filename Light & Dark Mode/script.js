const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav =document.getElementById('nav');
const toggleIcon =document.getElementById('toggle-icon');
const image1 =document.getElementById('image1');
const image2 =document.getElementById('image2');
const image3 =document.getElementById('image3');
const image4 =document.getElementById('image4');
const textBox= document.getElementById('textbox')


////Dark or light Images
function imageMode(color) {
    image1.src = `images/bitcoin_${color}.svg`;
    image2.src = `images/cloud_hosting_${color}.svg`;
    image3.src = `images/educator_${color}.svg`;
    image4.src = `images/engineering_team_${color}.svg`;
}

function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = isDark  ? 'rgb(0 0 0 / 50%' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = isDark  ? 'Light Mode' : 'Dark Mode';
    isDark  ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    isDark ? imageMode('light') : imageMode('dark');
}



// Theme Switcher
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark')
        toggleDarkLightMode(false);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light')
        toggleDarkLightMode(true);
    }
}


//Event Listners
toggleSwitch.addEventListener('change' ,switchTheme);


// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');

if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}