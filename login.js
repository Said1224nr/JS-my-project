let text = document.querySelector('#message');
let btn = document.querySelector('button');
let password = document.querySelector('.parol');
let id = document.querySelector('.ID');
let href = document.querySelector('#login-link');

let users = [
    {
        MoodmeID: 123456,
        passwords: 78900,
        navigation: './index.html'
    }
];

btn.addEventListener('click', () => {
    let userFound = false;
    users.map((v) => {
        if (password.value == v.passwords && id.value == v.MoodmeID) {
            userFound = true;
            text.innerHTML = "password is succesfuly";
            text.style.color = 'green';
            href.innerHTML = "go to the website";
            href.href = v.navigation;
            href.style.color = 'green';
        }
    });
    if (!userFound) {
        text.innerHTML = 'ID or password is wrong !';
        text.style.color = 'red';
    }
});
