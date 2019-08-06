var rat = document.getElementById("rat");
var cat = document.getElementById("cat");
var dog = document.getElementById("dog");
var wolf = document.getElementById("wolf");
var leopard = document.getElementById("leopard");
var tiger = document.getElementById("tiger");
var lion = document.getElementById("lion");
var elephant = document.getElementById("elephant");
var stop = document.getElementById("stop");

var pointsDisplay = document.getElementById("points");
var pointsPerClickDisplay = document.getElementById("pointsPerClick");
var autoClicksDisplay = document.getElementById("autoClicks");
var addPointPerClickButton = document.getElementById("addPointPerClick");
var addAutoClickButton = document.getElementById("addAutoClick");

var points = 0;
var pointsPerClick = 1;
var autoClicks = 0;
var addPointPerClickCost = 10;
var addAutoClickCost = 20;
var level = 1;

rat.addEventListener("click", addPoint);
cat.addEventListener("click", addPoint);
dog.addEventListener("click", addPoint);
wolf.addEventListener("click", addPoint);
leopard.addEventListener("click", addPoint);
tiger.addEventListener("click", addPoint);
lion.addEventListener("click", addPoint);
elephant.addEventListener("click", addPoint);

addPointPerClickButton.addEventListener("click", addPointPerClick);
addAutoClickButton.addEventListener("click", addAutoClick);

var autoClickId = setInterval(autoClick, 1000);

function addPoint() {
    points = points + pointsPerClick;
    pointsDisplay.innerHTML = "Points: " + points;

    changeAnimal();
}

function addPointPerClick() {
    if (points >= addPointPerClickCost) {
        points = points - addPointPerClickCost;
        pointsDisplay.innerHTML = "Points: " + points;

        pointsPerClick = pointsPerClick + 1;
        pointsPerClickDisplay.innerHTML = "Points per click: " + pointsPerClick;

        addPointPerClickCost = addPointPerClickCost * 2;
        addPointPerClickButton.innerHTML = "Add point per click: " + addPointPerClickCost + " points";
    }
}

function addAutoClick() {
    if (points >= addAutoClickCost) {
        points = points - addAutoClickCost;
        pointsDisplay.innerHTML = "Points: " + points;

        autoClicks = autoClicks + 1;
        autoClicksDisplay.innerHTML = "Auto clicks: " + autoClicks;

        addAutoClickCost = addAutoClickCost * 2;
        addAutoClickButton.innerHTML = "Add auto click: " + addAutoClickCost + " points";
    }
}

function autoClick() {
    points = points + autoClicks;
    pointsDisplay.innerHTML = "Points: " + points;

    changeAnimal();
}

function changeAnimal() {
    if (level == 1 && points >= 50) {
        level = 2;
        rat.style.display = "none";
        cat.style.display = "initial";
    }
    else if (level == 2 && points >= 100) {
        level = 3;
        cat.style.display = "none";
        dog.style.display = "initial";
    }
    else if (level == 3 && points >= 150) {
        level = 4;
        dog.style.display = "none";
        wolf.style.display = "initial";
    }
    else if (level == 4 && points >= 200) {
        level = 5;
        wolf.style.display = "none";
        leopard.style.display = "initial";
    }
    else if (level == 5 && points >= 250) {
        level = 6;
        leopard.style.display = "none";
        tiger.style.display = "initial";
    }
    else if (level == 6 && points >= 300) {
        level = 7;
        tiger.style.display = "none";
        lion.style.display = "initial";
    }
    else if (level == 7 && points >= 350) {
        level = 8;
        lion.style.display = "none";
        elephant.style.display = "initial";
    }
    else if (level == 8 && points >= 500) {
        level = 9;
        elephant.style.display = "none";
        stop.style.display = "initial";

        addPointPerClickButton.removeEventListener("click", addPointPerClick);
        addAutoClickButton.removeEventListener("click", addAutoClick);
        clearInterval(autoClickId);
    }
}
