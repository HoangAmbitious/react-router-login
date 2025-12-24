import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", gap: 2 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>

        <Button color="inherit">Quản lý sản phẩm</Button>
        <Button color="inherit">Quản lý người dùng</Button>
        <Button color="inherit" onClick={logout}>
          Đăng xuất
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
