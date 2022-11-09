import "./App.css";
import Table from "./Components/Table";
import { useEffect, useState } from "react";
import { Item } from "./Components/models/Item";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    const getData = async () => {
      const itemsFromServer = await fetchData();
      setItems(itemsFromServer);
    };
    getData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://636b84dc7f47ef51e132b2ab.mockapi.io/Rent");
    const data = await res.json();

    return data;
  };

  return <div className="App">{<Table items={items} />}</div>;
}

export default App;
