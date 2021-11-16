export default function toggleRepeat(panelBtn) {
  const d = document;
  d.addEventListener("change", (e) => {
    if (e.target.matches(panelBtn)) {
      d.querySelector(".select-day-repeat").classList.toggle("invisible");
    }
  });
}
