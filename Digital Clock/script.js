setInterval(() => {
    // get time indicator elements
    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')
    let ampm = document.getElementById('ampm')

    // get current time
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ap = h >= 12 ? 'PM' : 'AM'

    // Convert to 12 hour format
    if(h > 12) {
        h = h - 12
    }

    // add 0 before single digit
    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s

    // set time and label
    hours.innerHTML = h 
    minutes.innerHTML = m
    seconds.innerHTML = s
    ampm.innerHTML = ap
}, 1000)