function showSection(id) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => section.classList.add('hidden'));

  const active = document.getElementById(id);
  if (active) {
    active.classList.remove('hidden');
  }
}

// Affiche "À propos" par défaut au chargement
window.onload = () => showSection('about');


function toggleProject(id) {
  const imageDiv = document.getElementById(id);
  const icon = document.getElementById(`icon-${id}`);

  if (imageDiv.classList.contains("hidden")) {
    imageDiv.classList.remove("hidden");
    icon.textContent = "–";
  } else {
    imageDiv.classList.add("hidden");
    icon.textContent = "+";
  }
}


