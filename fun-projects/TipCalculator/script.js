document.getElementById('bill').addEventListener('input', calculateTip);
document.getElementById('tip').addEventListener('input', calculateTip);
document.getElementById('people').addEventListener('input', calculateTip);

function calculateTip() {
    var bill = parseFloat(document.getElementById('bill').value);
    var tip = parseFloat(document.getElementById('tip').value);
    var people = parseFloat(document.getElementById('people').value);

    if (isNaN(bill) || isNaN(tip) || isNaN(people)) {
        document.getElementById('result').textContent = 'Please enter valid values';
    } else {
        var totalTip = (bill * tip) / 100;
        var tipPerPerson = totalTip / people;
        document.getElementById('result').textContent = 'Tip per person: $' + tipPerPerson.toFixed(2);
    }
}