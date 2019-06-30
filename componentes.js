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

const onloadFunction = () =>{
  let table = document.getElementById('table')
  createTable(table)
 }

//FUNCION ONLOAD DEL HTML "COMPONENTES"
const onloadFunctionComponents = () =>{ 
  //setComponentsSelect('componentsSelect')
  newSale()
  bestSellingComponent("componentsDataContainer")
  let componentsArray = []
  let quantityArray = []
  shop.prices.map( e => {
    componentsArray.push(e.component)
    quantityArray.push(quantitySoldItems(e.component))
  })
  createStandardTable("componentsTable", componentsArray, quantityArray)
}


const createStandardTable = (containerId, firstColumn, secondColumn) =>{
  let container = document.getElementById(containerId)
  container.innerHTML = ""
  firstColumn.forEach( (e, index) =>{
    let row = document.createElement('tr')
    let slot = document.createElement('td')
    slot.innerText = e
    row.appendChild(slot)
    let secondSlot = document.createElement('td')
    secondSlot.innerText = secondColumn[index]
    row.appendChild(secondSlot)
    container.appendChild(row)
  })
}

/*const onloadFunction = () =>{
  let table = document.getElementById('table')
  createTable(table)
  setComponentsSelect('componentsSelect')
  bestSellerMonth(1, 2019)
  setSelectsFunction ('monthSelect', 'un mes', [1,2,3,4,5,6,7,8,9,10,11,12])
  setSelectsFunction ('yearSelect', 'un año', [2018, 2019])
  setSelectsFunction ('sellersSelect', 'una vendedora', shop.sellers)
  bestSellingComponent()
  newSale()
  setSelectsFunction('branchSelect', 'una sucursal', shop.branches)
  setSelectsFunction ('monthSelectBranch', 'un mes', [1,2,3,4,5,6,7,8,9,10,11,12])
  setSelectsFunction ('yearSelectBranch', 'un año', [2018, 2019])
  render()
}*/

const createTable = (container) => {
  container.innerHTML = ''
  shop.soldItems.forEach(soldItem => {
    let row = document.createElement('tr')
    Object.keys(soldItem).forEach(function (key) {
      let slot = document.createElement('td')
      switch (key){
        case 'date':
          slot.innerText = `${soldItem[key].getDate()}/${soldItem[key].getMonth() + 1}/${soldItem[key].getFullYear()}`
          break;
        case 'components':
          let ul = document.createElement('ul')
          soldItem[key].forEach(component => {
          let li = document.createElement('li')
          li.innerText = component
          ul.appendChild(li)
          })
          slot.appendChild(ul)
          break;
        default:
          slot.innerText = soldItem[key]
          break;
      }
      row.appendChild(slot)
    })
    newTableSlot(row, `$${totalPrice(componentsPrices(soldItem))}`)
    container.appendChild(row)
  })
}

const newTableSlot = (container, text) => {
  let slot = document.createElement('td')
  slot.innerText = text
  container.appendChild(slot)
}

//toma una venta y pone los precios de los componentes en priceArray
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

//SELECT DE COMPONENTES
const setComponentsSelect = (idSelect) =>{
  let componentsSelect = document.getElementById(idSelect)
  componentsSelect.innerHTML = ''
  let firstOption = document.createElement('option')
  firstOption.innerText = 'Elija un componente'
  componentsSelect.appendChild(firstOption)
  shop.prices.forEach(function(e){
    let componentsOption = document.createElement('option')
    componentsOption.innerText = e.component
    componentsSelect.appendChild(componentsOption)
  })
}

//boton que confirma el componente seleccionado
//imprime en pantalla la informacion de esos componentes
const componentsSelectBtn = () =>{
  event.preventDefault()
  let componentsInfo = document.getElementById('componentsInfo')
  componentsInfo.innerHTML = ''
  showOnScreen('componentsInfo', `Componente: ${componentsSelect.value}`)
  let quantity = quantitySoldItems(componentsSelect.value)
  let printQuantity
  if( quantity === 1){
    printQuantity = `${quantity} unidad`
  }
  else{
    printQuantity = `${quantity} unidades`
  }
  showOnScreen('componentsInfo', `Cantidad vendida: ${printQuantity}`)
  setComponentsSelect('componentsSelect')
}

