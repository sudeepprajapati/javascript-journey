const form = document.querySelector('#bmi-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const age = parseInt(document.querySelector('#age').value);
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const results = document.querySelector('#results');

    results.textContent = '';
    results.style.color = '#00ff9f';

    if (!height || height <= 0) {
        results.textContent = 'Please enter a valid height.';
        results.style.color = 'tomato';
        return;
    }

    if (!weight || weight <= 0) {
        results.textContent = 'Please enter a valid weight.';
        results.style.color = 'tomato';
        return;
    }

    if (!age || age <= 0) {
        results.textContent = 'Please enter a valid age.';
        results.style.color = 'tomato';
        return;
    }

    if (!gender) {
        results.textContent = 'Please select your gender.';
        results.style.color = 'tomato';
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let category = '';
    let suggestion = '';
    let color = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        color = '#ffc107';
        suggestion = gender === 'male'
            ? 'Increase protein-rich food and track your calories.'
            : 'Consider healthy snacks and balanced meals to gain safely.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal';
        color = '#00ff9f';
        suggestion = 'Great job! Maintain your current lifestyle and stay active.';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
        color = '#ff884d';
        suggestion = gender === 'male'
            ? 'Try strength training and reduce sugary foods.'
            : 'Consider cardio workouts and portion control in meals.';
    } else {
        category = 'Obese';
        color = '#ff5e57';
        suggestion = gender === 'male'
            ? 'Consult a trainer or dietitian. Start with low-impact exercise.'
            : 'Focus on a structured plan with medical guidance and consistency.';
    }

    results.style.color = color;
    results.innerHTML = `
    <p>Your BMI is <strong>${bmi}</strong> — <strong>${category}</strong></p>
    <p><em>Suggestion:</em> ${suggestion}</p>
  `;
});
