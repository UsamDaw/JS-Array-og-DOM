
/* Task 2 (a & b)
const generatedNumbers = [];

        function numberGenerate() {
            const min = parseInt(document.getElementById('min').value);
            const max = parseInt(document.getElementById('max').value);

            let randomNumber;
            do {
                randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            } while (generatedNumbers.includes(randomNumber));
            generatedNumbers.push(randomNumber);
            document.getElementById('result').innerText = `You got number: ${randomNumber}`;
        }

*/

/* Task 1 (Without challenge)
const fruitz = [];
function addFruitz() {
    const fruit = document.getElementById('fruitzInput').value;
    if (fruit) {
        fruitz.push(fruit);
        document.getElementById('fruitzList').innerHTML = fruitz.map(f => `<li>${f}</li>`).join('');
        document.getElementById('fruitzInput').value = '';
    }
}
*/

/* Task 3 (a & b)
function tellElementer() {
    const arr = document.getElementById('inputArray').value.split(',').map(item => item.trim());
    const countdowns = [];
    arr.forEach(item => {
        let index = countdowns.findIndex(e => e[0] === item);
        if (index !== -1) {
            countdowns[index][1]++;
        } else {
            countdowns.push([item, 1]);
        }
    });
    document.getElementById('resultat').innerHTML = countdowns
        .map(([element, antall]) => `${element}: ${antall}`)
        .join('<br>');
}
*/

/* Task 4 (a & b)
function changeColor(color) {
    document.body.style.backgroundColor = color;
}
*/

/* Task 5
const mages = [
    "images.jpg",
    "Tree.jpeg",
    "images.jpg",
    "Tree.jpeg"
];

function imagez() {
    const tilfeldigIndex = Math.floor(Math.random() * mages.length);
    document.getElementById("imaig").src = mages[tilfeldigIndex];
}
*/