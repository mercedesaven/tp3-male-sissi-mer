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



const listaPrecios = (p) => {local.precios.forEach ( e => {
  let select = document.getElementById('monitor')
  let option = document.createElement('option')
  option.innerText = e.componente
  option.value = e.type
  select.appendChild(option)
})
}



const boton = (b) => {local.precios.forEach (e => {
  let valorTotal = document.getElementById("valor")
  valorTotal.InnerText = e.precio
  
})
listaPrecios ()
}


// punto dos: cantidad de ventas por com