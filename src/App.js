import './App.css';
import Cart from './components/Cart';
import Item from './components/Item';
import { CartProvider } from './context/Cart';

function App() {
  return (
    <CartProvider>
      <div className="container">
        <Item name="Mac Book" price={1000} />
        <Item name="Macro Book" price={10000} />
        <Item name="Apple Book" price={10000} />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
