document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('pc-form');
  const budgetInput = document.getElementById('budget');
  const warningDiv = document.getElementById('budget-warning');
  const confirmMessage = document.getElementById('form-confirm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const budgetValue = parseInt(budgetInput.value.trim(), 10);

    if (isNaN(budgetValue) || budgetValue < 800) {
      warningDiv.textContent = '❗ Budget must be at least $800 to proceed.';
      warningDiv.classList.remove('hidden');
      return;
    } else {
      warningDiv.classList.add('hidden');
    }

    form.style.display = 'none';
    confirmMessage.classList.remove('hidden');
    setTimeout(() => confirmMessage.classList.add('show'), 10);
  });
});






