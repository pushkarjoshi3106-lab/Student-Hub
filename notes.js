// notes.js
// Semester filter logic for notes page

document.addEventListener("DOMContentLoaded", () => {
  const filterChips = document.querySelectorAll(".filter-chip");
  const noteCards = document.querySelectorAll(".note-card");

  if (!filterChips.length || !noteCards.length) return;

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const sem = chip.dataset.semester;

      // active chip styling
      filterChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");

      // show / hide cards
      noteCards.forEach((card) => {
        const cardSem = card.dataset.semester;
        card.style.display =
          sem === "all" || cardSem === sem ? "block" : "none";
      });
    });
  });
});
