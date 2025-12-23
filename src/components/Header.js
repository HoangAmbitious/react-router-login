import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  return (
    <header style={{ display: "flex", gap: 10, marginBottom: 20 }}>
      <button>Quản lý sản phẩm</button>
      <button>Quản lý người dùng</button>
      <button onClick={logout}>Đăng xuất</button>
    </header>
  );
}

export default Header;
