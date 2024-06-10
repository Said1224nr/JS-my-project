let btn = document.querySelector('button');
let input = document.querySelector('input');
let wrapper = document.querySelector('.wrapper');

let users = [
    {
        id: 1,
        userName: 'Saidakbar'
    }
];

let ReadFun = () => {
    wrapper.innerHTML = '';

    users.forEach((user, index) => {
        let div = document.createElement('div');
        div.classList.add('CR7');
        div.innerHTML = `
            <p>${user.id}</p> 
            <p>${user.userName}</p> 
            <button type="button" class="edit-btn">Edit</button> 
            <button type="button" class="delete-btn">Delete</button>
        `;
        wrapper.appendChild(div);

        // Add event listener for delete button
        div.querySelector('.delete-btn').addEventListener('click', () => {
            DeleteUserFunction(index);
        });

        // Add event listener for edit button
        div.querySelector('.edit-btn').addEventListener('click', () => {
            EditUserFunction(index);
        });
    });
};

let AddUserFunction = () => {
    const obj = {
        id: users.length + 1,
        userName: input.value
    };

    users.push(obj);
    ReadFun();
    input.value = null;
};

let DeleteUserFunction = (index) => {
    users.splice(index, 1);
    ReadFun();
};

let EditUserFunction = (index) => {
    let newUserName = prompt("Enter new user name:", users[index].userName);
    if (newUserName) {
        users[index].userName = newUserName;
        ReadFun();
    }
};

btn.addEventListener('click', AddUserFunction);

ReadFun();
