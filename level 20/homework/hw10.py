# 10) დაითვალე დადებითი და უარყოფითი რიცხვების ჯამი სიიდან 

list = [ -1, -2, -3, -4, -5, 6, 7, 8, 9, 10, 11, -12, 13, 14, 15, 16, -17, 18, 19, 20, 21, 22, 23, 24, -25, 26, 27, -28, 29, 30]
negatives_total = 0
possitives_total = 0
for i in range(len(list)):
    if list[i] < 0:
        negatives_total += list[i]
    else:
        possitives_total += list[i]
print(possitives_total)
print(negatives_total)
