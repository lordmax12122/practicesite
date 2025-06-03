// const productLine = document.querySelector(".products-line")

// const productButton = document.querySelectorAll(".products-button")
// const productItem = document.querySelectorAll(".products-item")
// const laptops = document.querySelectorAll(".laptop")
// const pcs = document.querySelectorAll(".pc")
// const accessories = document.querySelectorAll(".accessory")

// productButton[0].addEventListener("click", () => {
//     laptops.forEach(laptop => laptop.classList.remove("hidden"))
//     accessories.forEach(accessory => accessory.classList.remove("hidden"))
//     pcs.forEach(pc => pc.classList.remove("hidden"))
//     productButton.forEach(btn => btn.classList.remove("products-line"))
//     productButton[0].classList.add("products-line")
// })

// productButton[1].addEventListener("click", () => {
//     laptops.forEach(laptop => laptop.classList.add("hidden"))
//     accessories.forEach(accessory => accessory.classList.add("hidden"))
//     pcs.forEach(pc => pc.classList.remove("hidden"))
//     productButton.forEach(btn => btn.classList.remove("products-line"))
//     productButton[1].classList.add("products-line")
// })

// productButton[2].addEventListener("click", () => {
//     laptops.forEach(laptop => laptop.classList.remove("hidden"))
//     accessories.forEach(accessory => accessory.classList.add("hidden"))
//     pcs.forEach(pc => pc.classList.add("hidden"))
//     productButton.forEach(btn => btn.classList.remove("products-line"))
//     productButton[2].classList.add("products-line")
// })

// productButton[3].addEventListener("click", () => {
//     laptops.forEach(laptop => laptop.classList.add("hidden"))
//     accessories.forEach(accessory => accessory.classList.remove("hidden"))
//     pcs.forEach(pc => pc.classList.add("hidden"))
//     productButton.forEach(btn => btn.classList.remove("products-line"))
//     productButton[3].classList.add("products-line")
// })

// document.addEventListener("DOMContentLoaded", function () {
//     const searchInput = document.querySelector(".products-search");
//     const allProducts = Array.from(document.querySelectorAll(".products-product"));
//     const paginationContainer = document.querySelector(".pagination");
//     const itemsPerPage = 9;
//     let currentPage = 1;
//     let visibleProducts = [];

//     function getVisibleProducts() {
//         console.log("🔴 Visible products:", visibleProducts);
//     return allProducts.filter(p => 
//         !p.classList.contains("hidden") && 
//         p.style.display !== "none"
//     );
// }

//     function showPage(page) {
//         const visibleProducts = getVisibleProducts();
//         const start = (page - 1) * itemsPerPage;
//         const end = start + itemsPerPage;

//         visibleProducts.forEach((product, index) => {
//             product.style.display = (index >= start && index < end) ? "" : "none";
//         });

//         currentPage = page;
//         renderPagination();
//     }

//     function renderPagination() {
//         console.log("🔵 renderPagination викликана");
//         const visibleProducts = getVisibleProducts();
//         const pageCount = Math.ceil(visibleProducts.length / itemsPerPage);
//         paginationContainer.innerHTML = "";

//         if (pageCount <= 1) return;

//         for (let i = 1; i <= pageCount; i++) {
//             const btn = document.createElement("button");
//             btn.textContent = i;
//             btn.classList.add("page-button");
//             if (i === currentPage) btn.classList.add("active");
//             btn.addEventListener("click", () => showPage(i));
//             paginationContainer.appendChild(btn);
//         }
//     }

//     searchInput.addEventListener("input", function () {
//         const query = searchInput.value.toLowerCase();

//         allProducts.forEach(product => {
//             const title = product.querySelector(".products-info").textContent.toLowerCase();
//             const desc = product.querySelector(".products-desc").textContent.toLowerCase();

//             if (title.includes(query) || desc.includes(query)) {
//                 product.style.display = "";
//             } else {
//                 product.style.display = "none";
//             }
//         });

//         showPage(1);
//     });

//     // Після зміни фільтрації — оновлюємо пагінацію
//     function updatePaginationAfterFilter() {
//         allProducts.forEach(p => p.style.display = ""); // тимчасово всі показати
//         showPage(1);
//     }

//     // Прив'язати до твоїх фільтр-кнопок
//     productButton.forEach(btn => {
//         btn.addEventListener("click", () => {
//             setTimeout(updatePaginationAfterFilter, 0);
//         });
//     });

//     // Початковий запуск
//     showPage(1);
// });


