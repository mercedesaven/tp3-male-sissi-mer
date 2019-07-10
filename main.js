var shop = {
    sellers: ["Ada", "Grace", "Hedy", "Sheryl"],
  
    sales: [
      // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
      { date: new Date(2019, 1, 4), sellersName: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { date: new Date(2019, 0, 1), sellersName: "Ada", components:["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { date: new Date(2019, 0, 2), sellersName: "Grace", components: ["Monitor ASC 543", "Motherboard MZI"] },
      { date: new Date(2019, 0, 10),sellersName: "Ada", components: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
      { date: new Date(2019, 0, 12),sellersName: "Grace",components: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
    ],
    prices: [
      { component: "Monitor GPRS 3000", price: 200},
      { component: "Monitor ASC 543", price: 250 },
      { component: "Motherboard ASUS 1500", price: 120},
      { component: "Motherboard ASUS 1200", price: 100},
      { component: "Motherboard MZI", price: 30},
      { component: "HDD Toyiva", price: 90},
      { component: "HDD Wezter Dishital", price: 75},
      { component: "RAM Quinston", price: 110},
      { component: "RAM Quinston Fury", price: 230}
    ] 
   
  };

console.log(shop.sales[0].components[1])


  const listPrices = () => {shop.prices.forEach ( e => {
    let select = document.getElementById('products')
    let option = document.createElement('option')
    option.innerText = e.component
    select.appendChild(option)
    })
  }
   
  let salesList = []
  const button = function(){
    let select = document.getElementById('products')
      let listUl =  document.getElementById('valor')
      let li = document.createElement('li')
      
      shop.prices.map(function(e){
       if (select.value === e.component) {
        li.innerText = e.price
        listUl.appendChild(li)
        salesList.push(e.price)
        
       }       
      
      })
      sumList()
      
      
}


countList = [1, 2, 3, 4]
const sumList = () => {
  count = 0 
  salesList.forEach(e => {
    count = count + e
  }) 
  return count
}


const confirm = function (){
  let finalPrice = document.getElementById('totalPrice')
   finalPrice.innerText = sumList() 

  console.log(finalPrice)


} 

// sumarle un boton mas para que me de el resultado total de la suma de los elementos dentro del array.   
let saleComponent = [1,2,3,4,5]   
/*const componetsNum = function(){
 shop.sales.map(function(e){
   component.map(function(c){
     if (e.sales === c.components)
     saleComponent.push(components[c])
   })
  
    })
    console.log(saleComponent)
}*/

function search(busquedaArray){ //["componente1","componente2"]
  var total;
  total = 0;
  for (var i=0; i < busquedaArray.length; i++) {
    for (var x=0; x < shop.prices.length; x++){
      if (busquedaArray[i] === shop.prices[x].component) {
          total = total + shop.prices[x].price;
      }
    }      
  }
  return total;
}
 

function searchVentas(busquedaArray){ //["componente1","componente2"]
  var total;
  total = 0;
  for (var i=0; i < busquedaArray.length; i++) {
    for (var x=0; x < shop.sales.length; x++){
      for (var k=0; k < shop.sales[x].components.length; k++){
      if (busquedaArray[i] === shop.sales[x].components[k]) {
          total++;
          break;
      }
    }      
  }
}
  return total;
}


function searchVendedora(busquedaArray, mes, anio){ //["componente1","componente2"]
  var total;
  total = 0;
  //for (var i=0; i < busquedaArray.length; i++) {
    for (var x=0; x < shop.sales.length; x++){
      for (var k=0; k < shop.sales[x].components.length; k++){
      if (busquedaArray === shop.sales[x].sellersName && mes === shop.sales[x].date.getMonth() && anio === shop.sales[x].date.getFullYear()) {
          
        total += search(shop.sales[x].components);

          break;
      }
    }      
  //}
}
  return total;
}