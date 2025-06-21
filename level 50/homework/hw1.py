# 1) კომენტარების სახით ახსენით მოცემული კოდი
def sort_array(source_array):
    odd_numbers = []
    result = []
    index = 0
    
    for num in source_array:
        if num % 2 != 0:
            odd_numbers.append(num)
    # ლუპს განოაქვს მოცემული ლისტიდან კენტები
    odd_numbers.sort();
    # ალაგებს კენტებს ზრდადობით
    
    for num in source_array:
        if num % 2 != 0:
            result.append(odd_numbers[index])
            index += 1
        # ისევ გადაუვლის სიას და თუ კენტია, მის მაგივრად odd_numbers დალაგებული სიიდან დაამატებს მოცემულ ინდექსზე კენტს, თუ ლუწია თავის ინექსზე სვამს ლუწს, ინდექს ცვლადი არის იმისთვ ის რომ კენტები ცვლადიდან თანმიმდევრობით გამოვიძახოთ< ამიტომ იზრდება ყოოველ იტერაციაზე ერთით
        else:
            result.append(num)
    
    return result