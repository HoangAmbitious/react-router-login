import Header from "../components/Header";

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
    <div style={{ padding: 20 }}>
      <Header />

      <h3>Quản lý sản phẩm</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>

      <h3>Quản lý người dùng</h3>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
