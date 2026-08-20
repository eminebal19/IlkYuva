import { useState, useEffect } from "react";

{/* Örnek hayvan ilanları */ }
const mockPets = [
  {
    id: 1,
    name: "Pamuk",
    type: "Kedi",
    age: "1 yaşında",
    city: "İstanbul",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
    description: "Aşıları tam, çok oyuncu ve sevecen bir kedi"
  },
  {
    id: 2,
    name: "Karabaş",
    type: "Köpek",
    age: "1.5 yaşında",
    city: "Ankara",
    imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
    description: "Bahçeli ev arayan, sadık ve oyuncu bir dost"
  },
  {
    id: 3,
    name: "Zeytin",
    type: "Kedi",
    age: "8 aylık",
    city: "Antalya",
    imageUrl: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
    description: "Siyah parlak tüylü, meraklı ve oyuncak peşinde koşmayı seven bir afacan."
  },
  {
    id: 4,
    name: "Fındık",
    type: "Tavşan",
    age: "1 yaşında",
    city: "Eskişehir",
    imageUrl: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308",
    description: "Ev ortamında serbest dolaşmaya alışkın, uysal ve sevimli cüce tavşan."
  },
  {
    id: 5,
    name: "Limon",
    type: "Kuş",
    age: "6 aylık",
    city: "İzmir",
    imageUrl: "https://images.unsplash.com/photo-1552728089-57bdde30beb3",
    description: "Kafesiyle birlikte verilecek, neşeli ve ötücü muhabbet kuşu."
  },
  {
    id: 6,
    name: "Duman",
    type: "Kedi",
    age: "3 yaşında",
    city: "Bursa",
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5",
    description: "Sakin huylu, kucak seven ve ev ortamına alışkın."
  }
];

function Home() {
  const [editingPet, setEditingPet] = useState(null);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const savedPets = JSON.parse(localStorage.getItem("pets")) || [];
    setPets([...mockPets, ...savedPets]);
  }, []);

  const handleDelete = (id) => {
    const updatePets = pets.filter((pet) => pet.id !== id);
    setPets(updatePets);
    const savedPets = JSON.parse(localStorage.getItem("pets")) || [];
    const updatedSaved = savedPets.filter((pet) => pet.id !== id);
    localStorage.setItem("pets", JSON.stringify(updatedSaved));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedList = pets.map((pet) =>
      pet.id === editingPet.id ? editingPet : pet
    );
    setPets(updatedList);

    const savedPets = JSON.parse(localStorage.getItem("pets")) || [];
    const updatedSaved = savedPets.map((pet) =>
      pet.id === editingPet.id ? editingPet : pet
    );
    localStorage.setItem("pets", JSON.stringify(updatedSaved));

    setEditingPet(null);
    alert("İlan başarıyla güncellendi! ✅");
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPet, setSelectedPet] = useState(null);
  const [isApplying, setIsApplying] = useState(false);

  {/* filtre ayarlaması */ }
  return (
    <div className="home-container">
      <header className="app-header">
        <input
          type="text"
          placeholder="İsim veya şehir ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="header-brand">
          <img src="/logo.png" alt="İlkyuva Logo" className="header-logo" />
          <span className="brand-name">ilkyuva</span>
        </div>
      </header>

      <div className="pet-grid">
        {pets
          .filter((pet) => {
            const nameMatch = pet.name?.toLowerCase().includes(searchTerm.toLowerCase());
            const cityMatch = pet.city?.toLowerCase().includes(searchTerm.toLowerCase());
            return nameMatch || cityMatch;
          })
          /* Her hayvan için ekrana bir kart basar */
          .map((pet) => (
            <div key={pet.id} className="pet-card">
              <img src={pet.imageUrl} alt={pet.name} />
              <h3>{pet.name}</h3>
              <p>{pet.type} . {pet.age}</p>
              <p>{pet.description}</p>
              <div className="card-buttons">
                <button onClick={() => setSelectedPet(pet)}>Detayları Gör</button>
                <button onClick={() => handleDelete(pet.id)}>Sil</button>
                <button onClick={() => setEditingPet(pet)}>Düzenle</button>
              </div>
            </div>
          ))}
      </div>
      {selectedPet && (
        <div className="modal-overlay">
          <div className="modal-content">
            {!isApplying ? (
              <>
                <img src={selectedPet.imageUrl} alt={selectedPet.name} />
                <h2>{selectedPet.name}</h2>
                <p><strong>Tür & Yaş:</strong> {selectedPet.type} - {selectedPet.age}</p>
                <p><strong>Şehir: </strong>{selectedPet.city}</p>
                <p><strong>Detaylı Açıklama: </strong> {selectedPet.description}</p>
                <button onClick={() => setSelectedPet(null)}> Kapat </button>
                <button onClick={() => setIsApplying(true)}>Sahiplenmek İstiyorum</button>
              </>
            ) : (
              <form onSubmit={(e) => {
                e.preventDefault();
                alert("Tebrikler başvurunuz iletilmiştir 🥳");
                setIsApplying(false);
                setSelectedPet(null);
              }}>

                <p><strong>Ad ve Soyad: </strong><input type="text" required></input></p>
                <p><strong>Telefon numarası:</strong><input type="text" required></input></p>
                <p><strong>Neden sahiplenmek istiyorsunuz? </strong><input type="text" required></input></p>
                <button type="submit">Başvuruyu Tamamla</button>
                <button type="button" onClick={() => setIsApplying(false)}>Geri Dön</button>
              </form>

            )}
          </div>
        </div>
      )}
      {editingPet && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>İlanı Düzenle</h3>
            <form onSubmit={handleUpdate} className="listing-form">
              <label>
                İsim:
                <input
                  type="text"
                  value={editingPet.name}
                  onChange={(e) => setEditingPet({ ...editingPet, name: e.target.value })}
                  required
                />
              </label>
              <label>
                Yaş:
                <input
                  type="text"
                  value={editingPet.age}
                  onChange={(e) => setEditingPet({ ...editingPet, age: e.target.value })}
                  required
                />
              </label>
              <label>
                Şehir:
                <input
                  type="text"
                  value={editingPet.city}
                  onChange={(e) => setEditingPet({ ...editingPet, city: e.target.value })}
                  required
                />
              </label>
              <label>
                Açıklama:
                <textarea
                  value={editingPet.description}
                  onChange={(e) => setEditingPet({ ...editingPet, description: e.target.value })}
                  required
                />
              </label>
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button type="submit">Kaydet</button>
                <button type="button" onClick={() => setEditingPet(null)}>İptal</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;