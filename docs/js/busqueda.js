document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const suggestions = document.getElementById('suggestions');
  
    const items = [
      { name: 'Dracónido', link: 'https://sssccv.github.io/wkbg3/Dracónido/' },
      { name: 'Elfos', link: 'https://sssccv.github.io/wkbg3/Elfos/' },
      { name: 'Enano', link: 'https://sssccv.github.io/wkbg3/Enano//'},
      { name: 'Gnomo', link: 'https://sssccv.github.io/wkbg3/Gnomo/' },
      { name: 'Humano', link: 'https://sssccv.github.io/wkbg3/Humano/' },
      { name: 'Mediano', link: 'https://sssccv.github.io/wkbg3/Mediano/' },
      { name: 'Semielfo', link: 'https://sssccv.github.io/wkbg3/Semielfo/' },
      { name: 'Semiorco', link: 'https://sssccv.github.io/wkbg3/Semiorco/' },
      { name: 'Tiflin', link: 'https://sssccv.github.io/wkbg3/Tiflin/' },
      { name: 'Bárbaro', link: 'https://sssccv.github.io/wkbg3/Bárbaro/' },
      { name: 'Bárdo', link: 'https://sssccv.github.io/wkbg3/Bárdo/' },
      { name: 'Brujo', link: 'https://sssccv.github.io/wkbg3/Brujo/' },
      { name: 'Clérigo', link: 'https://sssccv.github.io/wkbg3/Clérigo/' },
      { name: 'Druida', link: 'https://sssccv.github.io/wkbg3/Druida/' },
      { name: 'Explorador', link: 'https://sssccv.github.io/wkbg3/Explorador/' },
      { name: 'Guerrero', link: 'https://sssccv.github.io/wkbg3/Guerrero/' },
      { name: 'Hechicero', link: 'https://sssccv.github.io/wkbg3/Hechicero/' },
      { name: 'Mago', link: 'https://sssccv.github.io/wkbg3/Mago/' },
      { name: 'Monje', link: 'https://sssccv.github.io/wkbg3/Monje' },
      { name: 'Paladín', link: 'https://sssccv.github.io/wkbg3/Paladín/' },
      { name: 'Pícaro', link: 'https://sssccv.github.io/wkbg3/Pícaro/' }
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