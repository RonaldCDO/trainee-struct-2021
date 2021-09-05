puts 'Question 1'

def isPrime?(num)
    i = 5    
    if num == 2 or num == 3
        return true 
    elsif num <= 1 or num % 2 == 0 or num % 3 == 0
        return false
    elsif
        while (i ** 2 <= num)
            if num % i == 0 or num % (i+2) == 0
                return false
            else
                return true
            end
            i += 6
        end
    else
        return true
    end
end

print "a)", "Input: 2\t", "Output: ", isPrime?(2), "\n", 
      "b)", "Input: 4\t", "Output: ", isPrime?(4), "\n\n"


puts 'Question 2'

def hasZeros?(a, b, c)
    if (b**2 - 4*a*c) < 0
        return false
    else
    x1 = (-b + Math.sqrt(b**2 - 4*a*c))/(2*a)
    x2 = (-b - Math.sqrt(b**2 - 4*a*c))/(2*a)
    end

    if x1 == x2
        roots = x1
    else
    roots = [x1, x2]
    end
    return roots
end

print "a)", "Input: (1,2,1)\t", "Output: ", hasZeros?(1,2,1), "\n", 
      "b)", "Input: (4,4,10)\t", "Output: ", hasZeros?(4,4,10), "\n",
      "c)", "Input: (1,4,-12)\t", "Output: ", hasZeros?(1,4,-12), "\n\n"


puts 'Question 3'

def printNumbers()
    list = []
    for i in 1..100 
        if i % 3 == 0
            list.append('fizz')
        elsif i % 5 == 0
            list.append('buzz')
        elsif i % 3 == 0 and i % 5==0
            list.append('fizzbuzz')
        else
            list.append(i)
        end
    end
    print "Print list: ", list,"\n\n"
end
printNumbers()


puts 'Question 4'
def printTriangle(maxWidth)
    halfUp(maxWidth)
    restDown(maxWidth)
end

def halfUp(num)
    i = 0
    while i <= num
        print'*'*i, "\n"
        i += 1
    end
end

def restDown(num)
    i = num-1
    while i >= 0
        print '*'*i, "\n" 
        i -= 1 
    end
end

print "Input: 3\n", "Output:"
printTriangle(3)


puts 'Question 5'

def median(list)
    if list.size % 2 == 0
        return Float((list[((list.size/2)-1)] + list[((list.size/2))])/2)
    else
        return list[(list.size/2)]
    end
end

def listOperations(list)
    dict = {:first => list.first, :length => list.length,
            :last => list.last, :sum => list.sum, 
            :average => Float(list.sum)/Float(list.size), :median => median(list),
            :sorted_list => list.sort}    
end

list_one = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
list_two = [-10, -15, -20, 10, 20, 5]

print "a) Input: ", list_one, "\t Output:", listOperations(list_one), "\n"
print "b) Input: ", list_two, "\t Output:", listOperations(list_two), "\n\n"


puts 'Question 6'

def printRandomJapaneseFood(dict)
    print_list = [dict[:entry][rand(0..2)], dict[:principal][rand(0..2)], 
    dict[:dessert][rand(0..2)]]
    return print_list
end    

dict = {:entry =>["Pickled Ginger", "Ceviche", "Sweet Sliced Cucumbers"],
        :principal =>["Sushi", "Sashimi", "Anchovies"],
        :dessert => ["Parfait", "Ice Cream", "Petit Gateau"]}

print "Input: ", dict, "\n", "Output: ", printRandomJapaneseFood(dict), "\n\n"

puts 'Question 7'

def secondPowerOfPrimes(list)
    listOfPoweredPrimes = []
    for i in 0..list.size-1
        if isPrime?(list[i]) == true
            listOfPoweredPrimes.append(list[i]**2)
        end
    end
    return listOfPoweredPrimes
end

input_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print "Input: ", input_list, "\n", "Output: ", secondPowerOfPrimes(input_list), "\n\n"


puts 'Desafio'

def removeColumnAndTranpose(matrix)
    if matrix[0].size % 2 == 0
        new_matrix = evenColumnSize(matrix)
    else
        new_matrix = oddColumnSize(matrix)
    end
    return new_matrix         
end

def oddColumnSize(matrix)
    new_matrix = []
    aux = []
    width = matrix.size
    heigth = matrix[0].size
    for i in 0..(width-1)
        for j in 0..(heigth-1)
            if j != heigth/2
                aux.append(matrix[i][j])    
            end
        end
    end
    aux2 = []
    aux3 = []
    for i in 0..(aux.size-1)
        if i%2 == 0
            aux2.append(aux[i])
        else
            aux3.append(aux[i])
        end
    end
    new_matrix.append(aux2, aux3)
    return new_matrix         
end


def evenColumnSize(matrix)
    new_matrix = []
    aux = []
    width = matrix.size
    heigth = matrix[0].size

    for i in 0..(width - 1)
        for j in 0..(heigth -1)
            if j != heigth/2 and j != heigth/2-1
                aux.append(matrix[i][j])
            end
        end
    end
    aux2 = []
    aux3 = []
    for i in 0..(aux.size-1)
        if i%2 == 0
            aux2.append(aux[i])
        else
            aux3.append(aux[i])
        end
    end
    new_matrix.append(aux2, aux3)
    return new_matrix   
end

matrix_one = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, 1, 2] ]
matrix_two = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ]

print "Input: #{matrix_one}", "\n", "Output: #{removeColumnAndTranpose(matrix_one)}", "\n\n" 
print "Input: #{matrix_two}", "\n", "Output: #{removeColumnAndTranpose(matrix_two)}", "\n"

