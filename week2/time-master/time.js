const date = new Date();
const displayClock = document.getElementById("display-clock");
const toggleButton = document.getElementById("toggle-button");
const timeZoneSelect = document.getElementById("time-zone");
const dateTimeInput = document.getElementById("datetime-local");
const setAlarmButton = document.getElementById("set-alarm-button");
const toggleColor = document.getElementById("toggle-color");

let alarmTime = null;
let alarmSet = false;

const clock = {
  hour: date.getHours(),
  minute: date.getMinutes(),
  second: date.getSeconds(),
  is24HourFormat: false,
  timeZone: "local",

  updateTime() {
    const now = new Date();
    if (this.timeZone !== "local") {
      const localTime = new Date(now.toLocaleString("en-US", { timeZone: this.timeZone }));
      this.hour = localTime.getHours();
      this.minute = localTime.getMinutes();
      this.second = localTime.getSeconds();
    } else {
      this.hour = now.getHours();
      this.minute = now.getMinutes();
      this.second = now.getSeconds();
    }
  },

  getFormattedTime() {
    if (this.is24HourFormat) {
      return `${this.hour}:${this.minute < 10 ? "0" + this.minute : this.minute}:${this.second < 10 ? "0" + this.second : this.second}`;
    } else {
      return this.get12HourTime();
    }
  },

  get12HourTime() {
    let ampm = this.hour >= 12 ? "PM" : "AM";
    let hours = this.hour % 12;
    hours = hours ? hours : 12;
    let minutes = this.minute < 10 ? "0" + this.minute : this.minute;
    let seconds = this.second < 10 ? "0" + this.second : this.second;
    return `${hours}:${minutes}:${seconds} ${ampm}`;
  },

  toggleTimeFormat() {
    this.is24HourFormat = !this.is24HourFormat;
    displayClock.innerHTML = this.getFormattedTime();
  },

  startClock() {
    setInterval(() => {
      this.updateTime();
      displayClock.innerHTML = this.getFormattedTime();
      this.checkAlarm();
    }, 1000);
  },

  checkAlarm() {
    if (alarmSet) {
      const now = new Date();
      const alarmDate = new Date(alarmTime);
      if (now >= alarmDate && now < new Date(alarmDate.getTime() + 1000)) {
        alert("Alarm time reached!");
        alarmSet = false;
      }
    }
  },
};

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

displayClock.innerHTML = clock.getFormattedTime();
clock.startClock();

timeZoneSelect.addEventListener("change", () => {
  clock.timeZone = timeZoneSelect.value;
  clock.updateTime();
  displayClock.innerHTML = clock.getFormattedTime();
});

toggleButton.addEventListener("click", () => {
  clock.toggleTimeFormat();
});

toggleColor.addEventListener("click", () => {
  displayClock.style.color = getRandomColor();
});

setAlarmButton.addEventListener("click", () => {
  const inputDateTime = dateTimeInput.value;
  const appropriateTime = new Date(inputDateTime)
  if (appropriateTime > new Date()) {
    alarmTime = inputDateTime;
    alarmSet = true;
    alert("Alarm set for: " + new Date(alarmTime));
  } else {
    alert("Please select a valid date and time for the alarm.");
  }
});
