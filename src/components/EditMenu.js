import React, { useState, useEffect } from "react";

const EditMenu = ({ menu, onSave, onCancel }) => {
  const [name, setName] = useState(menu.name);
  const [category, setCategory] = useState(menu.category); // Menggunakan kategori
  const [price, setPrice] = useState(menu.price);

  useEffect(() => {
    setName(menu.name);
    setCategory(menu.category); // Menambahkan setCategory
    setPrice(menu.price);
  }, [menu]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMenu = { ...menu, name, category, price }; // Menyertakan kategori
    onSave(updatedMenu);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
          width: "400px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Edit Menu</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          
          <div>
            <label style={{ fontWeight: "bold", display: "block", marginBottom: "6px" }}>
              Nama Menu
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ padding: "10px", width: "100%", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>

          <div>
            <label style={{ fontWeight: "bold", display: "block", marginBottom: "6px" }}>
              Kategori
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              style={{ padding: "10px", width: "100%", borderRadius: "5px", border: "1px solid #ccc" }}
            >
              <option value="Makanan">Makanan</option>
              <option value="Minuman">Minuman</option>
            </select>
          </div>

          <div>
            <label style={{ fontWeight: "bold", display: "block", marginBottom: "6px" }}>
              Harga
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              style={{ padding: "10px", width: "100%", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
            <button
              type="submit"
              style={{
                padding: "10px 16px",
                backgroundColor: "#4CAF50",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Simpan
            </button>
            <button
              type="button"
              onClick={onCancel}
              style={{
                padding: "10px 16px",
                backgroundColor: "#ccc",
                color: "#333",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Batal
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditMenu;