document.addEventListener("DOMContentLoaded", function () {
    const productButtons = document.querySelectorAll(".products-button");
    const allProducts = Array.from(document.querySelectorAll(".products-product"));
    const searchInput = document.querySelector(".products-search");
    const paginationContainer = document.querySelector(".pagination");
    const itemsPerPage = 9;
    let currentPage = 1;

    document.querySelectorAll('.second-header-text').forEach(link => {
        link.addEventListener('click', (e) => {
            const category = link.getAttribute('data-category');
            if (category) {
                setTimeout(() => {
                    const indexMap = {
                        'pc': 1,
                        'laptop': 2,
                        'accessory': 3,
                        'server': 4
                    };
                    const button = document.querySelectorAll(".products-button")[indexMap[category]];
                    if (button) button.click();
                }, 100);
            }
        });
    });

    productButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            productButtons.forEach(b => b.classList.remove("products-line"));
            btn.classList.add("products-line");

            allProducts.forEach(product => {
                const category = product.querySelector(".products-info")?.textContent.toLowerCase().trim();

                let show = false;
                if (index === 0) {
                    show = true; // Всі товари
                } else if (index === 1 && category === "pc") {
                    show = true;
                } else if (index === 2 && category === "laptop") {
                    show = true;
                } else if (index === 3 && category === "accessory") {
                    show = true;
                } else if (index === 4 && category === "server") {
                    show = true;
                }

                product.classList.toggle("hidden", !show);
            });


            showPage(1);
        });
    });
    

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();

        allProducts.forEach(product => {
            const title = product.querySelector(".products-name")?.textContent.toLowerCase() || "";
            const desc = product.querySelector(".products-desc")?.textContent.toLowerCase() || "";
            const match = title.includes(query) || desc.includes(query);

            if (match) {
                product.classList.remove("search-hidden");
            } else {
                product.classList.add("search-hidden");
            }
        });

        showPage(1);
    });



    function showPage(page) {
        const visibleProducts = getVisibleProducts();
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        visibleProducts.forEach((product, index) => {
            product.style.display = (index >= start && index < end) ? "" : "none";
        });

        allProducts.forEach(p => {
            if (!visibleProducts.includes(p)) {
                p.style.display = "none";
            }
        });

        currentPage = page;
        renderPagination();
    }

    function getVisibleProducts() {
        return allProducts.filter(p =>
            !p.classList.contains("hidden") &&
            !p.classList.contains("search-hidden")
        );
    }

    function renderPagination() {
        const visibleProducts = getVisibleProducts();
        const pageCount = Math.ceil(visibleProducts.length / itemsPerPage);
        paginationContainer.innerHTML = "";

        if (pageCount <= 1) return;

        for (let i = 1; i <= pageCount; i++) {
            const btn = document.createElement("button");
            btn.textContent = i;
            btn.classList.add("page-button");
            if (i === currentPage) btn.classList.add("active");
            btn.addEventListener("click", () => showPage(i));
            paginationContainer.appendChild(btn);
        }
    }

    showPage(1);
});

// Отримуємо посилання на елементи модального вікна
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modal-image");
const modalName = document.getElementById("modal-name");
const modalInfo = document.getElementById("modal-info");
const modalDesc = document.getElementById("modal-description");
const modalCost = document.getElementById("modal-cost");
const closeModalBtn = document.querySelector(".close-button");
const slotsSelect = document.getElementById("slots-select");
const processorsSelect = document.getElementById("processors-select");
const ramsSelect = document.getElementById("rams-select");
const powersSelect = document.getElementById("powers-select");
const ssdsSelect = document.getElementById("ssds-select");

