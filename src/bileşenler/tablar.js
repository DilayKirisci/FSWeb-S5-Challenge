import axios from "axios";
const Tablar = (konu) => {
	let secilen = "";
	const topicsDiv = document.createElement("div");
	topicsDiv.classList.add("topics");
	konu.forEach((item) => {
		const tab = document.createElement("div");
		tab.classList.add("tab");
		tab.textContent = item;
		topicsDiv.appendChild(tab);
		tab.addEventListener("click", (e) => {
			console.log(secilen);
			return (secilen = e.target.textContent);
		});
	});
	return topicsDiv;
};

const tabEkleyici = (secici) => {
	// GÖREV 4
	// ---------------------
	// Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
	// Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
	// Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
	// Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
	//
	axios.get(`http://localhost:5001/api/konular`).then((response) => {
		console.log(response.data.konular);
		const elem = document.querySelector(secici);
		const tablar = Tablar(response.data.konular);
		elem.appendChild(tablar);
	});
};

export { Tablar, tabEkleyici };
