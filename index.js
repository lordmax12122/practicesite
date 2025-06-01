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
                        'accessory': 3
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
                const isLaptop = product.classList.contains("laptop");
                const isPC = product.classList.contains("pc");
                const isAccessory = product.classList.contains("accessory");

                if (index === 0) {
                    product.classList.remove("hidden");
                } else if (index === 1 && isPC) {
                    product.classList.remove("hidden");
                } else if (index === 2 && isLaptop) {
                    product.classList.remove("hidden");
                } else if (index === 3 && isAccessory) {
                    product.classList.remove("hidden");
                } else {
                    product.classList.add("hidden");
                }
            });

            showPage(1);
        });
    });

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();

        allProducts.forEach(product => {
            const title = product.querySelector(".products-info")?.textContent.toLowerCase() || "";
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