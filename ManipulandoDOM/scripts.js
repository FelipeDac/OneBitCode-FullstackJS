/*
// Instance House class
class House {
    constructor (houseNum, district, city, area) {
    this.houseNum = houseNum,
    this.district = district,
    this.city = city,
    this.area = area

    }
}

// Catch HTML
const houseNumber = document.querySelector("#houseNumber")
const houseDistrict = document.querySelector("#houseDistrict")
const houseCity = document.querySelector("#houseCity")
const houseArea = document.querySelector("#houseArea")
const listHouse = document.querySelector("#listHouse")

// Register new House
const register = () => {
    let house = new House(houseNum.value, district.value, city.value, area.value)

    let element = `Numero da Casa: ${house.houseNum} - Bairro: ${house.district} - Cidade: ${house.city} - Area do imovel: ${house.area}`

    let listItem = document.createElement('li')
    let createButton = document.createElement('button')
    button.innerHTML = "Remover"

    button.onclick = () => {
        let pai = button.parentNode
        pai.remove()
    }

    listItem.innerHTML = element
    listItem.appendChild(createButton)
    listItem.appendChild(listItem)

}  */

function saveHouse() {
    let area = document.querySelector("input[name='area']").value
    let number = document.querySelector("input[name='number']").value
    let neighborhood = document.querySelector("input[name='neighborhood']").value
    let city = document.querySelector("input[name='city']").value

    let newListValue = document.createElement("li")
    newListValue.innerText = area + "m2, número " + number + " (" + neighborhood + " - " + city + ")"

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText= "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")

    newListValue.appendChild(removeButton)

    document.getElementById("house-list").appendChild(newListValue)

}

function removeHouse(button) {
    let liToRemove = button.parentNode
    document.getElementById("house-list").removeChild(liToRemove)
}
