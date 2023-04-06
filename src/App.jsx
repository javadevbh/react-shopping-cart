//Context
import ProductContextProvider from './contexts/ProductContextProvider';

//Component
import Store from './components/Store';

function App() {

  return (
   <ProductContextProvider>
    <Store/>
   </ProductContextProvider>
  )
}

export default App
