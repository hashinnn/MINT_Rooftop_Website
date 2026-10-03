function toggleMenu() {
  document.querySelector("nav").classList.toggle("open");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

function filterActivities(type, button) {
  document.querySelectorAll(".interest").forEach(b => b.classList.remove("active"));
  button.classList.add("active");

  document.querySelectorAll(".activity-card").forEach(card => {
    card.classList.toggle("hidden", type !== "all" && card.dataset.type !== type);
  });
}

function saveInterests() {
  const selected = [...document.querySelectorAll('.interest-panel input:checked')]
    .map(input => input.value);

  const output = document.getElementById("recommendation");

  if (selected.length === 0) {
    output.textContent = "Choose at least one interest so we can recommend something.";
    return;
  }

  output.textContent =
    "Based on your interests, check out the activities and events above — especially " +
    selected.slice(0, 2).join(" and ") + ".";
}

function submitPost(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const project = document.getElementById("project").value;

  showToast(`Thanks ${name}! "${project}" has been shared with the community.`);
  event.target.reset();
}
