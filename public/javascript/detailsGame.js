// const userID = localStorage.getItem('userID');
// const player = localStorage.getItem('player');

// if (userID && player && userID !== 'undefined' && userID !== 'null' && player !== 'underfined' && player !== 'null') {
//     $('#playerStatus').text(`Logged in as: ${player}`);
// } else {
//     $('#playerStatus').text('You are not signed in');
//     localStorage.clear();
// }

// $('#start-button').on('click', () => {
//     const userID = localStorage.getItem('userID');

//     if (userID && userID !== 'undefined' && userID !== 'null') {
//         window.location.href = `/play?userID=${userID}`;
//     } else {
//         $('#playerStatus').text('You are not signed in');
//     }
// });

// $('#login').on('click', event => {
//     event.preventDefault();

//     $('#loginScreen').modal({ show: true });
// });

// $('#add').on('click', event => {
//     event.preventDefault();

//     $('#addScreen').modal({ show: true });
// });

// $('#addBtn').on('click', event => {
//     event.preventDefault();

//     const username = $('#newUsername').val().trim();
//     const password = $('#newPassword').val().trim();

//     if (!username || !password) {
//         return alert ('Enter username and password');
//     }

//     const newPlayer = {
//         name: username, password,
//     };

//     const new
// })