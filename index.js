const API_URL = "https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_0IhR7Ys1nTONnSic6O7WcYRITV1AMIwKRXEfcgrG5yZWcRL6YNzz1WiSoTdtfmNO";
const btn = document.getElementById("clase1");

btn.addEventListener("click", evento);

async function evento() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img3 = document.getElementById("img3");
  img1.src = data[0].url;
  img2.src = data[1].url;
  img3.src = data[2].url;
}
