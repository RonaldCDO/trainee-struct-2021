//Question 1
function calculateIMC(weight, height){
    IMC = weight/height **2
    return IMC
}

// console.log(calculateIMC(70, 1.70))

function generateUser(name, age, email){
    let user ={
        name: name,
        age: age,
        email: email
    }
    return user
}

// user = generateUser('Ronald', 25, 'ron@str.br')
// console.log(user)

function oddArray(array){
    odd_array = []
    array.forEach(element => {
        if(element % 2 == 0)
        odd_array.push(element)
    });
    return odd_array
}

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// new_arr = oddArray(arr)
// console.log(new_arr)