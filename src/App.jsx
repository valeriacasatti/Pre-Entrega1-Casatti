import ItemListContainer from "./components/layout/ItemListContainer/ItemListContainer";
import Navbar from "./components/layout/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Lorem ipsum dolor sit"} />
    </>
  );
}

export default App;