document.querySelector(".products-products").addEventListener("click", function (e) {
    const product = e.target.closest(".products-product");
    if (!product) return;

    const image = product.dataset.image;
    const name = product.dataset.name;
    const info = product.dataset.info;
    const description = product.dataset.description;
    const cost = product.dataset.cost;
    const slotss = JSON.parse(product.dataset.slots);
    const processorss = JSON.parse(product.dataset.processors);
    const ramss = JSON.parse(product.dataset.rams);
    const powerss = JSON.parse(product.dataset.powers);
    const ssds = JSON.parse(product.dataset.ssds);

    modalImg.src = image;
    modalName.textContent = name;
    modalInfo.textContent = `Тип: ${info}`;
    modalDesc.textContent = `Опис: ${description}`;
    modalCost.textContent = `Ціна: ${cost}`;

    // ⬇️ ДОДАЙ СЮДИ!
    modal.dataset.baseCost = parseFloat(cost.replace(/[^0-9.]/g, ""));

    // Слоти
    slotsSelect.innerHTML = "";
    if (slotss.length > 0) {
        slotss.forEach(slots => {
            const option = document.createElement("option");
            option.value = slots;
            option.textContent = slots;
            slotsSelect.appendChild(option);
        });
        slotsSelect.style.display = "block";
    } else {
        slotsSelect.style.display = "none";
    }

    // Процесори
    processorsSelect.innerHTML = "";
    if (processorss.length > 0) {
        processorss.forEach(processor => {
            const option = document.createElement("option");
            option.value = processor.price;
            option.textContent = processor.name;
            option.dataset.price = processor.price;
            processorsSelect.appendChild(option);
        });
        processorsSelect.style.display = "block";
    } else {
        processorsSelect.style.display = "none";
    }

    // RAM
    ramsSelect.innerHTML = "";
    if (ramss.length > 0) {
        ramss.forEach(rams => {
            const option = document.createElement("option");
            option.value = rams;
            option.textContent = rams;
            ramsSelect.appendChild(option);
        });
        ramsSelect.style.display = "block";
    } else {
        ramsSelect.style.display = "none";
    }

    powersSelect.innerHTML = "";
    if (powerss.length > 0) {
        powerss.forEach(power => {
            const option = document.createElement("option");
            option.value = power.name;
            option.textContent = power.name;
            option.dataset.price = power.price;
            powersSelect.appendChild(option);
        });
        powersSelect.style.display = "block";
    } else {
        powersSelect.style.display = "none";
    }

    ssdsSelect.innerHTML = "";
    if (ssds.length > 0) {
        ssds.forEach(ssd => {
            const option = document.createElement("option");
            option.value = ssd.name;
            option.textContent = ssd.name;
            option.dataset.price = ssd.price;
            ssdsSelect.appendChild(option);
        });
        ssdsSelect.style.display = "block";
    } else {
        ssdsSelect.style.display = "none";
    }

    modal.style.display = "flex";

});

// Закриття модального вікна
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

processorsSelect.addEventListener("change", () => {
    const selectedOption = processorsSelect.selectedOptions[0];
    const extra = parseFloat(selectedOption.dataset.price || "0");
    const baseCostText = modal.dataset.baseCost || "0";
    const baseCost = parseFloat(baseCostText);

    const newPrice = baseCost + extra;
    modalCost.textContent = `Ціна: $${newPrice % 1 === 0 ? newPrice.toFixed(0) : newPrice.toFixed(2)}`;

    modalCost.textContent = `Ціна: ${newPrice}UAH`;
});

powersSelect.addEventListener("change", () => {
    const selectedPower = powersSelect.selectedOptions[0];
    const extra = parseFloat(selectedPower.dataset.price || "0");
    const baseCostText = modal.dataset.baseCost || "0";
    const baseCost = parseFloat(baseCostText);

    const newPrice = baseCost + extra;

    modalCost.textContent = `Ціна: $${newPrice % 1 === 0 ? newPrice.toFixed(0) : newPrice.toFixed(2)}`;
});

ssdsSelect.addEventListener("change", () => {
    const selectedPower = ssdsSelect.selectedOptions[0];
    const extra = parseFloat(selectedPower.dataset.price || "0");
    const baseCostText = modal.dataset.baseCost || "0";
    const baseCost = parseFloat(baseCostText);

    const newPrice = baseCost + extra;

    modalCost.textContent = `Ціна: $${newPrice % 1 === 0 ? newPrice.toFixed(0) : newPrice.toFixed(2)}`;
});


(() => {
    const refs = {
      openModalBtn: document.querySelector("[burger-modal-open]"),
      closeModalBtn: document.querySelector("[burger-modal-close]"),
      modal: document.querySelector("[burger-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();

const burger = document.querySelector(".burger-menu");

  // Категорії в модалці — обробка кліку
document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-category-btn")) {
    const category = e.target.dataset.category;
    if (!category) return;

    burger.classList.add("is-hidden");
document.body.classList.remove("no-scroll");

    document.querySelector("#products").scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      const indexMap = {
        pc: 1,
        laptop: 2,
        accessory: 3,
        server: 4
      };

      const filterButtons = document.querySelectorAll(".products-button");
      const btnToClick = filterButtons[indexMap[category]];
      if (btnToClick) btnToClick.click();
    }, 300);
  }
});