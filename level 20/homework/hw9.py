# 9) შექმენით ცვლადები და დააჯამეთ ლუწი და კენტი რიცხვები სიიდან 
odd = 0
even = 0
list = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
for i in range(len(list)):
    if i % 2 == 0:
        even += list[i]
    else:
        odd += list[i]
print(odd)
print(even)
