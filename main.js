var shop = {
    sellers: ["Ada", "Grace", "Hedy", "Sheryl"],
  
    sales: [
      // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
      { date: new Date(2019, 1, 4), sellersName: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { date: new Date(2019, 0, 1), sellersName: "Ada", components:["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { date: new Date(2019, 0, 2), sellersName: "Grace", components: ["Monitor ASC 543", "Motherboard MZI"] },
      { date: new Date(2019, 0, 10),sellersName: "Ada", components: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
      { date: new Date(2019, 0, 12),sellersName: "Grace",components: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
    ],
    prices: [
      { component: "Monitor GPRS 3000", price: 200},
      { component: "Monitor ASC 543", price: 250 },
      { component: "Motherboard ASUS 1500", price: 120},
      { component: "Motherboard ASUS 1200", price: 100},
      { component: "Motherboard MZI", price: 30},
      { component: "HDD Toyiva", price: 90},
      { component: "HDD Wezter Dishital", price: 75},
      { component: "RAM Quinston", price: 110},
      { component: "RAM Quinston Fury", price: 230}
    ] 
   
  };




// quiero ver los precios de cada uno de los componentes. 
let priceComponent = []
const priceProduct = function(){
  let onePrice = shop.prices.find(function(p){
    p.component === p.price
  })
  priceComponent.push(onePrice)
  console.log(priceProduct(priceComponent[1]))
}

