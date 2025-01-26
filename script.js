const form = document.getElementById('age-form');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const birthdayInput = document.getElementById('dob').value;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(birthdayInput)) {
    alert('Please enter a valid date in the format YYYY-MM-DD.');
    return;
  }

  const { DateTime } = luxon;
  const birthdate = DateTime.fromISO(birthdayInput);
  if (!birthdate.isValid || birthdate > DateTime.now()) {
    alert('Please enter a valid past date.');
    return;
  }

  const present = DateTime.now();
  const diff = present.diff(birthdate, ['years', 'months', 'days']).toObject();

  const years = Math.floor(diff.years);
  const months = Math.floor(diff.months);
  const days = Math.floor(diff.days);

  result.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
  result.classList.remove('hidden');
});
