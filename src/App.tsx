import { GlobalCss } from "./styles";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Product } from "./components/Product";
import Footer from "./components/Footer";
import Page from "./pages/page"; // Importe o componente Page
import { Provider } from "react-redux";
import { store } from "./components/store";

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <div className="container">
          <Product />
        </div>
        <Footer />
      </>
    )
  },
  {
    path: '/page', // Adicione a rota para o componente Page
    element: <Page />
  }
]);

function App() {
  return (
    <>
      <Provider store={ store }>
        <GlobalCss />
        <RouterProvider router={rotas} />
      </Provider>
    </>
  );
}

export default App;























