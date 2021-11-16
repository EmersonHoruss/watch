import toggleSubSection from "./toggleSubSection.js";
import toggleRepeat from "./toggleRepeat.js";
import toggleSection from "./toggleSection.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  toggleSubSection(".switch input");
  toggleRepeat(".repeat-checkbox input");
  toggleSection(".delete .icon-tag .svg", ".delete .icon-tag", ".delete .icon-tag .svg path");
});
