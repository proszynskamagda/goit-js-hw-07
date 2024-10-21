const categoriesList = document.querySelectorAll('#categories .item');

console.log(`Liczba kategorii: ${categoriesList.length}`);

categoriesList.forEach(category => {
 
  const categoryTitle = category.querySelector('h2').textContent;
  
  const categoryItems = category.querySelectorAll('ul li').length;
  
  console.log(`Kategoria: ${categoryTitle}, Liczba elementów: ${categoryItems}`);
});