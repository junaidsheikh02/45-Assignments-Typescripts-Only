person_name = "John Doe"

def to_title_case(input_str):
    return " ".join(word.capitalize() for word in input_str.split())

print(person_name.lower())
print(person_name.upper())
print(to_title_case(person_name))
