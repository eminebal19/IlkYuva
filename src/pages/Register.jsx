import { useState } from 'react';

function Register() {
    const handleSubmit = (e) => {
    e.preventDefault();
    alert("Hesabınız başarıyla oluşturuldu! Hoş geldiniz 🎉");
    window.location.href = "/";
  };
    const [accountType, setAccountType] = useState('bireysel');
    return (
        <div className="form-card">
            <h2>Kayıt Ol</h2>
            <form className="listing-form" onSubmit={handleSubmit}>
                <label>
                    Hesap Türü:
                    <select value={accountType} onChange={(e) => setAccountType(e.target.value)} >
                        <option value="bireysel">Bireysel</option>
                        <option value="kurumsal">Kurumsal (Barınak)</option>
                    </select>
                </label>
                {accountType == 'bireysel' ? (
                    <label>Ad Soyad: <input type="text" placeholder="Adınız Soyadınız" required /></label>
                ) : (
                    <label>
                        Kurum / Barınak Adı:
                        <input type="text" placeholder='Örn: Pati Barınağı' required />
                    </label>
                )}
                {accountType == 'bireysel' ?(
                     <label> E-posta: <input type="email" placeholder="ornek@gmail.com" required /></label>
                ) : (
                    <label>
                        Kurumsal E-posta:
                        <input type='email' placeholder='iletisim@kurumadi.org' required />
                    </label>
                )
                }
               
                <label>Şifre: <input type="password" placeholder="En az 6 karakter" required /></label>
                <label> Şehir: <input type="text" placeholder="Mevcut şehir" required /></label>
                <button type="submit">Hesap oluştur</button>
            </form>

        </div>
    );
}
export default Register;