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
        var nufus = data.message[0].nufus;

        var new_nufus = nufus.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        document.getElementById("nufus_baslik").innerHTML = new_nufus;
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
        var yolcu = data.message[0].yolcu;
        var new_yolcu = yolcu.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById("yolcu_baslik").innerHTML = new_yolcu;
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

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("calc_btn").addEventListener("click", function () {
    // Input alanından yüzde değerini alalım
    var yuzde = document.getElementById("calc_input").value;
    console.log(yuzde);
    // Girilen değerin geçerli bir sayı olup olmadığını kontrol edelim
    if (!isNaN(yuzde)) {
      // Fetch isteği yaparak yeni verileri alalım
      fetch("http://localhost:3000/api/chart7")
        .then((response) => response.json())
        .then((sonuc) => {
          // Verileri yüzdeye göre arttıralım
          sonuc.datasets[0].data = sonuc.datasets[0].data.map(
            (value) => value * (1 + yuzde / 100)
          );

          sonuc.datasets[1].data = sonuc.datasets[1].data.map((value) =>
            Math.round(value * (1 + yuzde / 1000))
          );

          // Grafiği alalım
          var ctx = document.getElementById("calc_chart").getContext("2d");

          // Mevcut grafiği temizleyelim
          if (window.myChart) {
            window.myChart.destroy();
          }

          // Yeni verileri ekleyerek veya güncelleyerek grafiği oluşturalım
          window.myChart = new Chart(ctx, {
            type: "radar",
            data: sonuc,
            options: {
              maintainAspectRatio: false,
              legend: {
                display: false,
              },
              responsive: true,
              scales: {
                xAxes: [
                  {
                    gridLines: {
                      drawOnChartArea: true,
                      color: "#f2f2f2",
                    },
                    ticks: {
                      fontFamily: "Poppins",
                      fontSize: 12,
                    },
                  },
                ],
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      maxTicksLimit: 5,
                      stepSize: 50,
                      max: 50,
                      fontFamily: "Poppins",
                      fontSize: 12,
                    },
                    gridLines: {
                      display: true,
                      color: "#f2f2f2",
                    },
                  },
                ],
              },
              elements: {
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            },
          });
        })
        .catch((error) => console.error("Fetch Hatası:", error));
    } else {
      alert("Lütfen geçerli bir yüzde değeri girin");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // API endpoint'i
  var apiUrl = "http://localhost:3000/api/ilceler";

  // İlçelerin bulunduğu select elementi
  var ilceSelect = document.getElementById("ilceId");

  // API'den veri çekme işlemi
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // İlçe verilerini select elementine ekle
      data.message.forEach(function (ilce) {
        var option = document.createElement("option");
        option.text = ilce.ilce;
        option.value = ilce.ilce;
        ilceSelect.add(option);
      });
    })
    .catch((error) => console.error("Veri çekme hatası:", error));
});
