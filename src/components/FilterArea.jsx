import { useSearchParams } from "react-router-dom";
// URL'YE PARAMETRE EKLEME İŞİNİ useSearchParams HOOK'U İLE YAPIYORUZ.
// Arama parametrelerini almaya yarıyor. projede daha önce kullandığımız useParams ise normal parametreleri almaya yarıyor. Burdaki useSearchParams ise ARAMA parametrelerini, url'de ? ile tanımlanan parametreleri almamıza yarıyor.

const FilterArea = () => {
  // useSearchParams bu fonk geriye bir dizi döndürüyor useState gibi. Bu dizide 2 değer var
  // Birinicisi url'deki tüm arama parametreleri, İkincisi bu arama parametrelerini değiştirmeye yarayan fonk.
  // bu ikinci değiştirmeye yarayan fonk'u ne zaman kullanacağız? select alanındaki seçim değiştiği zaman.
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    // e.target.value ile seelctin seçtiğimiz değerine eriştik.
    // setSearchParams fonk'u obje alıyor. url'ye sırala isminde bir arama parametresi ekledik ve değerini de seelct'te seçtiğimiz şeye eşitledik. z-a seçtiysek z-a olcak gibi.
    // setSearchParams({sırala: e.target.value}) EĞER BU ŞEKİLDE KULLANIRSAK SONRA EKLENEN ARAMA PARAMETRESİ, ÖNCEKİLERİ SİLİYOR. ONDAN DOLAYI searchParams'ı consola yazdığımzda içindeki fonksiyonlardan biri olan set FONK. KULLANIP ŞU ŞEKİL BİR KULLANIM İZLEYECEĞİZ.
    searchParams.set("sırala", e.target.value) //eklenecek paramtereyi belirledik
    setSearchParams(searchParams) //url'i güncellemiş olduk
};

  const handleSubmit = (e)=>{
    e.preventDefault()

    // burada da inputa yazdığımızı arama paramaetresi olarak ekledik. FAKAT BU ŞEKİLDE KULLANIRSAK SONRA EKLENEN ARAMA PARAMETRESİ, ÖNCEKİLERİ SİLİYOR. ONDAN DOLAYI searchParams'ı consola yazdığımzda içindeki fonksiyonlardan biri olan set FONK. KULLANIP ŞU ŞEKİL BİR KULLANIM İZLEYECEĞİZ.
    // setSearchParams({aramaTerimi: e.target[0].value})
    searchParams.set("aramaTerimi", e.target[0].value)
    setSearchParams(searchParams)

    e.target[0].value=""
  }

  return (
    <div className="mt-3 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center gap-3">
        <label>Sırala</label>
        <select onChange={handleChange} className="form-select shadow">
          <option>a-z</option>
          <option>z-a</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} className="d-flex gap-1">
        <input
          className="form-control shadow"
          type="text"
          placeholder="kitap ara..."
        />
        <button className="btn btn-primary shadow">Ara</button>
      </form>
    </div>
  );
};

export default FilterArea;
