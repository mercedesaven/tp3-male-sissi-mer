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

//precioMaquina(componentes): recibe un array de componentes
//y devuelve el precio de la máquina que se puede armar
//con esos componentes, que es la suma de los precios
//de cada componente incluido.
//console.log( precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]) )

const showPrice = () => {
    let price = 0
    components.map(function(e){
        price = price + e
    })
    let priceContainer = document.getElementById('price')
    priceContainer.innerHTML = ''
    let totalPrice = document.createElement('p')
    totalPrice.innerText = price
    priceContainer.appendChild(totalPrice)

}

//computerPrice(components)

//cantidadVentasComponente(componente): recibe un componente 
//y devuelve la cantidad de veces que fue vendido, o sea
//que formó parte de una máquina que se vendió. La lista de ventas 
//no se pasa por parámetro, se asume que está identificada
//por la variable ventas.

const counterSoldComponent = comp => {
    let counter = 0
    local.ventas.map(function(e){
        e.componentes.map(function(item){
            if(comp === item){
                counter = ++counter
            }
        })
    })
    //console.log(counter)
}

counterSoldComponent(local.precios[2].componente)

const onload = () =>{
    componentsMenu = document.getElementById('componentsMenu')
    local.precios.map(function(e, index){
        componentItem = document.createElement('option')
        componentItem.innerText = e.componente
        componentItem.value = index
        componentsMenu.appendChild(componentItem)
    })
    console.log(componentsMenu)
}

const addToOrder = () =>{
    let chosenComponent = document.createElement('li')
    chosenComponent.innerText = local.precios[componentsMenu.value].precio
    let componentsList = document.getElementById('componentsList')
    componentsList.appendChild(chosenComponent)
    components.push(local.precios[componentsMenu.value].precio)
    console.log(chosenComponent)
}
