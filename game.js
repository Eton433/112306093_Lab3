const answer = Math.floor(Math.random() * 100) + 1;
let attempts = 7;
let min = 1;
let max = 100;

while (attempts > 0) {
    let guess = window.prompt(`請猜一個數字 (${min}~${max})，剩餘次數: ${attempts}`);
    
    if (!guess || isNaN(guess)) {
        alert("請輸入有效的數字！");
        continue;
    }

    guess = Number(guess);

    if (guess < min || guess > max) {
        alert(`請輸入範圍內的數字 (${min}~${max})！`);
        continue;
    }

    attempts--;

    if (guess === answer) {
        alert("恭喜！你答對了！");
        document.getElementById("result").innerHTML = `<img src="correct.jpg" alt="Correct">`;
        break;
    } else if (guess < answer) {
        alert("猜小了！");
        min = guess + 1;
    } else {
        alert("猜大了！");
        max = guess - 1;
    }

    if (attempts === 0) {
        alert(`遊戲結束！正確答案是 ${answer}`);
        document.getElementById("result").innerHTML = `<img src="wrong.jpg" alt="Wrong">`;
    }
}
