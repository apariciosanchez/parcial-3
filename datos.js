//funcion javascrip //
const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar los datos');
            }
            return response.json();
        })
        .then(data => {
            const userList = document.getElementById('userList');
            userList.innerHTML = '';
            data.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
};
document.getElementById('loadButton').addEventListener('click', loadData);