import React, { useState, useEffect } from "react";

const EditMenu = ({ menu, onSave, onCancel }) => {
  const [name, setName] = useState(menu.name);
  const [category, setCategory] = useState(menu.category);
  const [price, setPrice] = useState(menu.price);

  useEffect(() => {
    setName(menu.name);
    setCategory(menu.category);
    setPrice(menu.price);
  }, [menu]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMenu = { ...menu, name, category, price };
    onSave(updatedMenu);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
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
              border-radius: 5px;
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

        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Edit Menu</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <div className="input-wrapper">
            <label>Nama Menu</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-wrapper">
            <label>Kategori</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="Makanan">Makanan</option>
              <option value="Minuman">Minuman</option>
            </select>
          </div>

          <div className="input-wrapper">
            <label>Harga</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <button
              type="submit"
              className="form-button"
              style={{ backgroundColor: "#4CAF50", color: "#fff" }}
            >
              Simpan
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="form-button"
              style={{ backgroundColor: "#ccc", color: "#333" }}
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
