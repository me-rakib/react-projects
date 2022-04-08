import {useState} from 'react' 

export default function App() {
  const [items, setItems] = useState(["Item 1", "Item 2"])

  function addItem() {
    setItems(prevState => [...prevState, `Item ${prevState.length+1}`])
  }

  const itemElement = items.map(item=> <p key={item}>{item}</p>)
  return(
    <div className='container'>
      <div onClick={addItem} className='btn'>
        <h2>Add Item</h2>
      </div>
      {itemElement}
    </div>
  )
}