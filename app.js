const p1Btn = document.getElementById("+p1");
const p2Btn = document.getElementById("+p2");
const reset = document.getElementById("reset");
const p1Display = document.getElementById("p1-display")
const p2Display = document.getElementById("p2-display")
const selectVal = document.getElementById("num-input")


let countP1 = 0;
let countP2 = 0;
let winningScore = Number(selectVal.value);

selectVal.addEventListener("change", function () {
    winningScore = Number(selectVal.value);
    gameReset()
})

p1Btn.addEventListener("click", function () {
    if (countP1 !== winningScore) {
        console.log(countP1);
        countP1 += 1;
        console.log(countP1);
        p1Display.textContent = countP1;
        if (countP1 > countP2) {
            p1Display.style.color = "green";
            p2Display.style.color = "red";
        } else {
            p1Display.style.color = "red";
            p2Display.style.color = "green";
        }
    }

    if (countP1 === winningScore) {
        p1Btn.disabled = true;
        p2Btn.disabled = true;
        p2Btn.style.opacity = 0.5;
        p1Btn.style.opacity = 0.5;
    }
})

p2Btn.addEventListener("click", function () {
    if (countP2 !== winningScore) {
        countP2 += 1;
        p2Display.textContent = countP2;
        if (countP2 > countP1) {
            p2Display.style.color = "green";
            p1Display.style.color = "red";
        } else {
            p1Display.style.color = "green";
            p2Display.style.color = "red";
        }
    }

    if (countP2 === winningScore) {
        p2Btn.disabled = true;
        p1Btn.disabled = true;
        p2Btn.style.opacity = 0.5;
        p1Btn.style.opacity = 0.5;
    }

})
reset.addEventListener("click", gameReset);

function gameReset() {
    p2Btn.disabled = false;
    p1Btn.disabled = false;
    winningScore = Number(selectVal.value);
    countP1 = 0;
    countP2 = 0;
    p2Display.textContent = countP2;
    p1Display.textContent = countP1;
    p2Display.style.color = "black";
    p1Display.style.color = "black";
    p2Btn.style.opacity = null;
    p1Btn.style.opacity = null;

}







