const shelters = [
  {
    id: 1,
    name: "Pati Barınak",
    city: "İstanbul",
    needType: "Aşı muayenesi borcu",
    targetAmount: 5000,
    currentAmount: 1500
  },
  {
    id: 2,
    name: "Çankaya Barınak",
    city: "Şanlıurfa",
    needType: "Ortopedik ayak yapım maaliyeti",
    targetAmount: 10000,
    currentAmount: 7000
  },
  {
    id: 3,
    name: "Sevgili Barınak",
    city: "Ankara",
    needType: "Muayene borcu",
    targetAmount: 5000,
    currentAmount: 3500
  }
];

function DonationPage() {
  const handleDonate = (shelterName = "") => {
    if (shelterName) {
      alert(`${shelterName} için bağış sistemi yakında aktif olacaktır! Desteğiniz için teşekkür ederiz 🐾`);
    } else {
      alert("Genel bağış sistemi yakında aktif olacaktır! Desteğiniz için teşekkür ederiz 🐾");
    }
  };

  return (
    <div className="donations-container">
      {/* Kartları yan yana dizecek olan kapsayıcı doğrudan map'i sarmalı */}
      <div className="shelter-list">
        {shelters.map((shelter) => (
          <div key={shelter.id} className="shelter-card">
            <h4>Barınak Adı: {shelter.name}</h4>
            <p><strong>Şehir: </strong>{shelter.city}</p>
            <p><strong>Açıklama:</strong> {shelter.needType}</p>
            <p>Toplam Borç: {shelter.targetAmount} TL</p>
            <p>Toplanan miktar: {shelter.currentAmount} TL</p>
            <p>İlerleme: %{Math.round((shelter.currentAmount / shelter.targetAmount) * 100)}</p>
            
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${Math.round((shelter.currentAmount / shelter.targetAmount) * 100)}%` }}
              ></div>
            </div>
            
            <button type="button" onClick={() => handleDonate(shelter.name)}>
              Bağış Yap
            </button>
          </div>
        ))}
      </div>

      <div className="donations-footer">
        <h3>Bu proje kâr amacı gütmeyen tamamen bağışlarla masrafı karşılanan bir hayvansever sitedir. Desteğiniz için şimdiden teşekkürler :)</h3>
        <button type="button" onClick={() => handleDonate()}>
          Bağış Yap
        </button>
      </div>
    </div>
  );
}

export default DonationPage;