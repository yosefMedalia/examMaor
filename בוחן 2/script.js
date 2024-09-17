
        const button = document.getElementById('getUserBtn');
        const userParagraph = document.getElementById('user');

        button.addEventListener('click', () => {
            fetch('https://randomuser.me/api/')
                .then(response => response.json())
                .then(data => {
                    const user = data.results[0];
                    const fullName = `${user.name.first} ${user.name.last}`;
                    userParagraph.textContent = fullName;
                })
                .catch(error => console.error('Error:', error));
        });
    