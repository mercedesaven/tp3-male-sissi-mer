var shop = {
    branches: ["Centro", "Caballito"],

    sellers: ["Ada", "Grace", "Hedy", "Sheryl"],
  
    soldItems: [
      // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
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

const onloadFunction = () =>{
  let table = document.getElementById('table')
  createTable(table)
  //moreInfo()
  setComponentsSelect('componentsSelect')
  bestSellerMonth(1, 2019)
  setSelectsFunction ('monthSelect', 'un mes', [1,2,3,4,5,6,7,8,9,10,11,12])
  setSelectsFunction ('yearSelect', 'un año', [2018, 2019])
  setSelectsFunction ('sellersSelect', 'una vendedora', shop.sellers)
  bestSellingComponent()
  newSale()
}

const createTable = (container) =>{
  container.innerHTML = ''
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

//pone los nodos adentro de "Mas Info"
const moreInfo = (child) =>{
  let adminInfo = document.getElementById('adminInfo')
  console.log(adminInfo)
  adminInfo.appendChild(child)
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

//SELECT DE COMPONENTES PARA CUALQUIER SELECT
const setComponentsSelect = (idSelect) =>{
  let componentsSelect = document.getElementById(idSelect)
  componentsSelect.innerHTML = ''
  let firstOption = document.createElement('option')
  firstOption.innerText = 'Elija un componente'
  componentsSelect.appendChild(firstOption)
  shop.prices.map(function(e){
    let componentsOption = document.createElement('option')
    componentsOption.innerText = e.component
    componentsSelect.appendChild(componentsOption)
  })
}

//boton que confirma el componente seleccionado
//imprime en pantalla la informacion de esos componentes
const componentsSelectBtn = () =>{
  let componentsInfo = document.getElementById('componentsInfo')
  componentsInfo.innerHTML = ''
  print('componentsInfo', 'Componente', componentsSelect.value)
  let quantity = quantitySoldItems(componentsSelect.value)
  let printQuantity
  if( quantity === 1){
    printQuantity = `${quantity} unidad`
  }
  else{
    printQuantity = `${quantity} unidades`
  }
  print('componentsInfo', 'Cantidad vendida', printQuantity)
  setComponentsSelect('componentsSelect')
}

//imprime en pantalla
//parametros: id del padre y texto que se quiere imprimir como dos variables distintas
const print = (container, title, data) =>{
  let father = document.getElementById(container)
  let child = document.createElement('div')
  child.innerText = `${title}: ${data}`
  father.appendChild(child)
}

//imprime en pantalla
//parametros: nodo del padre y un unico texto del hijo
const printSimple = (idContainer, text) =>{
  let container = document.getElementById(idContainer)
  let child = document.createElement('span')
  child.innerText = text
  container.appendChild(child)
}

//SEGUNDA FUNCION (cantidadVentasComponente)
//devuelve la cantidad de veces que se vendio un componente
const quantitySoldItems = (comp) =>{
  counter = 0
  shop.soldItems.map(function(e){
    e.components.map(function(item){
      if(item === comp){
        counter = counter + 1
      }
    })
  })
  return counter
}

//TERCERA FUNCION (VendedoraDelMes(mes,anio))
const bestSellerMonth = (month, year) =>{
  let totalSold = 0 //acumulador
  let maxTotalSold = 0 //mayor de los acumuladores
  let maxSeller = ''
  shop.sellers.map(function(employee){
    totalSold = 0
    shop.soldItems.map(function(e){
      if(e.date.getMonth() === month-1 && e.date.getFullYear() === year && e.nameSeller === employee){
        totalSold = totalSold + totalPrice(componentsPrices(e))
      }
    })
    if(totalSold > maxTotalSold){
      maxTotalSold = totalSold
      maxSeller = employee
    }
  })
  printSimple('bestSellerMonth', maxSeller)
  printSimple('bestSellerMoney', maxTotalSold)
}

//funcion que genera selects de un array
const setSelectsFunction = (idSelect, type, array) =>{
  let select = document.getElementById(idSelect)
  select.innerHTML = ''
  let firstOption = document.createElement('option')
  firstOption.innerText = `Elija ${type}`
  select.appendChild(firstOption)
  array.map(function(e){
    let componentsOption = document.createElement('option')
    componentsOption.innerText = e
    select.appendChild(componentsOption)
  })
}

//CUARTA FUNCION (ventasMes(mes, anio))
//los parametros los toma de los selects en pantalla
const incomeMonth = () =>{
  let infoMonthContainer = document.getElementById('infoMonthContainer')
  infoMonthContainer.innerHTML = ''
  let monthSelect = document.getElementById('monthSelect')
  let yearSelect = document.getElementById('yearSelect')
  let totalIncome = 0
  shop.soldItems.map(function(e){
      if(e.date.getFullYear() == yearSelect.value && e.date.getMonth() == monthSelect.value-1){
        totalIncome = totalIncome + totalPrice(componentsPrices(e))
      }
  })
  let printIncome = `$${totalIncome}`
  print('infoMonthContainer', 'Mes', monthSelect.value)
  print('infoMonthContainer', 'Año', yearSelect.value)
  printSimple('infoMonthContainer', isIncomeNull(totalIncome))
  if(totalIncome !==0){
    print('infoMonthContainer', 'Monto total', printIncome)
  }
}

//QUINTA FUNCION (ventasVendedora(nombre))
//el parametro nombre lo toma del select de vendedoras
const salesPerSeller = () =>{
  let salesPerSellerData = document.getElementById('salesPerSellerData')
  salesPerSellerData.innerHTML = ''
  let sellersSelect = document.getElementById('sellersSelect')
  let totalSales = 0
  shop.soldItems.map(function(e){
    if(e.nameSeller === sellersSelect.value){
      totalSales = totalSales + totalPrice(componentsPrices(e))
    }
  })
  let printTotalSales = `$${totalSales}`
  print('salesPerSellerData', 'Vendedora seleccionada', sellersSelect.value)
  print('salesPerSellerData', 'Ventas totales', printTotalSales)
}

//SEXTA FUNCION (componenteMasVendido())
const bestSellingComponent = () =>{
  let bestSellingContainer = document.getElementById('bestSellingContainer')
  bestSellingContainer.innerHTML = ''
  let totalSales = 0
  let maxSales = 0
  let maxComponent
  shop.prices.map(function(e){
    totalSales = quantitySoldItems(e.component)
    if(totalSales>maxSales){
      maxSales = totalSales
      maxComponent = e.component
    }
  })
  print('bestSellingContainer', 'Componente más vendido', maxComponent)
  print('bestSellingContainer', 'Cantidad', maxSales)
}

//SEPTIMA FUNCION (huboVentas(mes,anio))
//los parametros los toma del select
const isIncomeNull = (income) =>{
  let text
  if(income === 0){
    text = 'No hubo ventas en el mes'
  }else{
    text = 'Hubo ventas en el mes'
  }
  return text
}

//NUEVA VENTA
const newSale = () =>{
  setSelectsFunction('newSeller', 'una vendedora', shop.sellers)
  setSelectsFunction('newBranch', 'una sucursal', shop.branches)
  setComponentsSelect('newComponent')
}

const shopDataConfirm = () =>{
  let newSeller = document.getElementById('newSeller')
  let showNewSeller = document.getElementById('showNewSeller')
  showNewSeller.innerHTML = ''
  print('showNewSeller', 'Vendedora', newSeller.value)
  let newBranch = document.getElementById('newBranch')
  let showNewBranch = document.getElementById('showNewBranch')
  showNewBranch.innerHTML = ''
  print('showNewBranch', 'Sucursal', newBranch.value)
}

const componentsDataConfirm = () =>{
  let newComponent = document.getElementById('newComponent')
  newComponentsArray.push(newComponent.value)
  printSimple('showNewComponent', newComponent.value)
}

const confirmSale = () =>{
  let newSeller = document.getElementById('newSeller')
  let newBranch = document.getElementById('newBranch')
  let date = new Date()
  let newSoldItem = {
    date: date,
    nameSeller: newSeller.value,
    components: newComponentsArray,
    branch: newBranch.value
  }
  shop.soldItems.unshift(newSoldItem)
  createTable(table)
  hideElement('createNewSoldItem')
  bestSellingComponent()
}

//Muestra elementos cambiando la clase .hide por .show
const showElement = () =>{
  let createNewSoldItem = document.getElementById('createNewSoldItem')
  createNewSoldItem.classList.replace('hide','show')
}

//Esconde elementos cambiando .show por .hide
const hideElement = (elementId) =>{
  let element = document.getElementById(elementId)
  element.classList.replace('show','hide')
}



