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
    rocket.style.position = "relative";
    rocket.style.right = "0px";
    rocket.style.bottom = "-255px";

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
        rocket.style.right = "0px";
        rocket.style.bottom = "-255px";
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
            rocket.style.right = "0px";
            rocket.style.bottom = "-255px";
        }
    });

    // There must be a way to get the x,y coords for the parent element to use in the boolean logic, otherwise
    //on windows of different sizes, it won't work properly with hardcoded values for the movement limits

    upButton.addEventListener("click", function () {
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        if (parseInt(rocket.style.bottom) <= 0) {
        rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        }
    });

    downButton.addEventListener("click", function () {
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        if (parseInt(rocket.style.bottom) >= -250) {
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
        rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
        }
    });

    rightButton.addEventListener("click", function () {
        if (parseInt(rocket.style.right) >= -270) {
        rocket.style.right = parseInt(rocket.style.right) - 10 + "px";
        }
    });

    leftButton.addEventListener("click", function () {
        rocket.style.right = parseInt(rocket.style.right) + 10 + "px";
    });
        
})
