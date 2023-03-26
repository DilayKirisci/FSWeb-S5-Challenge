import axios from "axios";
const Card = (makale) => {
	const cardDiv = document.createElement("div");
	cardDiv.classList.add("card");

	const headDiv = document.createElement("div");
	headDiv.classList.add("headline");
	headDiv.textContent = makale.anabaslik;
	cardDiv.appendChild(headDiv);

	const authorDiv = document.createElement("div");
	authorDiv.classList.add("author");
	cardDiv.appendChild(authorDiv);

	const imgDiv = document.createElement("div");
	imgDiv.classList.add("img-container");
	authorDiv.appendChild(imgDiv);

	const authorImg = document.createElement("img");
	authorImg.src = makale.yazarFoto;
	imgDiv.appendChild(authorImg);

	const spanAuthor = document.createElement("span");
	spanAuthor.textContent = makale.yazarAdi;
	authorDiv.appendChild(spanAuthor);

	cardDiv.addEventListener("click", () => {
		console.log(makale.anabaslik);
	});

	return cardDiv;
};

const cardEkleyici = (secici) => {
	axios
		.get("http://localhost:5001/api/makaleler")
		.then(function (response) {
			console.log(response.data.makaleler);
			for (let i in response.data.makaleler) {
				response.data.makaleler[i].map((article) => {
					document.querySelector(secici).appendChild(Card(article));
				});
			}
		})
		.catch((error) => {
			console.log("başarısız", error);
		});
};
export { Card, cardEkleyici };
