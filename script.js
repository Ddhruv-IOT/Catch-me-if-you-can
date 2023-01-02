var msg = new SpeechSynthesisUtterance();
msg.text = "Oh no you caught me..";

function tts() {
	msg.volume = 1;
	msg.rate = 1;
	window.speechSynthesis.speak(msg);
}

let random_text = ["U can't catch me", "Lol :) ", "Its Impossible", "stay away", ";)", "Go...", "Click...Click..Haha", "<img src='assets/e.png' height=40px width=40px></img>"]

var elem = document.getElementsByTagName("body")[0];

function openFullscreen() {
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.webkitRequestFullscreen) {
		/* Safari */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) {
		/* IE11 */
		elem.msRequestFullscreen();
	}
}


window.onload = function() {
	const wrp = document.querySelector(".warpper");
	const btn_txt = document.querySelector(".p1");
	let score = 0;

	var randomWidth = () => {
		document.getElementById('ck2').volume = 0.5;
		let x = 0;
		x = getRndInteger(30, 70);
		document.querySelector(".playground").style.width = x + "%";
		document.querySelector(".playground").setAttribute("data-value", x + "%");
		let randomNumber = Math.floor(Math.random() * random_text.length);
		btn_txt.innerHTML = random_text[randomNumber];
		document.getElementById('score').innerHTML = score;
		document.getElementById('topscore').innerHTML = localStorage.getItem("topscore");
		document.getElementById('ck2').play();

		document.getElementById("try").onmouseover = function() {
			if (document.getElementById("p1").innerHTML == "Lol :) ") {

				document.getElementById("ck").play();
			}

			if (document.getElementById("p1").innerHTML == "U can't catch me") {

				document.getElementById("ck1").play();
			}

			if (document.getElementById("p1").innerHTML == "Its Impossible") {

				document.getElementById("ck").play();
			}
			if (document.getElementById("p1").innerHTML == "stay away") {

				document.getElementById("ck1").play();
			}
		}
	};

	var getRndInteger = (min, max) => {
		return Math.floor(Math.random() * (max - min)) + min;
	};

	randomWidth();

	var interval = setInterval(() => {
		randomWidth();
	}, 2000);

	let stopbtn = document.querySelector(".object-wrapper");
	stopbtn.addEventListener("mouseover", function() {
		stopbtn.style.transform = `translate(${getRndInteger(-10, 99)}%, ${getRndInteger(-10, 99)}%)`
		wrp.style.background = `linear-gradient(${getRandomColor()}, ${getRandomColor()})`;
		this.style.bottom = "auto";
		score = score + 1;
	})

	document.querySelector(".p1").addEventListener("click", function() {
		document.getElementById('ck2').pause()
		tts();
		alert(`You won with a Score of : ${score} points`)
		console.log(localStorage.getItem("topscore"))
		if (localStorage.getItem("topscore") == null) {
			localStorage.setItem("topscore", score)
		}
		if (localStorage.getItem("topscore") > score) {
			localStorage.setItem("topscore", score)
		}
		clearInterval(interval);
		wrp.style.background = "black";
		stopbtn.style.display = "none";
		document.getElementById("pg1").innerHTML = "<b align=\"center\">Press Ctrl + R to restart.<b>"
	});
}

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}