/** import gif from "../assets/welcome.gif"    //src'nin içine mesela asset klasörüne koyarsak böyle import etmemiz gerekiyor önce, sonra da bir alttaki gibi kullanabiliriz. import gif dediğimiz yerde gif, değişken ismi gibi. istediğimiz ismi verebilriz.
    <img src={gif} alt="" /> **/ 
// eğer public klasörünün içine atarsak resimleri, böyle yapmamıza gerek kalmıyor. aşağıdaki gibi {/dosya_adi} yaparak resmi çağırabiliyoruz. dosya adı varsa tabi ki önce dosya adı. (videolarda da olur) / css de background olayı aynı img için.

import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container d-flex flex-column align-items-center gap-5 my-1 text-dark">
      <marquee width="76%" scrollamount="12" className="fw-bold marq" >HOŞ GELDİNİZ !</marquee >

      <img src={"/images/welcome.gif"} alt="" />

      <p className="fw-bold fs-5 text-center">
        <Link to={"/ürünler"} className="fw-bold fs-5" >Ürünler sayfasından</Link> yeni çıkan tüm kitaplara ulaşabilirsiniz...
      </p>
    </div>
  );
};

export default MainPage;
