const grid = document.querySelector('.grid');

fetch('https://apimocha.com/playstation/productos')
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${product.img}" alt="${product.desc}">
        <h2>${product.name}</h2>
        <p>${product.desc}</p>
        <button>Add to cart</button>
      `;
      grid.appendChild(card);
    });
  });
