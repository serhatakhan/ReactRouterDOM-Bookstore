import { NavLink, Outlet } from "react-router-dom";
/* Outlet bileşeni, alt route'un (örneğimizde hikaye, roman, deneme gibi olan route'lar) 
sayfanın neresine yerleşeceğini söylememize yarıyor */
// kategori, kapsayıcı rouete'dur

const CategoryPage = () => {

  //*** YETKİLENDİRME ÖRNEK ***
  /* const navigate = useNavigate();

  // kullanıcı giriş yapmışsa sayfayı göster
  // sadece user adminse outlet'i ekrana bas
  const user = {
    name: "ahmet",
    type: "user",
  };

  if (user.type !== "admin") {
    kullanıcı tipi admin değilse bu sayfayı gösterme
    kullanıcyı anasayfaya yönlendir,
     1) HOOK kullanımı: useNavigate() SORUNUMUZU TAM OLARAK ÇÖZMEDİ REACT UYARI VERİYORDU
    navigate('/');
     2) BİLEŞEN kullanımı: Navigate İSMİNDE BİLEŞEN VAR. ONU İMPORT EDEREK KULLANIRSAK OLUR
    return <Navigate to={'/'} replace />; 
    --buradaki replace özelliğini aktif edersek router-dom yönlendirme yaparken hafızada tutmuyor bunu
    ***/
  

  return (
    <div className="d-flex align-items-center gap-4 p-5">
      <aside className="bg-info p-5 rounded-4 d-flex flex-column gap-3 shadow">
        <NavLink className="text-dark" to={"/kategori/hikaye"}>Hikaye</NavLink>
        <NavLink className="text-dark" to={"/kategori/roman"}>Roman</NavLink>
        <NavLink className="text-dark" to={"/kategori/deneme"}>Deneme</NavLink>
        <NavLink className="text-dark" to={"/kategori/bilim-kurgu"}>Bilim-Kurgu</NavLink>
        <NavLink className="text-dark" to={"/kategori/macera"}>Macera</NavLink>
      </aside>

      {/* ASIL SAYA İÇERİĞİ buraya gelecek */}
      {/* alt route'un, kapsayıcı route içinde hangi noktada sayfaya geleceği,
        ekrana basılacağı belirler */}
      <Outlet />
      {/* ilerleyen zamanlarda yetkilendirme işlemlerinde de Outlet'in yardımı olacak.
        mesela giriş yapan admin ise bu ekranı görebilsin, user ise göremesin gibi 
        sayfanın koşullu bir şekilde görüntülenmesini de sağlıyor outlet */}
    </div>
  );
};

export default CategoryPage;
