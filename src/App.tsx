import { useCallback, useMemo, useState } from "react";
import { Item } from "./components/Item";

function App() {
  const [items, setItems] = useState<string[]>([])
  const [wishlist, setWishlist] = useState<string[]>([])
  const [newItem, setNewItem] = useState('')

  function addItemToList() {
    setItems([...items, `Item ${items.length}`])
  }

  const addItemToWishList = useCallback((item: string) => {
    setWishlist(state => [...state, item])
  }, [])

  const countItemsWithOne = useMemo(() => {
    console.log('countItemsWithOne')
    return { count: items.filter(item => item.includes('1')).length }
  }, [items]);

  return (
    <div className="App">
      <h1>Performance App</h1>
      <div>
        <input type="text" onChange={e => setNewItem(e.target.value)} value={newItem} />
        <button onClick={addItemToList}>Add</button>
        <ul>
          {items.map(item => {
            return <Item 
                      key={item} 
                      title={item} 
                      onAddToWishlist={addItemToWishList} 
                      countItemsWithOne={countItemsWithOne} 
                    />
          })}
        </ul>
      </div>
      
    </div>
  );
}

export default App;
