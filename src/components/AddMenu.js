import React, { useState } from "react";
import addMenuIcon from '../assets/add.png';

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
          className="floating-add-button"
        >
          <img 
            src={addMenuIcon} 
            alt="Tambah Menu" 
            className="add-button-icon"
          />
        </button>
      ) : (
        <>
          <div className="modal-backdrop" onClick={() => setShowForm(false)} />
  
          <div className="add-menu-modal">
            <form onSubmit={handleSubmit} className="menu-form">
              <h3 className="form-title">Tambah Menu Baru</h3>
              
              <div className="form-group">
                <label>Nama Menu</label>
                <input
                  type="text"
                  placeholder="Contoh: Nasi Goreng Special"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label>Kategori</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="form-select"
                >
                <option value="Makanan">Makanan</option>
                <option value="Minuman">Minuman</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Harga (Rp)</label>
                <input
                  type="number"
                  placeholder="25000"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-actions">
                <button type="button" onClick={() => setShowForm(false)} className="cancel-button">
                  Batal
                </button>
                <button type="submit" className="submit-button">
                  Tambah Menu
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