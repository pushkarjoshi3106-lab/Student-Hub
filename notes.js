document.addEventListener("DOMContentLoaded", () => {
  const filterChips = document.querySelectorAll(".filter-chip");
  const noteCards = document.querySelectorAll(".note-card");

  if (!filterChips.length || !noteCards.length) return;

  const searchInput = document.getElementById("notes-search");

  function applyFilters() {
    const activeChip = document.querySelector(".filter-chip.active");
    const activeSem = activeChip ? activeChip.dataset.semester : "all";
    const term = searchInput ? searchInput.value.toLowerCase() : "";

    noteCards.forEach((card) => {
      const cardSem = card.dataset.semester;
      const title = card.querySelector("h2").textContent.toLowerCase();
      const desc = card.querySelector("p").textContent.toLowerCase();

      const matchesSemester = activeSem === "all" || cardSem === activeSem;
      const matchesSearch =
        !term || title.includes(term) || desc.includes(term);

      card.style.display = matchesSemester && matchesSearch ? "block" : "none";
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      filterChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      applyFilters();
    });
  });

  applyFilters();
});
//notes completion progress
const doneCheckboxes = document.querySelectorAll(".note-done-checkbox");
const progressFill = document.getElementById("notes-progress-fill");
const progressText = document.getElementById("notes-progress-text");
function updateNotesProgress() {
  if (!doneCheckboxes.length || !progressFill || !progressText) return;
  let doneCount = 0;
  doneCheckboxes.forEach((cb) => {
    if (cb.checked) doneCount += 1;
  });
  const total = doneCheckboxes.length;
  const percent = total > 0 ? Math.round((doneCount / total) * 100) : 0;
  progressFill.style.width = percent + "%";
  progressText.textContent = `${percent}% completed`;
}
if (doneCheckboxes.length) {
  doneCheckboxes.forEach((cb) => {
    cb.addEventListener("change", updateNotesProgress);
  });
  updateNotesProgress();
}
