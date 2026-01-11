const catalog = document.getElementById("catalog");

function render(list) {
  catalog.innerHTML = "";

  list.forEach(o => {
    catalog.innerHTML += `
      <a href="object.html?id=${o.id}" class="card">
        <img src="${o.image}" alt="${o.title}">
        <div class="card-body">
          <h3>${o.title}</h3>
          <p>${o.area} м²</p>
          <strong>${o.price.toLocaleString()} ₸</strong>
        </div>
      </a>
    `;
  });
}

render(objects);
