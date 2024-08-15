# List comprehensibles Python ADD TO CODING EXAMPLES file github
numbers = [2, -1, 79, 33, -45]

no_if   = [num * 2 for num in numbers]
if_only = [num * 2 for num in numbers if num < 0]
if_else = [num * 2 if num < 0 else num * 3 for num in numbers]

# Getting Dict keys and values
num_exercises = {"functions": 10, "syntax": 13, "control flow": 15, "loops": 22, "lists": 19, "classes": 18, "dictionaries": 18}

total_exercises = 0

for exercise in num_exercises.values():
  total_exercises += exercise

print(total_exercises) # same can be done for keys
# list(num_exercises.values()) will return a list and not a dict_values object

# To get both key and value at the same time
pct_women_in_occupation = {"CEO": 28, "Engineering Manager": 9, "Pharmacist": 58, "Physician": 40, "Lawyer": 37, "Aerospace Engineer": 9}

for position, percentage in pct_women_in_occupation.items():
  print(f'Women make up {percentage} percent of {position}s.')