import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import AuthContextProvider from './contexts/AuthContext';
import ProductContextProvider from './contexts/ProductContext';
import MainRoutes from './MainRoutes';

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
          <BrowserRouter>
            <Navbar />
            <MainRoutes />
            <Footer />
          </BrowserRouter>
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
