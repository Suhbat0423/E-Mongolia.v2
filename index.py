def larger_than_neighbors(numbers):
    result = []
    for i in range(1, len(numbers) - 1):
        if numbers[i] > numbers[i - 1] and numbers[i] > numbers[i + 1]:
            result.append(numbers[i])
    if len(result) == 0:
        return 0
    else:
        return result

numbers = [int(x) for x in input("").split()]

output = larger_than_neighbors(numbers)
print(output)
