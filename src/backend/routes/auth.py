# Example auth route
def login_user(username, password):
    if username == "Sufyan" and password == "1234":
        return {"status": "success", "token": "fake-jwt-token"}
    return {"status": "fail", "message": "Invalid credentials"}
