def test_mock_database():
    from src.backend.db.database import get_db
    db = get_db()
    assert db == "Mocked Database Connection"
