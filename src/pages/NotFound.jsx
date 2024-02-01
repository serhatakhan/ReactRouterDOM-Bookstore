import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const {state} = useLocation()  // içindeki state'i aldık. o state de 404 hata içeriği var. comnsola yazarak baktık ve obje olduğunu gördüğümüz için obje şeklinde yazdık.

  return (
    <div className="container p-6 text-center">
      <img className="img-fluid rounded" src={"images/dino.gif"} alt="" />
      <p className="my-5 fs-3 fw-bold text-danger">üzgünüz :/ aradığınız sayfa bulunamadı</p>
      <div>
        <Link to={"/"} className="bg-primary text-white p-2 rounded" >Anasayfa</Link>
      </div>

      {/* state varsa bu kısım çalışsın ve alınan hata kodu görünsün  */}
      {state && (
        <p className="m-3 fs-5 text-center">Hata Kodu: <span className="text-danger">{state}</span> </p>
      )}
    </div>
  );
};

export default NotFound;
