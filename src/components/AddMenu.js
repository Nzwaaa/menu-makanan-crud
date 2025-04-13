import React, { useState } from "react";
import addMenuIcon from '../assets/add_menu.png';

const AddMenu = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [showForm, setShowForm] = useState(false); // 🔥 state untuk tampilkan form

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMenu = { id: Date.now(), name, description, price };
    onAdd(newMenu);
    setName("");
    setDescription("");
    setPrice("");
    setShowForm(false); // 🔥 sembunyikan form setelah simpan
  };

  return (
    <div>
      {!showForm ? (
        <button 
          onClick={() => setShowForm(true)} 
          style={{ 
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 9999 
          }}
        >
          <img 
            src={addMenuIcon} 
            alt="Tambah Menu" 
            style={{ 
              width: "60px", 
              height: "60px", 
              borderRadius: "50%", 
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease"
            }} 
            onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
            onMouseOut={(e) => e.target.style.transform = "scale(1)"}
          />
        </button>
      ) : (
        <>
          {/* 🔥 Background Blur */}
          <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(5px)",
            zIndex: 9998
          }} onClick={() => setShowForm(false)} />
  
          {/* 🔥 Modal Form */}
          <div style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            zIndex: 9999,
            minWidth: "300px"
          }}>
            <form onSubmit={handleSubmit}>
              <h3 style={{ marginBottom: "20px", textAlign: "center" }}>Tambah Menu</h3>
              <input
                type="text"
                placeholder="Nama Menu"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
              />
              <input
                type="text"
                placeholder="Deskripsi"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
              />
              <input
                type="number"
                placeholder="Harga"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                style={{ width: "100%", padding: "8px", marginBottom: "20px" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button type="submit" style={{ padding: "8px 16px" }}>Simpan</button>
                <button type="button" onClick={() => setShowForm(false)} style={{ padding: "8px 16px" }}>
                  Batal
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
  
};

export default AddMenu;
