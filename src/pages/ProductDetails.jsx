import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const [book, setBook] = useState(null);

  // useNavigate kurulumu, bir fonk döndürür. adına navigate dedik. herhnagi bir şey yazılabilir
  const navigate = useNavigate()

  // ÖNCE url'deki parametreyi al, bu da bize kitabın id'sini verecek. router-dom'un hooku olan useParams kullanacağız
  const { id } = useParams();
  /* console.log(params), bunu da sonra params.id diye kullanabiliriz. çünkü içinde id var, consoldan baktık. ya da obje dağıtma yöntemi ile const {id} = useParams() diyebiliriz. Bu yolu izledik. birden fazla olsaydı url'deki parametreye yine aynı şekilde bu sefer yanına ekliyerek mesela const {id, adet} = useParams() şeklinde */

  // SONRA id'sine göre kitabın bilgilerini api'den al
  useEffect(() => {
    // dinamik olacağı için ``. devamına da url'den gelen id'ye göre şekillenmesi gerektiğini söylüyoruz.
    axios
      .get(`http://localhost:3090/books/${id}`)
      .then((res) => setBook(res.data)) // bunu ekrana yansıtmak istiyorsak state'e aktarmamız gerek.
      .catch((err) => {
        // ürünün bilgisi api'den gelmediyse kullanıcıyı 404 sayfasına yönlendir !!
        // bunun için router'ın bir hooku useNavigate kullancağız. Bir fonk. içinde dinamik bir şekilde kullanıcı yönlendirme işlemlerini yapmamızı sağlayan Link etiketinin görevini yapan bir hook, bir fonk. Bunu kullanmak için de sadece import yetmiyor. kurulumunu yapmak lazım. yukarıda tanımlanan state'in altında kurulumu.
        // 2. aldığı değer de, yönlendirirken hata kodunun verisini de aktar.
        navigate("/undefined", {state: err.response.status})
        // böyle bir tanımsız sayfa yazdık kafadan. çünkü zaten biz tanımlı olmayan herhangi bir yere yönlendirdiğimiz zaman app.jsx deki tanımsız route sayfası devreye giriyor
      });
  }, []);

  return (
    <div>
      {/* kitap gelmediyse bunu bas */}
      {!book && <p>Yükleniyor...</p>}

      {/* eğer kitap varsa,geldiyse dedik yani ve sonra parantez açtık içine yazdık. */}
      {book && (
        <div className="row p-5">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img className="rounded img-fluid shadow" style={{maxHeight:"420px"}} src={book.image} alt={book.title} />
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-3">
            <h1>{book.title}</h1>

            <div className="my-2">
              <BookInfo title={"Yazar"} value={book.author} />          
              <BookInfo title={"Açıklama"} value={book.description} />          
              <BookInfo title={"Yıl"} value={book.year} />          
              <BookInfo title={"Sayfa Sayısı"} value={book.page} />          
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;


// bu dosyadaki 2.component, çok kullanılmasa da böyle bir kullanım var. normalde başka sayfada component oluştururuz.
const BookInfo = ({title,value}) =>{
  return(
    <p className="fs-5">
      <span className="badge bg-danger me-3">{title}</span>
      <span>{value}</span>
    </p>
  )
}