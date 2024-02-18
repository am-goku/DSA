import copy

obj = {
    "a": 10,
    "b": {
        "x": 20
    }
}


abc = dict(obj)


abc["a"] = 100

abc["b"]["x"] = 200


print(obj)