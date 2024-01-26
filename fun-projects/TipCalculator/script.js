document.getElementById('bill').addEventListener('input', calculateTip);
document.getElementById('tip').addEventListener('input', calculateTip);
document.getElementById('people').addEventListener('input', calculateTip);

function calculateTip() {
    let bill = parseFloat(document.getElementById('bill').value);
    let tip = parseFloat(document.getElementById('tip').value);
    let people = parseFloat(document.getElementById('people').value);

    if (isNaN(bill) || isNaN(tip) || isNaN(people)) {
        document.getElementById('result').textContent = 'Please enter valid values';
    } else {
        let totalTip = (bill * tip) / 100;
        let tipPerPerson = totalTip / people;
        document.getElementById('result').textContent = 'Tip per person: $' + tipPerPerson.toFixed(2);
    }
}