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
   /*  precios: [
      { componente: "Monitor GPRS 3000", precio: 200},
      { componente: "Monitor ASC 543", precio: 250 },
      { componente: "Motherboard ASUS 1500", precio: 120},
      { componente: "Motherboard ASUS 1200", precio: 100},
      { componente: "Motherboard MZI", precio: 30},
      { componente: "HDD Toyiva", precio: 90},
      { componente: "HDD Wezter Dishital", precio: 75},
      { componente: "RAM Quinston", precio: 110},
      { componente: "RAM Quinston Fury", precio: 230}
    ] */
   
  };

 var  price= [
    { componente: "Monitor GPRS 3000", precio: 200},
    { componente: "Monitor ASC 543", precio: 250 },
    { componente: "Motherboard ASUS 1500", precio: 120},
    { componente: "Motherboard ASUS 1200", precio: 100},
    { componente: "Motherboard MZI", precio: 30},
    { componente: "HDD Toyiva", precio: 90},
    { componente: "HDD Wezter Dishital", precio: 75},
    { componente: "RAM Quinston", precio: 110},
    { componente: "RAM Quinston Fury", precio: 230}
  ]


  console.log(price[0].precio)

  let newList = []
  const preciosObj = price.map(function(p){
    let precios = p.componente.map(function(c){
      precios = c.precio
    })
  })

  console.log(preciosObj)



let date = new Date()
console.log(date)


// date es un tipo de dato de JS (es una clase tipada) 
// la variable date es una instancia 
// metodo: date.getDate = 11
// metodo date.getYear 
// metodo: date.getHour()