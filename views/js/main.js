(function ($) {
  // USE STRICT
  "use strict";

  fetch("http://localhost:3000/api/box_chart")
    .then((response) => response.json())
    .then((sonuc) => {
      var ctx = document.getElementById("widgetChart1").getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: sonuc,
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            },
          },
          responsive: true,
          scales: {
            xAxes: [
              {
                gridLines: {
                  color: "transparent",
                  zeroLineColor: "transparent",
                },
                ticks: {
                  fontSize: 2,
                  fontColor: "transparent",
                },
              },
            ],
            yAxes: [
              {
                display: false,
                ticks: {
                  display: false,
                },
              },
            ],
          },
          title: {
            display: false,
          },
          elements: {
            line: {
              borderWidth: 0,
            },
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4,
            },
          },
        },
      });
    })
    .catch((error) => console.error("Fetch Hatası:", error));

  fetch("http://localhost:3000/api/box_chart2")
    .then((response) => response.json())
    .then((sonuc) => {
      var ctx = document.getElementById("widgetChart2").getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: sonuc,
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          responsive: true,
          tooltips: {
            mode: "index",
            titleFontSize: 12,
            titleFontColor: "#000",
            bodyFontColor: "#000",
            backgroundColor: "#fff",
            titleFontFamily: "Montserrat",
            bodyFontFamily: "Montserrat",
            cornerRadius: 3,
            intersect: false,
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  color: "transparent",
                  zeroLineColor: "transparent",
                },
                ticks: {
                  fontSize: 2,
                  fontColor: "transparent",
                },
              },
            ],
            yAxes: [
              {
                display: false,
                ticks: {
                  display: false,
                },
              },
            ],
          },
          title: {
            display: false,
          },
          elements: {
            line: {
              tension: 0.00001,
              borderWidth: 1,
            },
            point: {
              radius: 1,
              hitRadius: 10,
              hoverRadius: 4,
            },
          },
        },
      });
    })
    .catch((error) => console.error("Fetch Hatası:", error));

  fetch("http://localhost:3000/api/box_chart3")
    .then((response) => response.json())
    .then((sonuc) => {
      var ctx = document.getElementById("widgetChart3").getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: sonuc,
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          responsive: true,
          tooltips: {
            mode: "index",
            titleFontSize: 12,
            titleFontColor: "#000",
            bodyFontColor: "#000",
            backgroundColor: "#fff",
            titleFontFamily: "Montserrat",
            bodyFontFamily: "Montserrat",
            cornerRadius: 3,
            intersect: false,
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  color: "transparent",
                  zeroLineColor: "transparent",
                },
                ticks: {
                  fontSize: 2,
                  fontColor: "transparent",
                },
              },
            ],
            yAxes: [
              {
                display: false,
                ticks: {
                  display: false,
                },
              },
            ],
          },
          title: {
            display: false,
          },
          elements: {
            line: {
              borderWidth: 1,
            },
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4,
            },
          },
        },
      });
    })
    .catch((error) => console.error("Fetch Hatası:", error));

  fetch("http://localhost:3000/api/box_chart4")
    .then((response) => response.json())
    .then((sonuc) => {
      var ctx = document.getElementById("widgetChart4").getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: sonuc,
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                display: false,
                categoryPercentage: 1,
                barPercentage: 0.65,
              },
            ],
            yAxes: [
              {
                display: false,
              },
            ],
          },
        },
      });
    })
    .catch((error) => console.error("Fetch Hatası:", error));

  fetch("http://localhost:3000/api/chart1")
    .then((response) => response.json())
    .then((sonuc) => {
      var ctx = document.getElementById("myChart1").getContext("2d");
      new Chart(ctx, {
        type: "line",
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

  fetch("http://localhost:3000/api/chart2")
    .then((response) => response.json())
    .then((sonuc) => {
      var ctx = document.getElementById("myChart2").getContext("2d");
      new Chart(ctx, {
        type: "polarArea",
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

  fetch("http://localhost:3000/api/chart3")
    .then((response) => response.json())
    .then((sonuc) => {
      var ctx = document.getElementById("myChart3").getContext("2d");
      new Chart(ctx, {
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

  fetch("http://localhost:3000/api/chart4")
    .then((response) => response.json())
    .then((sonuc) => {
      var ctx = document.getElementById("myChart4").getContext("2d");
      new Chart(ctx, {
        type: "bar",
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
                  max: 21,
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

  fetch("http://localhost:3000/api/chart5")
    .then((response) => response.json())
    .then((sonuc) => {
      var ctx = document.getElementById("myChart5").getContext("2d");
      new Chart(ctx, {
        type: "bar",
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
                  stepSize: 0,
                  max: 0,
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

  fetch("http://localhost:3000/api/chart6")
    .then((response) => response.json())
    .then((sonuc) => {
      var ctx = document.getElementById("myChart6").getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
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

  fetch("http://localhost:3000/api/chart7")
    .then((response) => response.json())
    .then((sonuc) => {
      var ctx = document.getElementById("calc_chart").getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
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

  try {
    // single bar chart
    var ctx = document.getElementById("singelBarChart");
    if (ctx) {
      ctx.height = 150;
      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Sun", "Mon", "Tu", "Wed", "Th", "Fri", "Sat"],
          datasets: [
            {
              label: "My First dataset",
              data: [40, 55, 75, 81, 56, 55, 40],
              borderColor: "rgba(0, 123, 255, 0.9)",
              borderWidth: "0",
              backgroundColor: "rgba(0, 123, 255, 0.5)",
            },
          ],
        },
        options: {
          legend: {
            position: "top",
            labels: {
              fontFamily: "Poppins",
            },
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontFamily: "Poppins",
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontFamily: "Poppins",
                },
              },
            ],
          },
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
})(jQuery);

(function ($) {
  // USE STRICT
  "use strict";
  var navbars = ["header", "aside"];
  var hrefSelector =
    'a:not([target="_blank"]):not([href^="#"]):not([class^="chosen-single"])';
  var linkElement = navbars
    .map((element) => element + " " + hrefSelector)
    .join(", ");
  $(".animsition").animsition({
    inClass: "fade-in",
    outClass: "fade-out",
    inDuration: 900,
    outDuration: 900,
    linkElement: linkElement,
    loading: true,
    loadingParentElement: "html",
    loadingClass: "page-loader",
    loadingInner: '<div class="page-loader__spin"></div>',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ["animation-duration", "-webkit-animation-duration"],
    overlay: false,
    overlayClass: "animsition-overlay-slide",
    overlayParentElement: "html",
    transition: function (url) {
      window.location.href = url;
    },
  });
})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Map
  try {
    var vmap = $("#vmap");
    if (vmap[0]) {
      vmap.vectorMap({
        map: "world_en",
        backgroundColor: null,
        color: "#ffffff",
        hoverOpacity: 0.7,
        selectedColor: "#1de9b6",
        enableZoom: true,
        showTooltip: true,
        values: sample_data,
        scaleColors: ["#1de9b6", "#03a9f5"],
        normalizeFunction: "polynomial",
      });
    }
  } catch (error) {
    console.log(error);
  }

  // Europe Map
  try {
    var vmap1 = $("#vmap1");
    if (vmap1[0]) {
      vmap1.vectorMap({
        map: "europe_en",
        color: "#007BFF",
        borderColor: "#fff",
        backgroundColor: "#fff",
        enableZoom: true,
        showTooltip: true,
      });
    }
  } catch (error) {
    console.log(error);
  }

  // USA Map
  try {
    var vmap2 = $("#vmap2");

    if (vmap2[0]) {
      vmap2.vectorMap({
        map: "usa_en",
        color: "#007BFF",
        borderColor: "#fff",
        backgroundColor: "#fff",
        enableZoom: true,
        showTooltip: true,
        selectedColor: null,
        hoverColor: null,
        colors: {
          mo: "#001BFF",
          fl: "#001BFF",
          or: "#001BFF",
        },
        onRegionClick: function (event, code, region) {
          event.preventDefault();
        },
      });
    }
  } catch (error) {
    console.log(error);
  }

  // Germany Map
  try {
    var vmap3 = $("#vmap3");
    if (vmap3[0]) {
      vmap3.vectorMap({
        map: "germany_en",
        color: "#007BFF",
        borderColor: "#fff",
        backgroundColor: "#fff",
        onRegionClick: function (element, code, region) {
          var message =
            'You clicked "' +
            region +
            '" which has the code: ' +
            code.toUpperCase();

          alert(message);
        },
      });
    }
  } catch (error) {
    console.log(error);
  }

  // France Map
  try {
    var vmap4 = $("#vmap4");
    if (vmap4[0]) {
      vmap4.vectorMap({
        map: "france_fr",
        color: "#007BFF",
        borderColor: "#fff",
        backgroundColor: "#fff",
        enableZoom: true,
        showTooltip: true,
      });
    }
  } catch (error) {
    console.log(error);
  }

  // Russia Map
  try {
    var vmap5 = $("#vmap5");
    if (vmap5[0]) {
      vmap5.vectorMap({
        map: "russia_en",
        color: "#007BFF",
        borderColor: "#fff",
        backgroundColor: "#fff",
        hoverOpacity: 0.7,
        selectedColor: "#999999",
        enableZoom: true,
        showTooltip: true,
        scaleColors: ["#C8EEFF", "#006491"],
        normalizeFunction: "polynomial",
      });
    }
  } catch (error) {
    console.log(error);
  }

  // Brazil Map
  try {
    var vmap6 = $("#vmap6");
    if (vmap6[0]) {
      vmap6.vectorMap({
        map: "brazil_br",
        color: "#007BFF",
        borderColor: "#fff",
        backgroundColor: "#fff",
        onRegionClick: function (element, code, region) {
          var message =
            'You clicked "' +
            region +
            '" which has the code: ' +
            code.toUpperCase();
          alert(message);
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
})(jQuery);
(function ($) {
  // Use Strict
  "use strict";
  try {
    var progressbarSimple = $(".js-progressbar-simple");
    progressbarSimple.each(function () {
      var that = $(this);
      var executed = false;
      $(window).on("load", function () {
        that.waypoint(
          function () {
            if (!executed) {
              executed = true;
              /*progress bar*/
              that.progressbar({
                update: function (current_percentage, $this) {
                  $this.find(".js-value").html(current_percentage + "%");
                },
              });
            }
          },
          {
            offset: "bottom-in-view",
          }
        );
      });
    });
  } catch (err) {
    console.log(err);
  }
})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Scroll Bar
  try {
    var jscr1 = $(".js-scrollbar1");
    if (jscr1[0]) {
      const ps1 = new PerfectScrollbar(".js-scrollbar1");
    }

    var jscr2 = $(".js-scrollbar2");
    if (jscr2[0]) {
      const ps2 = new PerfectScrollbar(".js-scrollbar2");
    }
  } catch (error) {
    console.log(error);
  }
})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Select 2
  try {
    $(".js-select2").each(function () {
      $(this).select2({
        minimumResultsForSearch: 20,
        dropdownParent: $(this).next(".dropDownSelect2"),
      });
    });
  } catch (error) {
    console.log(error);
  }
})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Dropdown
  try {
    var menu = $(".js-item-menu");
    var sub_menu_is_showed = -1;

    for (var i = 0; i < menu.length; i++) {
      $(menu[i]).on("click", function (e) {
        e.preventDefault();
        $(".js-right-sidebar").removeClass("show-sidebar");
        if (jQuery.inArray(this, menu) == sub_menu_is_showed) {
          $(this).toggleClass("show-dropdown");
          sub_menu_is_showed = -1;
        } else {
          for (var i = 0; i < menu.length; i++) {
            $(menu[i]).removeClass("show-dropdown");
          }
          $(this).toggleClass("show-dropdown");
          sub_menu_is_showed = jQuery.inArray(this, menu);
        }
      });
    }
    $(".js-item-menu, .js-dropdown").click(function (event) {
      event.stopPropagation();
    });

    $("body,html").on("click", function () {
      for (var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("show-dropdown");
      }
      sub_menu_is_showed = -1;
    });
  } catch (error) {
    console.log(error);
  }

  var wW = $(window).width();
  // Right Sidebar
  var right_sidebar = $(".js-right-sidebar");
  var sidebar_btn = $(".js-sidebar-btn");

  sidebar_btn.on("click", function (e) {
    e.preventDefault();
    for (var i = 0; i < menu.length; i++) {
      menu[i].classList.remove("show-dropdown");
    }
    sub_menu_is_showed = -1;
    right_sidebar.toggleClass("show-sidebar");
  });

  $(".js-right-sidebar, .js-sidebar-btn").click(function (event) {
    event.stopPropagation();
  });

  $("body,html").on("click", function () {
    right_sidebar.removeClass("show-sidebar");
  });

  // Sublist Sidebar
  try {
    var arrow = $(".js-arrow");
    arrow.each(function () {
      var that = $(this);
      that.on("click", function (e) {
        e.preventDefault();
        that.find(".arrow").toggleClass("up");
        that.toggleClass("open");
        that.parent().find(".js-sub-list").slideToggle("250");
      });
    });
  } catch (error) {
    console.log(error);
  }

  try {
    // Hamburger Menu
    $(".hamburger").on("click", function () {
      $(this).toggleClass("is-active");
      $(".navbar-mobile").slideToggle("500");
    });
    $(".navbar-mobile__list li.has-dropdown > a").on("click", function () {
      var dropdown = $(this).siblings("ul.navbar-mobile__dropdown");
      $(this).toggleClass("active");
      $(dropdown).slideToggle("500");
      return false;
    });
  } catch (error) {
    console.log(error);
  }
})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Load more
  try {
    var list_load = $(".js-list-load");
    if (list_load[0]) {
      list_load.each(function () {
        var that = $(this);
        that.find(".js-load-item").hide();
        var load_btn = that.find(".js-load-btn");
        load_btn.on("click", function (e) {
          $(this)
            .text("Loading...")
            .delay(1500)
            .queue(function (next) {
              $(this).hide();
              that.find(".js-load-item").fadeToggle("slow", "swing");
            });
          e.preventDefault();
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  try {
    $('[data-toggle="tooltip"]').tooltip();
  } catch (error) {
    console.log(error);
  }

  // Chatbox
  try {
    var inbox_wrap = $(".js-inbox");
    var message = $(".au-message__item");
    message.each(function () {
      var that = $(this);

      that.on("click", function () {
        $(this).parent().parent().parent().toggleClass("show-chat-box");
      });
    });
  } catch (error) {
    console.log(error);
  }
})(jQuery);
