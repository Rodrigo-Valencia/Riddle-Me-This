// const value = $('#textBox').text().trim();
// console.log(value);

// const gameID = document.getElementById('gameID').textContent;
// const userID = document.getElementById('userID').textContent;
// const user_id = localStorage.getItem('user_id');

// console.log(gameID, userID, user_id);

// const previousGame = localStorage.getItem(gameID) === 'Played';
// localStorage.setItem(gameID, 'Played');

// if (userID.split(',').includes(user_id) || previousGame) {
//     window.location.href = `/`;
// } else {
//     riddleID = setInterval(riddleCounter, 1000);
// }

// function riddleCounter() {
//     const clockTimer = document.querySelector('.timer');
//     clockriddleTime -= 1;
//     clockTimer.textContent = clockriddleTime;

//     if (clockriddleTime < 1) {
//         clearInterval(riddleID);

//         $('#textBox').hide();
//         $('#answerBox').show();
//         answerID = setInterval(answerCounter, 1000);
//         $('.clock').hide();
//     }
// }

// function answerCounter () {
//     const clockTimer2 = document.querySelector('.timer2');
//     clockAnswerTime -= 1;
//     clockTimer2.textContent = clockAnswerTime;

//     if (clockAnswerTime < 1) {
//         clearInterval(answerID)
//     }
// }

// function startGame() {
//     const userStart = $('#userStart').val().trim();

//     if (!userID || userID === 'undefined' || userID === 'null') {
//         return alert('unsuccessful');
//     }

//     const newGame = {
//         submission: gameID, userID,
//     };

//     const response = await fetch('/api/game', {
//         method: 'PUT',
//         data: newGame,
//     }).then(function(response) {
//         console.log(response);
//         if (response.error) {
//             return alert('Something went wrong!');
//         }
//         if (response.end) {
//             window.location.href = `/game/${response.end}`;
//         } else {
//             window.location.href = '/';
//         }
//     });
// }

