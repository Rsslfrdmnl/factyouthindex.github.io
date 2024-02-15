function showMenu(searchTerm) {
    var searchMenu = document.getElementById('search-menu');
    searchMenu.innerHTML = '';

    var searchInput = document.getElementById('search-input');

    if (searchTerm.trim() !== '') {
      var categories = [
        'Home', 'News and Politics', 'Culture', 'Technology',
        'Family', 'Relationships', 'Work'
      ];

      var filteredCategories = categories.filter(function (category) {
        return category.toLowerCase().includes(searchTerm.toLowerCase());
      });

      filteredCategories.forEach(function (item) {
        var menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.textContent = item;
        searchMenu.appendChild(menuItem);
      });

      var inputRect = searchInput.getBoundingClientRect();

      searchMenu.style.display = 'block';
      searchMenu.style.right = window.innerWidth - inputRect.right + 'px';
      searchMenu.style.top = inputRect.bottom + 'px';
    } else {
      searchMenu.style.display = 'none';
    }
  }
  function addComment() {
  var commentInput = document.getElementById('commentInput');
  var commentList = document.getElementById('commentList');

  if (commentInput.value.trim() !== '') {
    var commentItem = document.createElement('li');
    commentItem.textContent = commentInput.value;

    commentItem.style.color = 'white';

    commentList.appendChild(commentItem);
    commentInput.value = '';
  }
}