// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {
    const takeoffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    const rocket = document.getElementById("rocket");
    const background = document.getElementById("shuttleBackground");
    const rect = background.getBoundingClientRect();
    rocket.style.position = "absolute";
    rocket.style.right = "43%";
    rocket.style.bottom = "-3%";

    takeoffButton.addEventListener("click", function () {
        let ready = confirm("Confirm that the shuttle is ready for takeoff.");
        if (ready) {
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = "Shuttle in flight.";
            let backgroundPicture = document.querySelector("#shuttleBackground");
            backgroundPicture.style.backgroundColor = "blue";
            let shuttleHeight = document.getElementById("spaceShuttleHeight");
            shuttleHeight.innerHTML = 10000;
        }
    });

    landButton.addEventListener("click", function () {
        alert("The shuttle is landing. Landing gear engaged.");
        let flightStatus = document.getElementById("flightStatus");
        flightStatus.innerHTML = "The shuttle has landed.";
        let backgroundPicture = document.querySelector("#shuttleBackground");
        backgroundPicture.style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
        rocket.style.right = "43%";
        rocket.style.bottom = "-3%";
    });

    abortButton.addEventListener("click", function () {
        let abort = confirm("Confirm that you want to abort the mission.");
        if (abort) {
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = "Mission aborted.";
            let backgroundPicture = document.querySelector("#shuttleBackground");
            backgroundPicture.style.backgroundColor = "green";
            let shuttleHeight = document.getElementById("spaceShuttleHeight");
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
            rocket.style.right = "43%";
            rocket.style.bottom = "-3%";
        }
    });

    upButton.addEventListener("click", function () {
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        if (parseInt(rocket.style.bottom) <= 85) {
        rocket.style.bottom = parseInt(rocket.style.bottom) + 2 + "%";
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        }
    });

    downButton.addEventListener("click", function () {
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        if (parseInt(rocket.style.bottom) >= 0) {
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
        rocket.style.bottom = parseInt(rocket.style.bottom) - 2 + "%";
        }
    });

    rightButton.addEventListener("click", function () {
        if (parseInt(rocket.style.right) >= -3) {
        rocket.style.right = parseInt(rocket.style.right) -2 + "%" ;
        }
    });

    leftButton.addEventListener("click", function () {
        if (parseInt(rocket.style.right) <= 90) {
        rocket.style.right = parseInt(rocket.style.right) + 2 + "%";
        }
    });
        
})
