document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const suggestions = document.getElementById('suggestions');
  
    const items = [
      { name: 'Dracónido', link: 'http://localhost:7777/Dracónido/' },
      { name: 'Elfos', link: 'http://localhost:7777/Elfos/' },
      { name: 'Enano', link: 'http://localhost:7777/Enano/'},
      { name: 'Gnomo', link: 'http://localhost:7777/Gnomo/' },
      { name: 'Humano', link: 'http://localhost:7777/Humano/' },
      { name: 'Mediano', link: 'http://localhost:7777/Mediano/' },
      { name: 'Semielfo', link: 'http://localhost:7777/Semielfo/' },
      { name: 'Semiorco', link: 'http://localhost:7777/Semiorco/' },
      { name: 'Tiflin', link: 'http://localhost:7777/Tiflin/' },
      { name: 'Bárbaro', link: 'http://localhost:7777/Bárbaro/' },
      { name: 'Bárdo', link: 'http://localhost:7777/Bárdo/' },
      { name: 'Brujo', link: 'http://localhost:7777/Brujo/' },
      { name: 'Clérigo', link: 'http://localhost:7777/Clérigo/' },
      { name: 'Druida', link: 'http://localhost:7777/Druida/' },
      { name: 'Explorador', link: 'http://localhost:7777/Explorador/' },
      { name: 'Guerrero', link: 'http://localhost:7777/Guerrero/' },
      { name: 'Hechicero', link: 'http://localhost:7777/Hechicero/' },
      { name: 'Mago', link: 'http://localhost:7777/Mago/' },
      { name: 'Monje', link: 'http://localhost:7777/Monje/' },
      { name: 'Paladín', link: 'http://localhost:7777/Paladín/' },
      { name: 'Pícaro', link: 'http://localhost:7777/Pícaro/' }
    ];
  
    searchInput.addEventListener('input', function () {
      const query = searchInput.value.toLowerCase();
      suggestions.innerHTML = '';
  
      if (query) {
        const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));
        filteredItems.forEach(item => {
          const suggestionItem = document.createElement('li');
          const link = document.createElement('a');
          link.href = item.link;
          link.textContent = item.name;
          suggestionItem.appendChild(link);
          suggestions.appendChild(suggestionItem);
        });
      }
    });
  });