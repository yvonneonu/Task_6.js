def printPairs(arr, arr_size, sum):

    # Create an empty hash set
    s = set()

    for i in range(0, arr_size):
        temp = sum-arr[i]
        if (temp in s):
            print("Pairs with a given sum " + str(sum) + " is (" + str(arr[i]) + ", " + str(temp) + ")")
        s.add(arr[i])

   # driver program to check the above function
A = [1, 2, 3, 4, 5, 6]
n = 6
printPairs(A, len(A), n)