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
      { componente: "Monitor GPRS 3000", type: 'monitor', precio: 200 },
      { componente: "Motherboard ASUS 1500", type: 'mother', precio: 120 },
      { componente: "Monitor ASC 543", type: 'monitor', precio: 250 },
      { componente: "Motherboard ASUS 1200", type: 'mother', precio: 100 },
      { componente: "Motherboard MZI", type: 'mother', precio: 30 },
      { componente: "HDD Toyiva", type: 'HDD', precio: 90 },
      { componente: "HDD Wezter Dishital", type: 'HDD', precio: 75 },
      { componente: "RAM Quinston", type: 'RAM', precio: 110 },
      { componente: "RAM Quinston Fury", type: 'RAM', precio: 230 }
    ]
}

//precioMaquina(componentes): recibe un array de componentes
//y devuelve el precio de la máquina que se puede armar
//con esos componentes, que es la suma de los precios
//de cada componente incluido.
//console.log( precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]) )

let components = [local.precios[0].precio, local.precios[1].precio, local.precios[3].precio]
console.log(components)

const computerPrice = comp => {
    let price = 0
    comp.map(function(e){
        price = price + e
    })
    console.log(price)
}

computerPrice(components)

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
    console.log(counter)
}

counterSoldComponent(local.precios[2].componente)