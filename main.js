var shop = {
    sellers: ["Ada", "Grace", "Hedy", "Sheryl"],
  
    soldItems: [
      // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
      { date: new Date(2019, 1, 4), nameSeller: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { date: new Date(2019, 0, 1), nameSeller: "Ada", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { date: new Date(2019, 0, 2), nameSeller: "Grace", components: ["Monitor ASC 543", "Motherboard MZI"] },
      { date: new Date(2019, 0, 10), nameSeller: "Ada", components: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
      { date: new Date(2019, 0, 12), nameSeller: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
    ],
  
    prices: [
      { component: "Monitor GPRS 3000", price: 200 },
      { component: "Motherboard ASUS 1500", price: 120 },
      { component: "Monitor ASC 543", price: 250 },
      { component: "Motherboard ASUS 1200", price: 100 },
      { component: "Motherboard MZI", price: 30 },
      { component: "HDD Toyiva", price: 90 },
      { component: "HDD Wezter Dishital", price: 75 },
      { component: "RAM Quinston", price: 110 },
      { component: "RAM Quinston Fury", price: 230 }
    ]
}

let priceArray = []

const onloadFunction = () =>{
  let table = document.getElementById('table')
  createTable(table)

}

const createTable = (container) =>{
  shop.soldItems.map(function(e){
    let row = document.createElement('tr')
    let tableDate = document.createElement('td')
    tableDate.innerText = `${e.date.getMonth() + 1}/${e.date.getFullYear()}`
    row.appendChild(tableDate)
    let tableSeller = document.createElement('td')
    tableSeller.innerText = e.nameSeller
    row.appendChild(tableSeller)
    let tableComponents = document.createElement('td')
    let tableComponentsUl = document.createElement('ul')
    e.components.map(function(item){
    let tableComponentsLi = document.createElement('li')
    tableComponentsLi.innerText = item
    tableComponentsUl.appendChild(tableComponentsLi)
    })
    tableComponents.appendChild(tableComponentsUl)
    row.appendChild(tableComponents)
    componentsPrices(e)
    let tablePrice = document.createElement('td')
    tablePrice.innerText = `$${totalPrice(priceArray)}`
    row.appendChild(tablePrice)
    container.appendChild(row)
  })
  
}

//toma una venta y pone los precios de los componentes en un array
const componentsPrices = (soldPC) => {
  priceArray = []
  soldPC.components.map(function(item){
    shop.prices.map(function(e){
      if(e.component === item){
        priceArray.push(e.price)
      }
    })
  })
  return priceArray
}

//toma un array de precios y calcula la suma total
const totalPrice = (array) =>{
  let sumPrice = 0
  array.map(function(e){
    sumPrice = sumPrice + e
  })
  return sumPrice
} 



