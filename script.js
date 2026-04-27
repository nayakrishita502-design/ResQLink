// function sendSOS() {
//     document.getElementById("status").innerText =
//     "🚨 Alert Sent! Location shared. Help is on the way.";
// }

// function sendSOS() {
//     document.getElementById("status").innerHTML =
//     "📍 Location: 17.3850° N, 78.4867° E <br> 🚨 Alert Sent! <br> 🚑 Notifying responders...";
// }

// function sendSOS() {
//     document.getElementById("status").innerHTML =
//     "📍 Location: 17.3850° N, 78.4867° E <br><br> 🚨 Alert Sent! <br> 🚑 Notifying nearby responders...";
// }

// function goToMap() {
//     window.location.href = "map.html";
// }

// function sendSOS() {
//     document.getElementById("alertSound").play();

//     const status = document.getElementById("status");
//     status.innerHTML = "⏳ Sending alert...";

//     setTimeout(() => {
//     status.innerHTML =
//     "📍 Location: 17.3850° N, 78.4867° E <br><br> 🚨 Alert Sent! <br> 🚑 Notifying nearby responders...";
//     }, 1500);
// }



function goTo(screenId) {
    let screens = document.querySelectorAll('.screen');

    screens.forEach(screen => {
    screen.classList.remove('active');
    });

    document.getElementById(screenId).classList.add('active');
}