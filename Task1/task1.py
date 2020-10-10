import math;
def highestProduct(integers):
    greatestNumbers = [-math.inf for i in range(0, 3)]
    for integer in integers:
        i = 0
        while i < len(greatestNumbers):
            if integer > greatestNumbers[i]:
                greatestNumbers[i] = integer
                break
            i += 1
        greatestNumbers.sort()
    product = greatestNumbers[0]
    for i in range(1, len(greatestNumbers)):
        product *= greatestNumbers[i]
    return product