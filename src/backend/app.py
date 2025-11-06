from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Welcome to Sufyan's Testing Suite API 🚀"}

@app.get("/users")
def get_users():
    return [{"id": 1, "name": "Sufyan"}]

@app.post("/register")
def register_user(user: dict):
    return {"message": "User created", "user": user}

@app.get("/products")
def get_products():
    return [{"id": 101, "name": "Laptop", "price": 50000}]
