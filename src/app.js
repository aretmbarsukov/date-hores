const daysRef = document.querySelector('[data-value="days"]')
const hoursRef = document.querySelector('[data-value="hours"]')
const minsRef = document.querySelector('[data-value="mins"]')
const secRef = document.querySelector('[data-value="secs"]')
const p = document.querySelector(".output")

const targetDate = new Date("2026/1/1 00:00:00")

const intervalId = setInterval(() => {
  const currentDate = new Date()
  const time = targetDate - currentDate

  document.body.classList.add("timer-complete")


  if (time <= 0) {
    daysRef.textContent = "00"
    hoursRef.textContent = "00"
    minsRef.textContent = "00"
    secRef.textContent = "00"
    document.body.style.backgroundColor = "green"
    clearInterval(intervalId)
    p.textContent = "Heppy New Year"
    document.body.classList.add("timer-complete")
    return
  }
  const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, "0")
  const mins = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0")
  const hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0")
  const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, "0")
  
  daysRef.textContent = days
  hoursRef.textContent = hours
  minsRef.textContent = mins
  secRef.textContent = secs
}, 1000)