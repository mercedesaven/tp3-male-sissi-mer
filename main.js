var local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
  
    ventas: [
      // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
      { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
      { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
      { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
    ],
  
    precios: [
      { componente: "Monitor GPRS 3000", precio: 200 },
      { componente: "Motherboard ASUS 1500", precio: 120 },
      { componente: "Monitor ASC 543", precio: 250 },
      { componente: "Motherboard ASUS 1200", precio: 100 },
      { componente: "Motherboard MZI", precio: 30 },
      { componente: "HDD Toyiva", precio: 90 },
      { componente: "HDD Wezter Dishital", precio: 75 },
      { componente: "RAM Quinston", precio: 110 },
      { componente: "RAM Quinston Fury", precio: 230 }
    ]
}

let components = []
let componentsMenu, componentItem

//Genera el menu de componentes
const onload = () =>{
    componentsMenu = document.getElementById('componentsMenu')
    local.precios.map(function(e, index){
        componentItem = document.createElement('option')
        componentItem.innerText = e.componente
        componentItem.value = index
        componentsMenu.appendChild(componentItem)
    })
}

//Genera el array de precios de los componentes elegidos
const addToOrder = () =>{
    let chosenComponent = document.createElement('li')
    chosenComponent.innerText = local.precios[componentsMenu.value].precio
    let componentsList = document.getElementById('componentsList')
    componentsList.appendChild(chosenComponent)
    components.push(local.precios[componentsMenu.value].precio)
}

//PRIMERA FUNCION PEDIDA POR EL TP
//Muestra el precio de la maquina que se puede armar con los componentes elegidos
const showPrice = () => {
    let price = 0
    components.map(function(e){
        price = price + e
    })
    createElementSimple('price', price)
}

//SEGUNDA FUNCION PEDIDA POR EL TP
//Muestra la cantidad de veces que se vendio un componente

const soldItems = () => {
    let counter = 0
    let soldItem = local.precios[componentsMenu.value].componente
    local.ventas.map(function(e){
        e.componentes.map(function(item){
            if(soldItem === item){
                counter = ++counter
            }
        })
    })
    createElementComplex('soldItems',soldItem, counter)
}

//Crea un solo elemento
const createElementSimple = (containerId, data) =>{
    let container = document.getElementById(containerId)
    container.innerHTML = ''
    let secondChild = document.createElement('p')
    secondChild.innerText = data
    container.appendChild(secondChild)
}

//Crea dos elementos
const createElementComplex = (containerId, item, data) =>{
    let container = document.getElementById(containerId)
    container.innerHTML = ''
    let firstChild = document.createElement('p')
    firstChild.innerText = item
    container.appendChild(firstChild)
    let secondChild = document.createElement('p')
    secondChild.innerText = data
    container.appendChild(secondChild)
}


