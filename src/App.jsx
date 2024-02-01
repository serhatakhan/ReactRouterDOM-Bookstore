import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    // tarayıcıdaki url'e göre sayfalama yapmamızı sağlar.
    <BrowserRouter>
      <div className="page">
        {/* Bütün sayfalar tarafından ortak olarak kullanılacak bileşenleri routes dışına yazarız. */}
        <Header />

        <Routes>
          {/* Route:
           * Projedeki her sayfa için tanımlanır.
           * Route'a yol ve o yol için ekrana basılacak bileşeni verir.
           */}
          <Route path="/" element={<MainPage />} />
          <Route path="/ürünler" element={<ProductsPage />} />

          {/* : bu şu demek, DİNAMİK SAYFALAMA, /'ın ardından gelecek değerin kesin olarak belli olmadığını ifade ediyor. yani o kısım DİNAMİK olacak dedik. dinamik bir parametre gelecek. devamında da bu değerin ismini yazıyoruz. değişken ismi yazdık. İSTEDİĞİMİZ HERHANGİ BİR ŞEY YAZABİLİRİZ!! yanına başka bir şey de gelmesi gerektiğinde yine aynı şekilde. /:id/:adet mesela */}
          <Route path="/ürün/:id" element={<ProductDetails />} />

          {/* nested routes ---> iç içe yollar */}
          <Route path="/kategori" element={ <CategoryPage /> } >
            <Route path="hikaye" element={ <h1>Hikaye</h1> } />
            <Route path="roman" element={ <h1>Roman</h1> } />
            <Route path="deneme" element={ <h1>Deneme</h1> } />
            <Route path="bilim-kurgu" element={ <h1>Bilim-Kurgu</h1> } />
            <Route path="macera" element={ <h1>Macera</h1> } />
          </Route>

          {/* tanımsız bir route'a yönlenirse, bu route'u tüm route'ların en altına yazıyoruz ve path'i * oluyor */}
          <Route path="*" element={<NotFound/>} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
