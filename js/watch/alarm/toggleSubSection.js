export default function toggleSubSection(panelBtn) {
  const d = document;
  d.addEventListener("change", (e) => {
    if (e.target.matches(panelBtn)) {
      d.querySelector(".time").classList.toggle("time-inactive");
      d.querySelector(".sound .icon-tag").classList.toggle("inactive-icon-tag");
      d.querySelectorAll(".day .itemDay").forEach(e=>e.classList.toggle("day-inactive"));
      d.querySelector(".repeat .repeat-checkbox .content .svg").classList.toggle("repeat-svg-inactive");
      d.querySelector(".repeat .repeat-checkbox .content span").classList.toggle("repeat-span-inactive");
      d.querySelector(".name .icon-tag").classList.toggle("inactive-icon-tag");
      d.querySelectorAll(".delete .icon-tag").forEach(e=>e.classList.toggle("inactive-icon-tag"));
      d.querySelector(".extra-info p").classList.toggle("no-default");
    }
  });
}
