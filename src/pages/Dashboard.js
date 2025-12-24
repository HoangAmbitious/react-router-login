import Header from "../components/Header";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";

function Dashboard() {
  const products = [
    { id: 1, name: "Sản phẩm A" },
    { id: 2, name: "Sản phẩm B" },
  ];

  const users = [
    { id: 1, name: "Nguyễn Văn A" },
    { id: 2, name: "Trần Thị B" },
  ];

  return (
    <>
      <Header />

      <Box p={3}>
        <Paper sx={{ p: 2, mb: 3 }}>
          <Typography variant="h6">Quản lý sản phẩm</Typography>
          <List>
            {products.map((p) => (
              <ListItem key={p.id}>
                <ListItemText primary={p.name} />
              </ListItem>
            ))}
          </List>
        </Paper>

        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Quản lý người dùng</Typography>
          <List>
            {users.map((u) => (
              <ListItem key={u.id}>
                <ListItemText primary={u.name} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </>
  );
}

export default Dashboard;
