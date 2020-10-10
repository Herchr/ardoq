def highestProduct(integers):
    if len(integers) == 3:
        return integers[0]*integers[1]*integers[2]

    integers.sort()

    min1, min2 = integers[0], integers[1]
    max1, max2, max3 = integers[-1], integers[-2], integers[-3]

    return max(max1 * max2 * max3, max1 * min1 * min2)
