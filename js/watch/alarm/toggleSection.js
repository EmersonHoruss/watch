export default function toggleRepeat(panelBtn, secondPanelBtn, thirdPanelBtn) {
  const d = document;
  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(secondPanelBtn) || e.target.matches(thirdPanelBtn)) {
      d.querySelector(".hr-minimized").classList.toggle("invisible");
      d.querySelector(".hr-maximized").classList.toggle("invisible");
      d.querySelector(".particular-alarm").classList.toggle("no-p-bottom");
      d.querySelector(".details-maximized").classList.toggle("invisible");
      d.querySelector(".delete button").classList.toggle("invisible");
      d.querySelector(".delete .extra-info").classList.toggle("invisible");
      d.querySelector(".delete .icon-tag:last-child .svg").classList.toggle("invisible");
      d.querySelector(".delete .icon-tag:last-child .svg:last-child").classList.toggle("invisible");
    }
  });
}
