document.addEventListener("DOMContentLoaded", function () {
  // API'den veri çekme
  fetch("http://localhost:3000/api/hat_sayi")
    .then((response) => {
      if (!response.ok) {
        throw new Error("API ile iletişim hatası: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      if (
        data &&
        data.message &&
        data.message.length > 0 &&
        data.message[0].hat
      ) {
        document.getElementById("hat_sayi_baslik").innerHTML =
          data.message[0].hat;
      } else {
        console.error("Hata: Beklenen veri bulunamadı.");
        document.getElementById("hat_sayi_baslik").innerHTML = "Veri alınamadı";
      }
    })
    .catch((error) => {
      console.error("Hata:", error.message);
      document.getElementById("hat_sayi_baslik").innerHTML = "Veri alınamadı";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // API'den veri çekme
  fetch("http://localhost:3000/api/sehir_nufus")
    .then((response) => {
      if (!response.ok) {
        throw new Error("API ile iletişim hatası: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      if (
        data &&
        data.message &&
        data.message.length > 0 &&
        data.message[0].nufus
      ) {
        document.getElementById("nufus_baslik").innerHTML =
          data.message[0].nufus / 1000000;
      } else {
        console.error("Hata: Beklenen veri bulunamadı.");
        document.getElementById("nufus_baslik").innerHTML = "Veri alınamadı";
      }
    })
    .catch((error) => {
      console.error("Hata:", error.message);
      document.getElementById("nufus_baslik").innerHTML = "Veri alınamadı";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // API'den veri çekme
  fetch("http://localhost:3000/api/top_kullanim")
    .then((response) => {
      if (!response.ok) {
        throw new Error("API ile iletişim hatası: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      if (
        data &&
        data.message &&
        data.message.length > 0 &&
        data.message[0].yolcu
      ) {
        document.getElementById("yolcu_baslik").innerHTML =
          data.message[0].yolcu / 1000000;
      } else {
        console.error("Hata: Beklenen veri bulunamadı.");
        document.getElementById("yolcu_baslik").innerHTML = "Veri alınamadı";
      }
    })
    .catch((error) => {
      console.error("Hata:", error.message);
      document.getElementById("yolcu_baslik").innerHTML = "Veri alınamadı";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // API'den veri çekme
  fetch("http://localhost:3000/api/baglantili")
    .then((response) => {
      if (!response.ok) {
        throw new Error("API ile iletişim hatası: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      if (
        data &&
        data.message &&
        data.message.length > 0 &&
        data.message[0].baglantili
      ) {
        document.getElementById("baglantili_baslik").innerHTML =
          data.message[0].baglantili;
      } else {
        console.error("Hata: Beklenen veri bulunamadı.");
        document.getElementById("baglantili_baslik").innerHTML =
          "Veri alınamadı";
      }
    })
    .catch((error) => {
      console.error("Hata:", error.message);
      document.getElementById("baglantili_baslik").innerHTML = "Veri alınamadı";
    });
});
