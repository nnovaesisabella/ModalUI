const menuToggle = document.querySelector(".nav-menu");
const menuBtn = document.querySelector(".icon-burger");
const cancelBtn = document.querySelector(".icon-close");
menuBtn.onclick = () => {
    menuToggle.classList.add("active");
    menuBtn.classList.toggle("hide");
};
cancelBtn.onclick = () => {
    menuToggle.classList.remove("active");
    menuBtn.classList.toggle("hide");
}

// Modal items
const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');

//Click
openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// //Form Validation 
const form = document.getElementById('form');
const namel= document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordconfirm = document.getElementById('passwordconfirm');

// //Show error message
function showError(input, message) {
const formValidation = input.parentElement;
formValidation.className = 'form-validation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}
 


