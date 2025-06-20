const searchTerm = document.querySelector('#searchInput');
const productList = document.querySelector('#productList');
const productItems = document.querySelectorAll('.product-item');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  productItems.forEach((item) => {
    const itemText = item.textContent.toLowerCase();

    if (itemText.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
