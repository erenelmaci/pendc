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

const accordionContainer = document.getElementById("accordion")

accordionContainer.innerHTML = accordionMenu
  .map(
    (e) => `<div class="accordion-item">
<h2 class="accordion-header" id="heading${e.id}">
  <button
    class="accordion-button"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#collapse${e.id}"
    aria-expanded="true"
    aria-controls="collapse${e.id}"
  >
  ${e.title} <i class="fa-solid fa-arrow-down"></i>
  </button>
</h2>
<div class="accordion-hr"></div>
<div
  id="collapse${e.id}"
  class="accordion-collapse collapse show"
  aria-labelledby="heading${e.id}"
  data-bs-parent="#accordion"
>
  <div class="accordion-body">
    <i class="fa-solid fa-check"></i> ${e.contents[0]}
  </div>
  <div class="accordion-body">
    <i class="fa-solid fa-check"></i> ${e.contents[1]}
  </div>
  <div class="accordion-body">
    <i class="fa-solid fa-check"></i> ${e.contents[2]}
  </div>
</div>
</div>`
  )
  .join("")
