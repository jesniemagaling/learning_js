// Swap 'From - To' cities
document.querySelector('.swap-icon').addEventListener('click', () => {
  const input = document.getElementById('fromToInput');
  const parts = input.value.split(' - ');
  if (parts.length === 2) {
    input.value = `${parts[1].trim()} - ${parts[0].trim()}`;
  }
});