//imprime en pantalla
const showOnScreen = (container, data) =>{
  let father = document.getElementById(container)
  let child = document.createElement('div')
  child.innerText = data
  father.appendChild(child)
}

//SEGUNDA FUNCION (cantidadVentasComponente)
//devuelve la cantidad de veces que se vendio un componente
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
  showOnScreen('bestSellerMonth', maxSeller)
  showOnScreen('bestSellerMoney', maxTotalSold)
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
  event.preventDefault()
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
  showOnScreen('infoMonthContainer', `Mes: ${monthSelect.value}`)
  showOnScreen('infoMonthContainer', `Año: ${yearSelect.value}`)
  showOnScreen('infoMonthContainer', isIncomeNull(totalIncome))
  if(totalIncome !==0){
    showOnScreen('infoMonthContainer', `Monto total: $${totalIncome}`)
  }
}

//QUINTA FUNCION (ventasVendedora(nombre))
//el parametro nombre lo toma del select de vendedoras
const salesPerSeller = () =>{
  event.preventDefault()
  let salesPerSellerData = document.getElementById('salesPerSellerData')
  salesPerSellerData.innerHTML = ''
  let sellersSelect = document.getElementById('sellersSelect')
  let totalSales = 0
  shop.soldItems.map(function(e){
    if(e.nameSeller === sellersSelect.value){
      totalSales = totalSales + totalPrice(componentsPrices(e))
    }
  })
  showOnScreen('salesPerSellerData', `Vendedora seleccionada: ${sellersSelect.value}`)
  showOnScreen('salesPerSellerData', `Ventas totales: $${totalSales}`)
}

//SEXTA FUNCION (componenteMasVendido())
const bestSellingComponent = (containerId) =>{
  let bestSellingContainer = document.getElementById(containerId)
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
  showOnScreen(containerId, `Componente más vendido: ${maxComponent}`)
  showOnScreen(containerId, `Cantidad: ${maxSales}`)
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

const componentsDataConfirm = () =>{
  let newComponent = document.getElementById('newComponent')
  newComponentsArray.push(newComponent.value)
  showOnScreen('showNewComponent', newComponent.value)
}

const confirmSale = () =>{
  event.preventDefault()
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

//ventasSucursal(sucursal)
//FALTA QUE ESTA FUNCION Y LA DE VENTAS POR VENDEDORA COMPARTAN FUNCION
const totalSalesBranch = () =>{
  event.preventDefault()
  let branchSelect = document.getElementById('branchSelect')
  let infoBranchContainer = document.getElementById('infoBranchContainer')
  infoBranchContainer.innerHTML = ''
  let totalSales = 0
  shop.soldItems.map(function(e){
    if(branchSelect.value === e.branch){
      totalSales = totalSales + totalPrice(componentsPrices(e))
    }
  })
  showOnScreen('infoBranchContainer', `Sucursal: ${branchSelect.value}`)
  showOnScreen('infoBranchContainer', `Ventas totales: $${totalSales}`)
}

//SucursalDelMes(mes, anio)
//los parametros los toma de los selects
const bestSellingBranch = () =>{
  event.preventDefault()
  let monthSelect = document.getElementById('monthSelectBranch')
  let yearSelect = document.getElementById('yearSelectBranch')
  let totalSold = 0 //acumulador
  let maxTotalSold = 0 //mayor de los acumuladores
  let maxBranch = ''
  shop.branches.map(function(branch){
    totalSold = 0
    shop.soldItems.map(function(e){
      if(e.date.getMonth() == monthSelect.value -1 && e.date.getFullYear() == yearSelect.value && e.branch === branch){
        totalSold = totalSold + totalPrice(componentsPrices(e))
      }
    })
    if(totalSold > maxTotalSold){
      maxTotalSold = totalSold
      maxBranch = branch
    }
  })
  let bestBranchContainer = document.getElementById('bestBranchContainer')
  bestBranchContainer.innerHTML = ''
  showOnScreen('bestBranchContainer', `Sucursal: ${maxBranch}`)
  showOnScreen('bestBranchContainer', `Ventas totales: $${maxTotalSold}`)
}

//RENDER DESDE CERO PARA QUE APAREZCA EN PANTALLA, SIN SELECTS
const render = () =>{
  salesPerMonth()
  salesPerBranch()
  bestSellingProduct()
  bestSellingClerk()
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