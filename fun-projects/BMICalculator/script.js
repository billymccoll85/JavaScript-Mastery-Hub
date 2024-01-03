document.getElementById('calculate').addEventListener('click', () => {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    
    if (weight && height) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2); // BMI formula
        let category = getCategory(bmi);
        document.getElementById('result').innerText = `Your BMI is ${bmi} (${category})`;
        document.getElementById('result').style.display = 'block'; // Display the result box
    } else {
        document.getElementById('result').innerText = 'Please enter both weight and height.';
        document.getElementById('result').style.display = 'none'; // Hide the result box
    }
});

function getCategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi <= 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi <= 29.9) return 'Overweight';
    return 'Obesity';
}
document.getElementById('result').style.display = 'none';
