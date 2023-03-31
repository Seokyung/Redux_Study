const plus = document.getElementById("add");
const minus = document.getElementById("sub");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

const updateNumber = () => {
	number.innerText = count;
};

const handlePlus = () => {
	count++;
	updateNumber();
};

const handleMinus = () => {
	count--;
	updateNumber();
};

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
