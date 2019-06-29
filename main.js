var shop = {
    branches: ["Centro", "Caballito"],

    sellers: ["Ada", "Grace", "Hedy", "Sheryl"],
  
    soldItems: [
      // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
      { date: new Date(2019, 2, 12), nameSeller: "Hedy", components: ["Monitor GPRS 3000", "HDD Toyiva"], branch: 'Centro'},
      { date: new Date(2019, 2, 24), nameSeller: "Sheryl", components: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], branch: 'Caballito'},
      { date: new Date(2019, 2, 01), nameSeller: "Ada", components: ["Motherboard MZI", "RAM Quinston Fury"], branch: 'Centro'},
      { date: new Date(2019, 2, 11), nameSeller: "Grace", components: ["Monitor ASC 543", "RAM Quinston"], branch: 'Caballito'},
      { date: new Date(2019, 2, 15), nameSeller: "Ada", components: ["Motherboard ASUS 1200", "RAM Quinston Fury"], branch: 'Centro'},
      { date: new Date(2019, 2, 12), nameSeller: "Hedy", components: ["Motherboard ASUS 1500", "HDD Toyiva"], branch: 'Caballito'},
      { date: new Date(2019, 2, 21), nameSeller: "Grace", components: ["Motherboard MZI", "RAM Quinston"], branch: 'Centro'},
      { date: new Date(2019, 2, 08), nameSeller: "Sheryl", components: ["Monitor ASC 543", "HDD Wezter Dishital"], branch: 'Centro'},
      { date: new Date(2019, 2, 16), nameSeller: "Sheryl", components: ["Monitor GPRS 3000", "RAM Quinston Fury"], branch: 'Centro'},
      { date: new Date(2019, 2, 27), nameSeller: "Hedy", components: ["Motherboard ASUS 1200", "HDD Toyiva"], branch: 'Caballito'},
      { date: new Date(2019, 2, 22), nameSeller: "Grace", components: ["Monitor ASC 543", "HDD Wezter Dishital"], branch: 'Centro'},
      { date: new Date(2019, 2, 05), nameSeller: "Ada", components: ["Motherboard ASUS 1500", "RAM Quinston"], branch: 'Centro'},
      { date: new Date(2019, 2, 01), nameSeller: "Grace", components: ["Motherboard MZI", "HDD Wezter Dishital"], branch: 'Centro'},
      { date: new Date(2019, 2, 07), nameSeller: "Sheryl", components: ["Monitor GPRS 3000", "RAM Quinston"], branch: 'Caballito'},
      { date: new Date(2019, 2, 14), nameSeller: "Ada", components: ["Motherboard ASUS 1200", "HDD Toyiva"], branch: 'Centro'},
      { date: new Date(2019, 1, 4), nameSeller: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], branch: 'Centro' },
      { date: new Date(2019, 0, 1), nameSeller: "Ada", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], branch: 'Centro'},
      { date: new Date(2019, 0, 2), nameSeller: "Grace", components: ["Monitor ASC 543", "Motherboard MZI"], branch: 'Centro'},
      { date: new Date(2019, 0, 10), nameSeller: "Ada", components: ["Monitor ASC 543", "Motherboard ASUS 1200"], branch: 'Centro'},
      { date: new Date(2019, 0, 12), nameSeller: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], branch: 'Centro'}
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
let newComponentsArray = []

const onloadFunctionReport= () =>{ 
  render()
}

const render = () =>{
  salesPerMonth()
  salesPerBranch()
  bestSellingProduct()
  bestSellingClerk()
}

const showOnScreen = (container, data) =>{
  let father = document.getElementById(container)
  let child = document.createElement('div')
  child.innerText = data
  father.appendChild(child)
}

const componentsPrices = (soldPC) => {
  priceArray = []
  soldPC.components.forEach( component => {
    shop.prices.forEach( e => {
      if(e.component === component){
        priceArray.push(e.price)
      }
    })
  })
  return priceArray
}

//toma un array de precios y calcula la suma total
const totalPrice = (array) =>{
  let sumPrice = 0
  array.forEach( e => {
    sumPrice = sumPrice + e
  })
  return sumPrice
} 

const quantitySoldItems = comp =>{
  counter = 0
  shop.soldItems.forEach( e => {
    e.components.forEach( item => {
      if(item === comp){
        counter = counter + 1
      }
    })
  })
  return counter
}


const salesPerMonth = () =>{
  let monthFull = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
  let monthNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  let totalSales
  monthNumber.forEach(function(month){
    totalSales = 0
    shop.soldItems.forEach(function(item){
      if(item.date.getMonth() === month){
        totalSales = totalSales + totalPrice(componentsPrices(item))
      }
    })
    if(totalSales!==0){
      showOnScreen('salesPerMonth', `Total de ${monthFull[month]}: $${totalSales}`)
    }
  })
}

const salesPerBranch = () =>{
  let totalSales
  shop.branches.forEach(function(branch){
    totalSales = 0
    shop.soldItems.forEach(function(item){
      if(item.branch === branch){
        totalSales = totalSales + totalPrice(componentsPrices(item))
      }
    })
    showOnScreen('salesPerBranch', `Total de ${branch}: $${totalSales}`)
  })
}

const bestSellingProduct = () =>{
  showOnScreen('bestSellingProduct', `Producto estrella: ${maxSalesProduct()}`)
}

//devuelve el producto mas vendido
const maxSalesProduct = () =>{
  let totalSales = 0
  let maxSales = 0
  let maxComponent = ''
  shop.prices.forEach(function(e){
    totalSales = quantitySoldItems(e.component)
    if(totalSales>maxSales){
      maxSales = totalSales
      maxComponent = e.component
    }
  })
  return maxComponent
}

const bestSellingClerk = () =>{
  showOnScreen('bestSellingClerk', `Vendedora que más ingresos generó: ${maxSalesClerk()}`)
}

//devuelve la vendedora que mas ingresos genero
const maxSalesClerk = () =>{
  let totalSold = 0
  let maxTotalSold = 0
  let maxClerk = ''
  shop.sellers.map(function(employee){
    totalSold = 0
    shop.soldItems.map(function(e){
      if(e.nameSeller === employee){
        totalSold = totalSold + totalPrice(componentsPrices(e))
      }
    })
    if(totalSold > maxTotalSold){
      maxTotalSold = totalSold
      maxClerk = employee
    }
  })
  return maxClerk
}











