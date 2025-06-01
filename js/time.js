/*
 * Author: Karolína Virágová 
 * File: time.js
 * Brief: Time
 */

window.addEventListener('DOMContentLoaded', function () {
  function aktualizujCasADatum() {
      const ted = new Date();

      // Time
      let hour = ted.getHours();
      let minute = ted.getMinutes();
      let sec = ted.getSeconds();

      hour = hour < 10 ? "0" + hour : hour;
      minute = minute < 10 ? "0" + minute : minute;
      sec = sec < 10 ? "0" + sec : sec;

      const time = hour + ":" + minute + ":" + sec;
      document.getElementById('clock').textContent = time;

      // Date
      let day = ted.getDate();
      let moth = ted.getMonth() + 1; // Moth
      let year = ted.getFullYear();

      day = day < 10 ? "0" + day : day;
      moth = moth < 10 ? "0" + moth : moth;

      const date = day + "." + moth + "." + year;
      document.getElementById('date').textContent = date;
  }

  aktualizujCasADatum();
  setInterval(aktualizujCasADatum, 1000);
});
