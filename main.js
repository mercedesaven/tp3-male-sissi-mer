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


const onloadFunctionBranch = () =>{ 
 
}

