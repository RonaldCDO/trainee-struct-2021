// Question 2
let Arthur = {
    cheeseBread: false,
    pet: false,
    workPermit: false,
}

let beatEduardo = () => {
    if (Arthur.cheeseBread == true){
        console.log("Arthur defeated Eduardo!")
    } else {
        console.log("Eduardo defeated Arthur, Game Over!")
        process.exit(1)
    }
}

let beatGabriel = () => {
    if (Arthur.pet == true){
        console.log("Arthur defeated Gabriel!")
    }
    else {
        console.log("Gabriel defeated Arthur, Game Over!")
        process.exit(1)
    }
}

function beatFelipe(){
    if (Arthur.workPermit == true){
        console.log("Arthur defeated Felipe!")
    }
    else{
        console.log("Felipe defeated Arthur, Game Over!")
        process.exit(1)
    }
}

function weekDay(day){
    if (day == 0)
    return 'Sunday'

    else if (day == 1)
    return 'Saturday'

    else if (day == 2 )
    return 'Monday'

    else if (day == 3)
    return 'Tuesday'

    else if (day == 4)
    return 'Wednesday'

    else if (day == 5)
    return 'Thursday'

    else if (day == 6)
    return 'Friday'

    else if (day == 7)
    return 'Saturday'

    else 
    return 'Invalid Day'
}

function sneakIn(){
    time = new Date()
    day = time.getDay()
    actual_time = time.getHours() + ":" + time.getMinutes()
    console.log(`Today is ${weekDay(day)} the actual time is: ${actual_time}`)
    sleep(2000)
    console.log("Trying to Sneak in GP's Departament...")
    sleep(2000)
    
    if (actual_time == "18:00" && day != 'Saturday' && day != 'Sunday'){
        console.log("When the members were gossiping and watching soap operas you entered in the GP\n" +
                    "and burned all of the documents! You Won the game!")
        process.exit(1)
    }
    else if(day >= 2 && time.getHours() >= 13 && time.getHours() < 20){
        console.log("The members are in work right now!")
        return
    }
    else if (day <= 1 ) {
        console.log("The members doesn't work in weekends!")
    }
    else 
        console.log("The members doesn't work in this period!")
}


function rollDice(number){
    number = parseInt(Math.random()*100)
    return number
}


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


function game(){

    sneakIn()
    sleep(3000)
    
    console.log("The conditions to Arthur have a cheese bread is that the dice\n" +
    "need to roll a odd number or to be a number greater than 20")
    sleep(4000)
    let num = rollDice()
    console.log(`Rolled the value: ${num}`)
    sleep(1200)
    if (num % 2 == 0 || num > 20)
    Arthur.cheeseBread = true
    else 
    Arthur.cheeseBread = false
    beatEduardo()
    sleep(1200)
    
    console.log("The conditions to Arthur have a pet is that the dice\n" +
    "need to roll a odd number or to be a number greater than 30")
    sleep(4000)

    console.log(`Rolling the dice`)
    sleep(1200)
    num = rollDice()
    console.log(`Rolled the value: ${num}`)
    sleep(1200)
    if (num % 2 == 0 || num > 30)
    Arthur.pet = true
    else 
    Arthur.pet = false
    beatGabriel()
    sleep(1200)
    
    console.log("The conditions to Arthur have a cheese bread is that the dice\n" +
    "need to roll a odd number or to be a number greater than 40")
    sleep(4000)
    console.log(`Rolling the dice`)
    sleep(1500)
    num = rollDice()
    console.log(`Rolled the value: ${num}`)
    sleep(1500)
    if (num % 2 == 0 || num > 40)
    Arthur.workPermit = true
    else 
    Arthur.workPermit = false
    beatFelipe()
    sleep(2000)

    console.log("You defeated all of the members from the GP, burned all of the documents\n" +
                "and dissolved the GP's board. You won the Game! ")
}

// game()