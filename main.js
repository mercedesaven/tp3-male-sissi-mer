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
let componentsArray = shop.prices.map(e=>{return e.component})
let newComponentsArray = []
let monthsInLetters = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
let monthsInCapitalLetters = monthsInLetters.map(e =>{
  return e.charAt(0).toUpperCase() + e.slice(1)
})
let monthsInNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

//Onload de "index"
const onloadIndex = () =>{
  newSale()
}

//Onload de "ventas"
const onloadFunctionSales = () =>{
  newSale()
  let table = document.getElementById('soldItemsTable')
  createSoldItemsTable(table)
}

//Onload de "componentes"
const onloadFunctionComponents = () =>{ 
  newSale()
  bestSellingComponent("componentsDataContainer")
  let components = shop.prices.map(e=>{return e.component})
  let quantityPerComponent = shop.prices.map(e=>{return quantitySoldItems(e.component)})
  createStandardTable("componentsTable", components, quantityPerComponent)
}

//Onload de "reporte"
const onloadFunctionReport = () =>{ 
  render()
}

//Onload de "sucursales"
const onloadFunctionBranch = () =>{ 
  newSale()
  let bestBranchOfMonth = monthsInNumbers.map( e => {return bestSellingBranch(e, 2019)})
  createStandardTable('branchOfMonthTable', monthsInCapitalLetters, bestBranchOfMonth)

  let totalSalesPerBranch = shop.branches.map(e =>{return `$${totalSalesBranch(e)}`})
  createStandardTable('totalSalesBranchTable', shop.branches, totalSalesPerBranch)
}

//Onload de "vendedoras"
const onloadFunctionSellers = () =>{
  newSale()
  let bestSellerOfMonth = monthsInNumbers.map( e => {return bestSellingSeller(e, 2019)})
  createStandardTable('sellerOfMonthTable', monthsInCapitalLetters, bestSellerOfMonth)

  let totalSalesPerSeller = shop.sellers.map(e =>{return `$${salesPerSeller(e)}`})
  createStandardTable('totalSalesSellerTable', shop.sellers, totalSalesPerSeller)

}

