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
    <div className="edit-modal-overlay">
      <div className="edit-modal-container">
        <h2 className="edit-modal-title">Edit Menu</h2>
        <form onSubmit={handleSubmit} className="edit-form">
          <div className="form-group">
            <label>Nama Menu</label>
            <input
              type="text"
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
              required
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={onCancel}
              className="cancel-button"
            >
              Batal
            </button>
            <button
              type="submit"
              className="submit-button"
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMenu;