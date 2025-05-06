import React, { useState } from "react";
import addMenuIcon from '../assets/add_menu.png';

const AddMenu = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Makanan");
  const [price, setPrice] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMenu = { id: Date.now(), name, category, price };
    onAdd(newMenu);
    setName("");
    setCategory("Makanan");
    setPrice("");
    setShowForm(false);
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
            minWidth: "320px",
            width: "90%",
            maxWidth: "400px",
          }}>
            {/* CSS inline style tambahan untuk konsistensi */}
            <style>
              {`
                .input-wrapper label {
                  font-weight: bold;
                  display: block;
                  margin-bottom: 6px;
                }
                .input-wrapper input,
                .input-wrapper select {
                  width: 100%;
                  padding: 10px;
                  border-radius: 6px;
                  border: 1px solid #ccc;
                  box-sizing: border-box;
                }
                .form-button {
                  padding: 10px 16px;
                  border: none;
                  border-radius: 5px;
                  cursor: pointer;
                }
              `}
            </style>

            <form onSubmit={handleSubmit}>
              <h3 style={{ marginBottom: "20px", textAlign: "center" }}>Tambah Menu</h3>

              <div className="input-wrapper" style={{ marginBottom: "16px" }}>
                <label>Nama Menu</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="input-wrapper" style={{ marginBottom: "16px" }}>
                <label>Kategori</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Makanan">Makanan</option>
                  <option value="Minuman">Minuman</option>
                </select>
              </div>

              <div className="input-wrapper" style={{ marginBottom: "20px" }}>
                <label>Harga</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button 
                  type="submit" 
                  className="form-button" 
                  style={{ backgroundColor: "#4CAF50", color: "#fff" }}
                >
                  Simpan
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowForm(false)} 
                  className="form-button" 
                  style={{ backgroundColor: "#ccc", color: "#333" }}
                >
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
