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
      { componente: "Monitor GPRS 3000", precio: 200, type: 'monitor' },
      { componente: "Monitor ASC 543", precio: 250, type: 'monitor' },
      { componente: "Motherboard ASUS 1500", precio: 120, type:'mother'},
      { componente: "Motherboard ASUS 1200", precio: 100, type:'mother' },
      { componente: "Motherboard MZI", precio: 30, type:'mother' },
      { componente: "HDD Toyiva", precio: 90, type:'hdd' },
      { componente: "HDD Wezter Dishital", precio: 75, type:'hdd' },
      { componente: "RAM Quinston", precio: 110, type:'ram' },
      { componente: "RAM Quinston Fury", precio: 230, type:'ram' }
    ]
   
  };

console.log(local.vendedoras[1])

console.log(local.precios[0].precio) // con este selector puedo llegar al precio del array y objeto. 


/* const listaPrecios = local.precios.forEach(function(p, e){
  p === e.name 
})  
 */





let date = new Date()
console.log(date)


// date es un tipo de dato de JS (es una clase tipada) 
// la variable date es una instancia 
// metodo: date.getDate = 11
// metodo date.getYear 
// metodo: date.getHour()