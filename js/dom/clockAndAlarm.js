const d = document;

export function clock(clock, turnOnBtn, turnOffBtn) {
  let intervalID;
  d.querySelector(turnOffBtn).disabled = true;
  d.addEventListener("click", (e) => {
    if (e.target.matches(turnOnBtn)) {
      intervalID = setInterval(() => {
        let time = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${time}</h3>`;
      }, 1000);

      e.target.disabled = true;
    }

    if (e.target.matches(turnOffBtn)) {
      clearInterval(intervalID);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(turnOnBtn).disabled = false;
    }
  });
}

export function alarm(sound, turnOnBtn, turnOffBtn) {
  let intervalId;
  const $alarm = d.createElement("audio");
  $alarm.src = sound;
  d.querySelector(turnOffBtn).disabled = true;

  d.addEventListener("click", (e) => {
    if (e.target.matches(turnOnBtn)) {
      intervalId = setTimeout(() => {
        $alarm.play();
      }, 2000);
      e.target.disabled = true;
      d.querySelector(turnOffBtn).disabled = false;
    }

    if (e.target.matches(turnOffBtn)) {
        clearTimeout(intervalId);
        $alarm.pause();
        $alarm.currentTime = 0;

        d.querySelector(turnOnBtn).disabled = false;
    }
  });
}
