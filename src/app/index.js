(function() {
  
  const uploadButton = document.querySelector('.search__button');
  
  uploadButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.target.blur();
    alert('Data was uploaded');
  });
  
})();