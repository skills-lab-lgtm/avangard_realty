document.querySelectorAll('.step-title').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display =
      content.style.display === 'block' ? 'none' : 'block';
  });
});

function changeImage(img) {
  document.getElementById('mainImage').src = img.src;
}
