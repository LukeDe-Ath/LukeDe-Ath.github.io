// Date for footer

let footer = document.getElementById("foot");
const createdDate = "April 2024";

if (createdDate) {
    footer.innerHTML = `Created on ${createdDate}`;
}

// Dark mode

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

console.log(darkMode)

const enableDarkMode = () => {
    // Add dark mode class to the body
    document.body.classList.add('darkmode');
    // Update local storage to enable dark mode
    localStorage.setItem('darkMode', 'enabled');
    // Change button CSS
    darkModeToggle.innerText = "Light Mode";

    // console.log('Dark enabled')
}

const disableDarkMode = () => {
    // Remove dark mode class from the body
    document.body.classList.remove('darkmode');
    // Update local storage to disable dark mode, or null
    localStorage.setItem('darkMode', null);
    // Change button CSS
    darkModeToggle.innerText = "Dark Mode";
    // console.log('Dark disabled')
}

// Initialise on page load
if (darkMode === 'enabled') {
    enableDarkMode();
}


darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})