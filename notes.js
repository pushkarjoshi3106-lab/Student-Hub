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
