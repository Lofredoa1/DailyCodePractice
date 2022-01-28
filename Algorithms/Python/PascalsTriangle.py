#Given an integer numRows, return the first numRows of Pascal's triangle.

#In Pascal's triangle, each number is the sum of the two numbers directly above.

# Example:
#     1
#    1 1
#   1 2 1
#  1 3 3 1
# 1 4 6 4 1

def solution(numRows: int):
    if numRows == 1:
        return [[1]]
    else:
        output = [[1], [1,1]]
        new_list = [1] #every row starts with 1
        while len(output) < numRows:
            for i in range(len(output[-1]) - 1):
                new_list.append(output[-1][i] + output[-1][i + 1])
            new_list.append(1) #every row ends with 1
            output.append(new_list)
            new_list = [1] # reset the next row with 1
        return output


print(solution(8))