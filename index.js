console.log("Running...")
let turn = 'X';
const turn_name = document.querySelector('#player-turn-name');
const slots = document.querySelectorAll('.slot');
const reset_button = document.querySelector('#reset');
const winner = document.querySelector('#winner')
const win_sequence = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
function checkWin() {
    win_sequence.forEach(sequence => {
        const [a, b, c] = sequence;
        console.log(slots[a].textContent, slots[b].textContent, slots[c].textContent);
        if (slots[a].textContent === slots[b].textContent && slots[c].textContent === slots[b].textContent && slots[a].textContent !== '' && slots[b].textContent !== '' && slots[c].textContent !== '') {
            slots[a].textContent === 'X' ? winner.innerHTML = '🎉 PLAYER 1 WON ! 🎉' : winner.innerHTML = '🎉 PLAYER 2 WON ! 🎉'
            winner.style.display = 'flex'
        }
    })

};
function reset() {
    turn = 'X'
    turn_name.textContent = 'PLAYER 1'
    slots.forEach(slot => {
        slot.textContent = ''
    })
}

function toggleTurn() {
    if (turn === 'X') {
        turn = 'O'
        turn_name.textContent = 'PLAYER 2'
    } else {
        turn = 'X'
        turn_name.textContent = 'PLAYER 1'
    }
}

slots.forEach(slot => {
    slot.addEventListener('click', event => {
        slot.textContent = turn;
        toggleTurn();
        checkWin()
    })
})
reset_button.addEventListener('click', reset);
