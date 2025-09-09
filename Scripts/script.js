const button = document.getElementById('myButton');

button.onclick = function() {
    alert('Button Clicked - DOM Property Method');
};

let btn = document.getElementById('thirdButton');
let output = document.getElementById('output');

btn.addEventListener('click', function(){
    output.textContent = 'Button Clicked - addEventListener Method';
});

//different events
let input = document.getElementById('inputBox')

//keydown event
input.addEventListener('keydown', function(event){
    console.log("You pressed this key: ", event.key);
});

//focus event
input.addEventListener('focus', function(){
    input.style.backgroundColor = 'lightblue';
});

//blur event
input.addEventListener('blur', function(){
    input.style.backgroundColor = 'lightyellow';
});

function toggleTheme(){
    document.body.classList.toggle('dark-theme');
}

//drag and drop
let dragItem = document.getElementById('dragItem');
let dropzone = document.getElementById('dropzone');

dragItem.addEventListener('dragstart', function(event){
    event.dataTransfer.setData('id', event.target.id);
});

dropzone.addEventListener('dragover', function(event){
    event.preventDefault(); //allow drop
});

dropzone.addEventListener('drop', function(event){
    event.preventDefault();
    let id = event.dataTransfer.getData('id');
    dropzone.appendChild(document.getElementById(id));
    dropzone.style.backgroundColor = 'lightgreen'; 
});

//validate form

function validateEmail(email) {
    let format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return format.test(email); 
}

function validatePassword(password) {
    // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
    let format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return format.test(password);
}


function validateSignUp(){
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    //not empty
    if(!username || !email || !password){
        alert('All fields are required!');
        return false; //prevent form submission
    }

    if(!validateEmail(email)){
        alert('Please enter a valid email address.');
        return false; //prevent form submission
    }

    if(!validatePassword(password)){
        alert('Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.');
        return false; //prevent form submission
    }

    alert('Form submitted successfully!');
    return true; //allow form submission

}