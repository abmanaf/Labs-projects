const date = new Date();
const displayClock = document.getElementById("display-clock");
const toggleButton = document.getElementById("toggle-button");
const timeZoneSelect = document.getElementById("time-zone");
const dateTimeInput = document.getElementById("datetime-local");
const setAlarmButton = document.getElementById("set-alarm-button");

let alarmTime = null;
let alarmSet = false;

const clock = {
  hour: date.getHours(),
  minute: date.getMinutes(),
  second: date.getSeconds(),
  is24HourFormat: false,

  updateTime() {
    const now = new Date();
    this.hour = now.getHours();
    this.minute = now.getMinutes();
    this.second = now.getSeconds();
  },

  getFormattedTime() {
    if (this.is24HourFormat) {
      return `${this.hour}:${
        this.minute < 10 ? "0" + this.minute : this.minute
      }:${this.second < 10 ? "0" + this.second : this.second}`;
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
    }, 1000);
  },
};

displayClock.innerHTML = clock.getFormattedTime();
clock.startClock();

toggleButton.addEventListener("click", () => {
  clock.toggleTimeFormat();
});
