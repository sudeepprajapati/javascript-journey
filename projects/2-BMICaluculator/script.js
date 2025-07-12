const form = document.querySelector('#bmi-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    // Clear previous results
    results.textContent = '';
    results.style.color = '#00ff9f';

    // Validation
    if (isNaN(height) || height <= 0) {
        results.textContent = 'Please enter a valid height in centimeters.';
        results.style.color = 'tomato';
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        results.textContent = 'Please enter a valid weight in kilograms.';
        results.style.color = 'tomato';
        return;
    }

    // BMI Calculation
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Show the result
    let message = `Your BMI is ${bmi}`;

    if (bmi < 18.6) {
        message += ' — Underweight';
        results.style.color = '#ffc107'; // yellow
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        message += ' — Normal';
        results.style.color = '#00ff9f'; // green
    } else {
        message += ' — Overweight';
        results.style.color = '#ff5e57'; // red
    }

    results.textContent = message;
});
