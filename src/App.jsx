import "./App.css";
import { ProductDetail } from "./components/product-detail";

function App() {
  let users = [
    {
      name: "Sam",
      age: 22,
    },
    {
      name: "Jimmy",
      age: 22,
    },
    {
      name: "Tonino",
      age: 22,
    },
  ];
  return (
    <>
      <h1>Welcome to my page React</h1>
      {users.map((user, index) => {
        return <ProductDetail key={index} contatore={index} nome={user.name} />;
      })}
    </>
  );
}

export default App;
