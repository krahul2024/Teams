import json

data = {
    "name": "John Doe",
    "age": 30,
    "email": "johndoe@example.com"
}

json_data = json.dumps(data)

print(json_data)