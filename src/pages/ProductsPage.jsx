import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import FilterArea from "../components/FilterArea";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [books, setBooks] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  // URL'DEKİ ARAMA PARAMETRELERİNE ERİŞ. get metou kullanacağız. bu da searchParams'ı console yazdığımızda içinde gördüğümüz fonksiyonlardan biri.
  const order = searchParams.get("sırala");   // sırala parametresinin değeri ne ise onu bana getir dedik
  const query = searchParams.get("aramaTerimi");


  // api isteği atarken gönderilecek olan parametreleri belirle
  // options isimli bir obje oluştruk, içine params diye bir obje oluşturduk. 
  // params içindeki parametreler yani mesela _sort, JSON-Server'dan geliyor.
  const options ={
    params:{
      _sort: order === "z-a" ? "-title" : "title",   // _sort elimizdeki verileri hangi değerlere göre sıralayacağımızı belirliyor. yukardan order'ı aldık ve title'larına göre sırala dedik. title başına - koyarsak tersten sıralıyor
      q: query // aratma özelliği. son sürümde YOK. json-server'ın sürümü düşürerek bu özelliği kullanabildik AMA _sort BİRAZ BOZULDU
    } 
  }


  // veri çekme işlemlerini bileşen içerisinde ulu orta yerde yapamıyoruz.
  // her zaman bir olay izlememiz ve o olaya binaen veriyi çekmemiz gerek.
  // BU OLAY DA REACT UYGULAMALARINDA BİLEŞENİN EKRANA BASILMASI OLAYIDIR!! html uygulamalarında da sayfanın yüklenmesidir bu olay.
  useEffect(() => {
    axios
      .get("http://localhost:3090/books", options)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [order, query]);  //sıralamayı her değiştiğimde sayfayı yenilemeye gerek kalmaması için, order ve query parametrelerini buraya bağımlılık olarak verdik.


  
  // div'in yüksekliğine h-100 verdik. böylece ortada olanlar yukarı çıkmış oldu. sebebi, en başta yüksekliği yazı kadardı. sayfanın ortasında kalmıştı. sonra yüksekliğini 100 yapınca yuları gitmiş oldu.bg-danger vererek tespit edebilriz.
  return (
    <div className="mx-4 h-100 mt-4">
      {/* ? anlamı: KİTAPLAR GELDİĞİ ZAMAN, NULL TAMAMEN GİTTİĞİ ZAMAN, EKRANA YAZDIR ANLAMINDA */}
      {/* yoksa hata veriyordu sebebi, başlangıçta null olduğu için length'i okuyamıyor.*/}
      <h3>{books?.length} kitap bulundu</h3>

      <FilterArea />

      <div className="card-container">
        {/* yine null hatası aldık. ? ile çözdük. */}
        {books?.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
