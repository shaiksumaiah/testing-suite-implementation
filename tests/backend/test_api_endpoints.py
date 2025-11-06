from fastapi.testclient import TestClient
from src.backend.app import app

client = TestClient(app)

def test_get_users():
    response = client.get("/users")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_get_products():
    response = client.get("/products")
    assert response.status_code == 200
