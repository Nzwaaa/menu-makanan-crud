import React, { useState, useEffect } from "react";

const EditMenu = ({ menu, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: menu.name,
    category: menu.category,
    price: menu.price
  });

  useEffect(() => {
    setFormData({
      name: menu.name,
      category: menu.category,
      price: menu.price
    });
  }, [menu]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMenu = { ...menu, ...formData };
    onSave(updatedMenu);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Edit Menu</h2>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nama Menu</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category" className="form-label">Kategori</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="Makanan">Makanan</option>
                <option value="Minuman">Minuman</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="price" className="form-label">Harga (Rp)</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button
                type="button"
                onClick={onCancel}
                className="btn btn-danger"
              >
                Batal
              </button>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditMenu;