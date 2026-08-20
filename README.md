# 🐾 İlkyuva - Evcil Hayvan Sahiplendirme Platformu

İlkyuva, yuva arayan evcil hayvanlar ile hayvanseverleri buluşturan modern ve duyarlı (responsive) bir web uygulamasıdır. Kullanıcılar mevcut ilanları listeleyebilir, filtreleme yapabilir, yeni ilan ekleyebilir, ilan bilgilerini güncelleyebilir veya silebilirler.

---

## ✨ Özellikler (CRUD)

- **Listeleme (Read):** Mevcut hayvan ilanlarını kartlar halinde görüntüleme ve detay modalı üzerinden inceleme.
- **Arama & Filtreleme:** İsim veya şehir bilgisine göre anlık dinamik arama.
- **İlan Ekleme (Create):** Bilgisayardan görsel yükleme (Base64) ve form üzerinden yeni ilan oluşturma.
- **İlan Güncelleme (Update):** Mevcut ilanların bilgilerini (isim, yaş, şehir, açıklama) düzenleme.
- **İlan Silme (Delete):** İlanları listeden ve tarayıcı hafızasından kaldırma.
- **Kalıcı Veri (LocalStorage):** Sayfa yenilendiğinde verilerin kaybolmaması için tarayıcı depolaması desteği.
- **Başvuru Formu:** İlan detayından sahiplenme başvurusu gönderebilme.

---

## 🛠️ Kullanılan Teknolojiler

- **Frontend:** React.js
- **Derleyici / Build Tool:** Vite
- **Depolama:** LocalStorage API & FileReader API
- **Stil:** CSS3 (Modern Flex/Grid & Modal mimarisi)

---

## 💻 Kurulum ve Çalıştırma

Projeyi çalıştırmak için terminalinizde sırasıyla şu komutları çalıştırın:

```bash
git clone https://github.com/eminebal19/IlkYuva.git
cd IlkYuva
npm install
npm run dev

IlkYuva/
├── public/
│   └── logo.png              # Logo ve statik görseller
├── src/
│   ├── assets/               # Medya ve görsel varlıkları
│   ├── components/           # Alt bileşenler
│   │   └── BottomNav.jsx     # Alt navigasyon çubuğu
│   ├── pages/                # Sayfalar
│   │   ├── AddListing.jsx    # İlan ekleme sayfası (Create)
│   │   ├── DonationPage.jsx  # Bağış sayfası
│   │   ├── Home.jsx          # Ana sayfa, listeleme, düzenleme & silme (Read, Update, Delete)
│   │   └── Register.jsx      # Kayıt/giriş sayfası
│   ├── App.css               # Uygulama genel stilleri
│   ├── App.jsx               # Ana yönlendirme ve bileşen birleşimi
│   ├── index.css             # Temel CSS kuralları
│   └── main.jsx              # React DOM render noktası
├── index.html
├── package.json
├── README.md
└── vite.config.js