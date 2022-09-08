const productsCart = [

  {
    id: 1,
    name: "Uva Crimson",
    price: 44.99
  },
  {
    id: 2,
    name: "Vinho Canção",
    price: 17.95
  },
  {
    id: 3,
    name: "Água de coco",
    price: 8.95
  },
  {
    id: 4,
    name: "Mamão",
    price: 9.99
  },
  {
    id: 5,
    name: "Água tônica",
    price: 17.95
  }
]

let body = document.querySelector("body")
let main = document.createElement("main")
let ul = document.createElement("ul")
let section = document.createElement("section")
let button = document.createElement("button")

body.appendChild(main)
main.appendChild(ul)
main.appendChild(section)

function soma(productsCart) {
  let valor = 0

  for (let i = 0; i < productsCart.length; i++) {
    valor += productsCart[i].price
    let li = document.createElement("li")
    ul.appendChild(li)
    li.innerHTML = `${productsCart[i].name}: 
   <p>R$ ${productsCart[i].price}</p>`

    section.innerHTML = `<p>R$ ${valor.toFixed(2)}</p>`
    button.innerText = "Finalizar"
    section.appendChild(button)

  }
}
soma(productsCart)
