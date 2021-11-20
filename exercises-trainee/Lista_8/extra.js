function findPerfectSquares(num){
    if (Math.sqrt(num) % 2 > 0 && Math.sqrt(num) % 2 < 1 || Math.sqrt(num) % 2 > 1){
        return -1
    } else{
        squares = {
            previous: (Math.sqrt(num) - 1) ** 2,
            actual: num,
            later: (Math.sqrt(num) + 1) ** 2
        }
        return squares
    }
}
console.log(findPerfectSquares(140))
console.log(findPerfectSquares(144))
console.log(findPerfectSquares(150))
console.log(findPerfectSquares(169))
console.log(findPerfectSquares(70))
console.log(findPerfectSquares(225))

