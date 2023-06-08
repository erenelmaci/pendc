const accordionMenu = [
  {
    id: 1,
    title: "Cloud Sunucu",
    contents: [
      "Tier 3 standartlarında dedicated sunucu barındırma hizmetleri",
      "Temiz enerji kaynakları ile uygun elektrik maliyeti",
      "7/24 Teknik destek ile fiziksel sunucu hizmetleri",
    ],
  },
  {
    id: 2,
    title: "Dedicated Sunucu",
    contents: [
      "Tier 3 standartlarında dedicated sunucu barındırma hizmetleri",
      "Temiz enerji kaynakları ile uygun elektrik maliyeti",
      "7/24 Teknik destek ile fiziksel sunucu hizmetleri",
    ],
  },
  {
    id: 3,
    title: "Co-Location",
    contents: [
      "Tier 3 standartlarında dedicated sunucu barındırma hizmetleri",
      "Temiz enerji kaynakları ile uygun elektrik maliyeti",
      "7/24 Teknik destek ile fiziksel sunucu hizmetleri",
    ],
  },
  {
    id: 4,
    title: "Yedekleme",
    contents: [
      "Tier 3 standartlarında dedicated sunucu barındırma hizmetleri",
      "Temiz enerji kaynakları ile uygun elektrik maliyeti",
      "7/24 Teknik destek ile fiziksel sunucu hizmetleri",
    ],
  },
  {
    id: 5,
    title: "Kabin Kiralama",
    contents: [
      "Tier 3 standartlarında dedicated sunucu barındırma hizmetleri",
      "Temiz enerji kaynakları ile uygun elektrik maliyeti",
      "7/24 Teknik destek ile fiziksel sunucu hizmetleri",
    ],
  },
  {
    id: 6,
    title: "Kurumsal Hizmetler",
    contents: [
      "Tier 3 standartlarında dedicated sunucu barındırma hizmetleri",
      "Temiz enerji kaynakları ile uygun elektrik maliyeti",
      "7/24 Teknik destek ile fiziksel sunucu hizmetleri",
    ],
  },
  {
    id: 7,
    title: "Felaket Kurtarma Merkezi",
    contents: [
      "Tier 3 standartlarında dedicated sunucu barındırma hizmetleri",
      "Temiz enerji kaynakları ile uygun elektrik maliyeti",
      "7/24 Teknik destek ile fiziksel sunucu hizmetleri",
    ],
  },
]

const servicesCardData = [
  {
    id: 1,
    icon: "fa-solid fa-user-large",
    title: "7/24 Teknik Destek",
  },
  {
    id: 2,
    icon: "fa-solid fa-cloud",
    title: "%99.9 Uptime",
  },
  {
    id: 3,
    icon: "fa-solid fa-eye",
    title: "Servis İzleme",
  },
  {
    id: 4,
    icon: "fa-solid fa-shield-halved",
    title: "Güvenlik",
  },
  {
    id: 5,
    icon: "fa-solid fa-server",
    title: "Düzenli Yedekleme",
  },
  {
    id: 6,
    icon: "fa-solid fa-fire-extinguisher",
    title: "Yangın Önleme",
  },
]

const accordionContainer = document.getElementById("accordion")

accordionContainer.innerHTML = accordionMenu
  .map(
    (e) => `<div id="accordion">
    <div class="accordion-item">
      <div class="accordion-header" id="heading${e.id}">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse${e.id}"
          aria-expanded="false"
          aria-controls="collapse${e.id}"
        >
        ${e.title}
        </button>
        <span
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse${e.id}"
          aria-expanded="false"
          aria-controls="collapse${e.id}"
        >
          <i class="fa-solid fa-arrow-down"></i>
        </span>
      </div>

      <div
        id="collapse${e.id}"
        class="accordion-collapse collapse"
        aria-labelledby="heading${e.id}"
        data-bs-parent="#accordion"
      >
        <div class="accordion-body">
          <i class="fa-solid fa-check"></i>
          <p>${e.contents[0]}</p>
        </div>
        <div class="accordion-body">
          <i class="fa-solid fa-check"></i>
          <p>${e.contents[1]}</p>
        </div>
        <div class="accordion-body">
          <i class="fa-solid fa-check"></i>
          <p>${e.contents[2]}</p>
        </div>
      </div>
    </div>
  </div>`
  )
  .join("")

const servicesCard = document.getElementById("services-card")
servicesCard.innerHTML = servicesCardData
  .map(
    (e) =>
      `<div class="services-cards">
       <i class="${e.icon}"></i>
        <p>${e.title}</p>
      </div>`
  )
  .join("")