const createSoldItemsTable = (container) => {
  container.innerHTML = ''
  shop.soldItems.forEach(soldItem => {
    let row = document.createElement('tr')
    Object.keys(soldItem).forEach( key => {
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

//toma una venta y pone los precios de los componentes en un array
const componentsPrices = soldPC => {
  priceArray = []
  soldPC.components.forEach(item => {
    shop.prices.forEach( e => {
      if(e.component === item){
        priceArray.push(e.price)
      }
    })
  })
  return priceArray
}
  
//toma un array de precios y calcula la suma total
const totalPrice = array =>{
  let sumPrice = 0
  array.forEach( e => {
    sumPrice = sumPrice + e
  })
  return sumPrice
} 

//componenteMasVendido()
const bestSellingComponent = (containerId) =>{
  let bestSellingContainer = document.getElementById(containerId)
  bestSellingContainer.innerHTML = ''
  let totalSales = 0
  let maxSales = 0
  let maxComponent
  shop.prices.forEach(e=>{
    totalSales = quantitySoldItems(e.component)
    if(totalSales>maxSales){
      maxSales = totalSales
      maxComponent = e.component
    }
  })
  showOnScreen(containerId, `Componente más vendido: ${maxComponent}`)
  showOnScreen(containerId, `Cantidad: ${maxSales}`)
}

//cantidadVentasComponente()
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

//imprime en pantalla
const showOnScreen = (container, data) =>{
  let father = document.getElementById(container)
  let child = document.createElement('div')
  child.innerText = data
  father.appendChild(child)
}

const createStandardTable = (containerId, firstColumn, secondColumn) =>{
  let container = document.getElementById(containerId)
  container.innerHTML = ""
  firstColumn.forEach( (e, index) =>{
    if (e !== '' && secondColumn[index] !== ''){
      let row = document.createElement('tr')
      let slot = document.createElement('td')
      slot.innerText = e
      row.appendChild(slot)
      let secondSlot = document.createElement('td')
      secondSlot.innerText = secondColumn[index]
      row.appendChild(secondSlot)
      container.appendChild(row)
    }
  })
}

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
  monthNumber.forEach(month =>{
    totalSales = 0, 
    shop.soldItems.forEach(item =>{
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
  shop.branches.forEach(branch =>{
    totalSales = 0
    // shop.soldItems.forEach(item => item.branch === branch ? totalSales =+ totalPrice(componentsPrices(item)) : null)
    shop.soldItems.forEach(item =>{
      if(item.branch === branch){
        totalSales = totalSales + totalPrice(componentsPrices(item))
      }
    })
    showOnScreen('salesPerBranch', `Total de ${branch}: $${totalSales}`)
  })
}

const bestSellingProduct = () =>{
  showOnScreen('bestSellingProduct', `${maxSalesProduct()}`)
}

//devuelve el producto mas vendido
const maxSalesProduct = () =>{
  let totalSales = 0
  let maxSales = 0
  let maxComponent = ''
  shop.prices.forEach(e=>{
    totalSales = quantitySoldItems(e.component)
    if(totalSales>maxSales){
      maxSales = totalSales
      maxComponent = e.component
    }
  })
  return maxComponent
}

const bestSellingClerk = () =>{
  showOnScreen('bestSellingClerk', `${maxSalesClerk()}`)
}

//devuelve la vendedora que mas ingresos genero
const maxSalesClerk = () =>{
  let totalSold = 0
  let maxTotalSold = 0
  let maxClerk = ''
  shop.sellers.forEach(employee =>{
    totalSold = 0
    shop.soldItems.forEach(e=>{
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

//SucursalDelMes(mes, anio)
const bestSellingBranch = (month, year) =>{
  let totalSold = 0 //acumulador
  let maxTotalSold = 0 //mayor de los acumuladores
  let maxBranch = ''
  shop.branches.forEach(branch =>{
    totalSold = 0
    shop.soldItems.forEach(e=>{
      if(e.date.getMonth() == month && e.date.getFullYear() == year && e.branch === branch){
        totalSold = totalSold + totalPrice(componentsPrices(e))
      }
    })
    if(totalSold > maxTotalSold){
      maxTotalSold = totalSold
      maxBranch = branch
    }
  })
  return maxBranch
}

const totalSalesBranch = (branch) =>{
  let totalSales = 0
  shop.soldItems.forEach(e => {
    if(branch === e.branch){
      totalSales = totalSales + totalPrice(componentsPrices(e))
    }
  })
  return totalSales
}

//TERCERA FUNCION (VendedoraDelMes(mes,anio))
const bestSellingSeller = (month, year) =>{
  let totalSold = 0 //acumulador
  let maxTotalSold = 0 //mayor de los acumuladores
  let maxSeller = ''
  shop.sellers.forEach(employee =>{
    totalSold = 0
    shop.soldItems.forEach(e =>{
      if(e.date.getMonth() === month && e.date.getFullYear() === year && e.nameSeller === employee){
        totalSold = totalSold + totalPrice(componentsPrices(e))
      }
    })
    if(totalSold > maxTotalSold){
      maxTotalSold = totalSold
      maxSeller = employee
    }
  })
  return maxSeller
}

const salesPerSeller = (seller) =>{
  let totalSales = 0
  shop.soldItems.forEach(e=>{
    if(e.nameSeller === seller){
      totalSales = totalSales + totalPrice(componentsPrices(e))
    }
  })
  return totalSales
}

//Nueva venta
const newSale = () =>{
  newComponentsArray = []
  let showNewComponent = document.getElementById('showNewComponent')
  showNewComponent.innerHTML = ''
  setSelectsFunction('newSeller', 'una vendedora', shop.sellers)
  setSelectsFunction('newBranch', 'una sucursal', shop.branches)
  setSelectsFunction('newComponent', 'un componente', componentsArray)
}

const setSelectsFunction = (idSelect, type, array) =>{
  let select = document.getElementById(idSelect)
  select.innerHTML = ''
  let firstOption = document.createElement('option')
  firstOption.innerText = `Elija ${type}`
  select.appendChild(firstOption)
  array.forEach(e=>{
    let componentsOption = document.createElement('option')
    componentsOption.innerText = e
    select.appendChild(componentsOption)
  })
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

const addComponentToList = () =>{
  let chosenComponentError = document.getElementById('chosenComponentError')
  chosenComponentError.innerHTML = ''
  let sellerOrBranchError = document.getElementById('sellerOrBranchError')
  sellerOrBranchError.innerHTML = ''
  let newComponent = document.getElementById('newComponent')
  if(newComponent.value === 'Elija un componente'){
    showOnScreen('chosenComponentError', 'Elija un componente válido')
  }else{
    newComponentsArray.push(newComponent.value)
    createComponentsList(newComponent.value, newComponentsArray.length-1)
  }
}

const createComponentsList = (text, btnId) =>{
  let componentUl = document.getElementById('showNewComponent')
  let componentLi = document.createElement('li')
  componentLi.innerText = text
  let deleteBtn = document.createElement('img')
  deleteBtn.src = 'images/Icon-Delete.png'
  deleteBtn.id = btnId
  deleteBtn.onclick = function(){ deleteItem(this) }
  componentLi.appendChild(deleteBtn)
  componentUl.appendChild(componentLi)
}

const deleteItem = btn => {
  newComponentsArray.splice(btn.id, 1)
  let componentUl = document.getElementById('showNewComponent')
  componentUl.innerHTML = ''
  newComponentsArray.forEach((e, index)=>{
    createComponentsList(e, index)
  })
}

const confirmSale = () =>{
  let sellerOrBranchError = document.getElementById('sellerOrBranchError')
  sellerOrBranchError.innerHTML = ''
  let chosenComponentError = document.getElementById('chosenComponentError')
  chosenComponentError.innerHTML = ''
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
  if(newSoldItem.nameSeller !== 'Elija una vendedora' && newSoldItem.branch !== 'Elija una sucursal' && newSoldItem.components.length !== 0){
    shop.soldItems.unshift(newSoldItem)
    hrefList()
  }else{
    showOnScreen('sellerOrBranchError', 'Verifique que los datos ingresados sean válidos')
  }
  console.log(shop.soldItems)
  newSale()
}

const closeWindow = () =>{
  hideElement('createNewSoldItem')
}

const hrefList = () => { 
  location.href = 'ventas.html'
}
