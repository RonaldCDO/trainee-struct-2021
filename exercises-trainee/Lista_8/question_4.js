arr = [
    {
        nome: "Aluno1",
        idade: 18,
        mediaFinal: 7,
    },
    {
        nome: "Aluno2",
        idade: 17,
        mediaFinal: 10,
    },
    {
        nome: "Aluno3",
        idade: 16,
        mediaFinal: 3,
    },
    {
        nome: "Aluno4",
        idade: 19,
        mediaFinal: 8,
    },
    {
        nome: "Aluno5",
        idade: 21,
        mediaFinal: 5,
    },
    {
        nome: "Aluno6",
        idade: 35,
        mediaFinal: 6,
    }    
]

function classStatistics(Array_param){

    let grades = Array_param.map(grades => grades.mediaFinal)
    let reducer = (acc, current) => acc + current
    let media = grades.reduce(reducer)/grades.length
    console.log(`Grades: ${grades}`)
    console.log(`Media: ${media}`)
    
    let deviation = grades.map(it => (it - media)**2)
    console.log(`Devitation: ${deviation}`)
    let sum = deviation.reduce(reducer)
    
    let variance = sum/grades.length
    
    let standart_devitation = Math.sqrt(variance)
    
    console.log(`Standart Devitation: ${standart_devitation}`)
    return media, standart_devitation
}


classStatistics(arr)


function addMention(arr){
    
    grades = arr.map(elem => elem.mediaFinal)
    grades.map(function(elem, index, grades) {
    if (elem < 5){
        grades[index] = { 
            grade: elem,
            mention: "RR"
        }
    } else if (elem >= 5 && elem < 7){
        grades[index] = { 
            grade: elem,
            mention: "MM"
        }
    } else if (elem >= 7 && elem < 9){
        grades[index] = {
            grade: elem,
            mention: "MS"
        }
    } else if (elem >= 9 && elem <= 10){
        grades[index] = {
            grade: elem,
            mention: "SS"
        }
    } else{
        "Invalid grade!"
    }
    })
    return grades
}

console.log(addMention(arr))


