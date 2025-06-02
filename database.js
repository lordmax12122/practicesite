const products = [
    {
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-enterprise-products/enterprise-systems/poweredge/r-series/r740xd/pdp/enterprise-servers-poweredge-dellemc-per740-pdp-01.jpg?fmt=jpg&wid=400&hei=400&fit=constrain%2C1&qlt=85",
        name: "DELL R740xd",
        info: "server",
        description: "Характеристики",
        cost: "20000UAH",
        slots: ["16 слотів під диски 2.5", "24 слота під диски 2.5", "12 слотів під диски 3.5", "24 слота під диски 2.5"],
        processors: [{ name: "2 x Intel XEON 6 Core E5-2620 V3 [2.40GHz - 3.20GHz] DDR4-1866 (SR207) 85W", price: 0 },
        { name: "2 x Intel XEON 12 Core E5-2630L V3 [1.80GHz - 2.90GHz] DDR4-1866 (SR209) 55W", price: 300 },
        { name: "2 x Intel XEON 4 Core E5-2623 V3 [3.00GHz - 3.50GHz] DDR4-1866 (SR208) 105W", price: 40 },
        { name: "2 x Intel XEON 10 Core E5-2660 V3 [2.60GHz - 3.30GHz] DDR4-2133 (SR1XR) 105W", price: 50 }],
        rams: ["8GB (2х4GB) DDR4 ECC Registered 2133 Mhz",
            "32GB (2х16GB) DDR4 ECC Registered 2133 Mhz",
            "32GB (2х16GB) DDR4 ECC Registered 2400 Mhz",
            "32GB (2х16GB) DDR4 ECC Registered 2666 Mhz"],
        powers: [{ name: "Батарея Dell PERC", price: 0 }],
        ssds: [{ name: "Без SSD", price: 0 },
        { name: "14 * 200 GB SSD (6G)", price: 3000 },
        { name: "1 * 400 GB SSD (12G)", price: 40 },
        { name: "2 * 400 GB SSD (12G)", price: 50 }],

    },
    {
        image: "https://p3-ofp.static.pub/fes/cms/2021/10/25/caqm6xeo57daq7nij26glvewaqvt02706786.png",
        name: "Dell 3911",
        info: "laptop",
        description: "Характеристики",
        cost: "$76,43",
        slots: ["test"],
        processors: [],
        rams: [],
        powers: [{ name: "Батарея Dell PERC", price: 0 }],
        ssds: [{ name: "Без SSD", price: 0 },
        { name: "14 * 200 GB SSD (6G)", price: 3000 },
        { name: "1 * 400 GB SSD (12G)", price: 40 },
        { name: "2 * 400 GB SSD (12G)", price: 50 }],
    },
    {
        image: "https://p3-ofp.static.pub/fes/cms/2021/10/25/caqm6xeo57daq7nij26glvewaqvt02706786.png",
        name: "Dell 3912",
        info: "accessory",
        description: "Характеристики",
        cost: "$76,43",
        slots: ["test", "test"],
        processors: [],
        rams: [],
        powers: [{ name: "Батарея Dell PERC", price: 0 }],
        ssds: [{ name: "Без SSD", price: 0 },
        { name: "14 * 200 GB SSD (6G)", price: 3000 },
        { name: "1 * 400 GB SSD (12G)", price: 40 },
        { name: "2 * 400 GB SSD (12G)", price: 50 }],
    },
    {
        image: "https://p3-ofp.static.pub/fes/cms/2021/10/25/caqm6xeo57daq7nij26glvewaqvt02706786.png",
        name: "Dell 3920",
        info: "laptop",
        description: "Характеристики",
        cost: "$76,43",
        slots: ["test", "test"],
        processors: ["test"],
        rams: ["test"],
        powers: [{ name: "test", price: 0 }],
        ssds: [{ name: "Без SSD", price: 0 },
        { name: "14 * 200 GB SSD (6G)", price: 3000 },
        { name: "1 * 400 GB SSD (12G)", price: 40 },
        { name: "2 * 400 GB SSD (12G)", price: 50 }],
    },
]

const productList = document.querySelector(".products-products");

products.forEach(product => {
    const li = document.createElement("li");
    li.classList.add("products-product");

    // записуємо у data-* поля рядки у форматі JSON
    li.dataset.image = product.image;
    li.dataset.name = product.name;
    li.dataset.info = product.info;
    li.dataset.description = product.description;
    li.dataset.cost = product.cost;
    li.dataset.slots = JSON.stringify(product.slots);
    li.dataset.processors = JSON.stringify(product.processors);
    li.dataset.rams = JSON.stringify(product.rams);
    li.dataset.powers = JSON.stringify(product.powers);
    li.dataset.ssds = JSON.stringify(product.ssds);

    li.innerHTML = `
        <img class="products-img" src="${product.image}" alt="${product.name}" />
        <h2 class="products-name">${product.name}</h2>
        <div class="products-info" style="display: none;">${product.info}</div>
        <p class="products-desc">${product.description}</p>
        <h2 class="products-cost">${product.cost}</h2>
    `;

    productList.appendChild(li);
});