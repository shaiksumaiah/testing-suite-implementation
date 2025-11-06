from src.backend.routes.auth import login_user

def test_login_success():
    result = login_user("Sufyan", "1234")
    assert result["status"] == "success"

def test_login_failure():
    result = login_user("WrongUser", "1234")
    assert result["status"] == "fail"
