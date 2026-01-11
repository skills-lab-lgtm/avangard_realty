const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const obj = objects.find(o => o.id == id);
const container = document.getElementById("object");

if (obj) {
  container.innerHTML = `
    <img src="${obj.image}" alt="${obj.title}" class="object-img">

    <h1>${obj.title}</h1>
    <p>${obj.area} м²</p>
    <p>${obj.description}</p>
    <strong>${obj.price.toLocaleString()} ₸</strong>

    <div class="actions">
      <a href="https://wa.me/77056207681?text=Хочу+записаться+на+просмотр:+${obj.title}" class="btn primary">
        📅 Записаться на просмотр
      </a>

      <a href="https://wa.me/77056207681?text=Нужна+консультация+по+недвижимости" class="btn secondary">
        💬 Записаться на консультацию
      </a>

      <a href="tel:+77056207681" class="btn outline">
        📞 Позвонить
      </a>

      <a href="mortgage.html" class="btn outline">
        🏦 Рассчитать ипотеку
      </a>
    </div>
  `;
}
