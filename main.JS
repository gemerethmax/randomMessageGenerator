

    randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * 3)
        if (randomNumber === 0){
            return "Your mom"
        } else if (randomNumber === 1){
            return "Your dad"
        } else if (randomNumber === 2){
            return "Your future self"
        }
    }


    unfortunateCookie = () => {
        let person = randomPerson();
        let randomNumber = Math.floor(Math.random() * 10)
        if (randomNumber === 0){
            console.log(`${person} probably shouldn't eat this cookie`)
        } else if (randomNumber === 1){
            console.log(`There's a good chance ${person} will get a parking ticket today`)
        } else if (randomNumber === 2){
            console.log(`${person} will find a dollar on the ground today... but it will be glued to the ground`)
        } else if (randomNumber === 3){
            console.log(`${person} may find a new friend today... probably not though`)
        } else if (randomNumber === 4){
            console.log(`${person} will find a new hobby today... but ${person} won't like it`)
        } else if (randomNumber === 5){
            console.log(`${person} will find a new favorite food today... but ${person} is allergic to it`)
        }  else if (randomNumber === 6){
            console.log(`${person} will find a new favorite color today... but it's invisible`)
        }  else if (randomNumber === 7){
            console.log(`${person} will find a new favorite song today... but it's in a language you don't speak`)
        }  else if (randomNumber === 8){
            console.log(`${person} will find a new favorite movie today... but it's a silent film`)
        }  else if (randomNumber === 9){ 
            console.log(`${person} will find a new favorite book today... but it's written in a language ${person} doesn't speak`)
        }
    }

    unfortunateCookie();



