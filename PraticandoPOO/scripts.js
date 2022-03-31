class SpacialStation {
    spaceshipHitch(name, crew, hitched, openDoors) {
        this.name = name
        this.crew = crew
        this.hitched = hitched
        this.openDoors = openDoors
    }
}

let spaceshipList = new Array()

let hitchSpaceship = () => {
    spaceshipName = prompt("Digite o nome da nave: ")
    crewQuantity = Number(prompt("Digite a quantidade de tripulantes: "))
    hitch = new SpacialStation()
    
    hitch.spaceshipHitch(spaceshipName, crewQuantity, true, true)
    spaceshipList.push()

    return spaceshipList
}

printSpaceshipList = (spaceshipList) => {
    let listSpaceships = "";
    spaceshipList.forEach((spaceship, index) => {
        listSpaceships += (index + 1) + " - " + "Nave " + spaceship.name +
            " que aceita " + spaceship.crewQuantity + " tripulantes" + "\n";
    })
    alert("Lista de Naves:\n" + listSpaceships);
}

function showMenu() {

    let chosenOption
    do{
        chosenOption = Number(prompt("Digite a opção desejada:\n1- Realizar engate\n2- Imprimir naves\n3- Sair do programa"))

        switch(chosenOption) {
            case 1:
                hitchSpaceship()
                break
            case 2:
                printSpaceshipList()
                break
            case 3:
                break
            default:
                alert("Escolha uma opção válida!!!")
        }
    }   while (chosenOption !=  3)
}

showMenu()