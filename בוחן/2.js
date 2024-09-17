// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Random User</title>
// </head>
// <body>
//     <h1>Random User:</h1>
//     <p id="user"></p>
//     <button id="getUserBtn">Get Random User</button>

//     <script>
//         const button = document.getElementById('getUserBtn');
//         const userParagraph = document.getElementById('user');

//         button.addEventListener('click', () => {
//             fetch('https://randomuser.me/api/')
//                 .then(response => response.json())
//                 .then(data => {
//                     const user = data.results[0];
//                     const fullName = `${user.name.first} ${user.name.last}`;
//                     userParagraph.textContent = fullName;
//                 })
//                 .catch(error => console.error('Error:', error));
//         });
//     </script>
// </body>
// </html>
