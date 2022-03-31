/*spaceship = {
    velocity: "",
    maxVelocity: 200,
    name: "Sparkles",
    type: "Seeker"
}

let choseOption = () => {
    let userOption = prompt(`A nave se encontra a ${spaceship.velocity}Km/h.\nSe deseja parar digite "PARAR".\nPara acelerar digite "ACELERAR"`)
    
    while(userOption.toUpperCase() == "PARAR") {
        alert(`${spaceship.name}, do tipo ${spaceship.type} estava a ${spaceship.velocity}Km/h, estamos parando...`)
    }
    
    while(userOption.toUpperCase() == "ACELERAR") {
        let accelerate = prompt(`Atualmente ${spaceship.name} está a ${spaceship.velocity}Km/h, insira quanto deseja acelerar: `)
        spaceship.velocity += accelerate

        if (spaceship.velocity > 200 ) {
            alert(`Estamos a ${spaceship.velocity}, que ultrapassa a velocidade máxima permitida da nave, o sistema ira reduzir a velocidade.`)
            spaceship.velocity = 200
        } else {
            alert(`Agora estamos a ${spaceship.velocity}`)
        }
    }
}*/
        
//(userOption.toUpperCase != "PARAR" && userOption.toUpperCase != "ACELERAR")

let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceship() {
    spaceship.name = prompt("Infome o nome da nave: ")
    spaceship.type = prompt("Informe o tipo da nave: ")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade máxima da nave Km/s"))
    
}

function acelerate() {
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"))
    spaceship.speedUp(acceleration)
    if(spaceship.velocity > spaceship.maxVelocity) {
        alert("Velocidade máxima ultrapassada!!!\nVelocidade da nave: "+ spaceship.velocity + "Km/s" + "\nVelocidade máxima da Nave: " + spaceship.maxVelocity + "Km/s")
    }
}

function  stop() {
    alert(`Nome: ${space.name}\nTipo: ${spaceship.type}\nVelocidade: ${spaceship.velocity}\n  Velocidade Máxima da nave: ${spaceship.maxVelocity}`)
    spaceship.velocity = 0
}

function showMenu() {
    let choseOption
    do {
        chosenOption = prompt("Você deseja:\n1- Acelerar\n 2- Parar")
        switch(chosenOption) {
            case "1":
                acelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Opção inválida")

        }
    } while(chosenOption != "2")
}

registerSpaceship()
showMenu()