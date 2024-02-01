### Routes

- **Routes:**
Tarayıcadaki url'i izler ve url değiştiğinde, yol olarak tanımladığımız route'lardan birinin path değeri ile eşleşirse ekrana o route'un elementini basar.

- **path:** kullanıcının göüntülemek istediği sayfadır.


### link

- Proje içerisinde yönlendirme isşlemlerinde a etiketi yerine kullanılır.
- href yerine *to* değeri, yönlendirilecek sayfayı belirler. <Header /> bileşeninde bir örneğini kullandık. 

### Navlink

- Link etiketi ile aynı görevi yapar.

- Eğer kullanıcı, o linkin to değeri ile yönlendirme yapılan sayfadaysa, link *active* classı alır.

## Dynamic Route - dinamik sayfalama

- Sayfa içeriğini url'den alınan parametrelere göre değiştiği sayfalara verdiğimiz isim.

- Örn: Youtube sayfası / Netflix sayfası / Amazon sayfası


## useLocation

- router-dom'dan gelen bir hook
- kullanıcının bulunduğu sayfa ile alakalı bilgileri alır. bunlar:
  state / path / hash / param
- not: buradaki `state`'farklı bir şey, farklı bir sayfadan veri aktarırken karşılaşılan hatalarda state:404 vs yazar. onu ifade ediyor.


## useNavigate

- Link'in fonksiyon karşılığıdır.

- Kullanılabilmesi için bileşende bir kere çağırılması gerekiyor

- `const navigate = useNavigate()`


## Search Params (Arama Parametresi)

- Normalde state'de tutacağımız değerleri arama parametresinde tutmak isteyebiliriz.

- State'de tutulan veriler sayfa yenilendiğinde kaybolur AMA arama parametrelerinde böyle bir durum söz konusu değildir.

- Bundan dolayı sayfa yenilenince kaybetmek istemeyeceğimiz, örneğin filtreleme değerlerini arama parametresi olarak tutarız.


## Nested Router (İç İçe Yollar)


