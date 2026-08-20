import { useState } from "react";
function AddListing() {
    const handleImageChange = (e) =>{
        const file = e.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const [name, setName] = useState("");
    const [type, setType] = useState("Kedi");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit= (e) =>{
        e.preventDefault();
    const newPet = {
         id: Date.now(),
         name: name,
         type: type,
         city: city,
         imageUrl: imageUrl,
         age: age,
         description: description
    };
    const currentPets =JSON.parse(localStorage.getItem("pets")) || [];
    const updatePets= [...currentPets, newPet];
    localStorage.setItem("pets", JSON.stringify(updatePets));
    setName("");
    setType ("Kedi");
    setCity("");
    setImageUrl("");
    setAge("");
    setDescription("")
alert("İlan başarıyla eklendi! 🎉")
    }
    return (
        <div className="form-card">
            <h2>Yeni İlan Ekle</h2>
            <form className="listing-form" onSubmit={handleSubmit}>
                <label> İsim :<input type="text" value={name} onChange={(e) => setName(e.target.value)} /> </label>
                <label > Tür :
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="Kedi">Kedi</option>
                        <option value="Köpek">Köpek</option>
                        <option value="Kuş">Kuş</option>
                        <option value="Tavşan">Tavşan</option>
                    </select>
                </label>
                <label> Yaş :<input type="text" value={age} onChange={(e) => setAge(e.target.value)} /> </label>
                <label> Şehir :<input type="text" value={city} onChange={(e) => setCity(e.target.value)} /> </label>
                <label> Fotoğraf :<input type="file" accept="image/*" onChange={(e) => setImageUrl(e.target.value)} /> </label>
                <label> Açıklama :<textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea> </label>
                <button type="submit">Gönder</button>
            </form>
        </div>
    );
}
export default AddListing;