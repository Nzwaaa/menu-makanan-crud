import React from "react";

const MenuItem = ({ item, onEdit, onDelete }) => {
  return (
    <tr className="menu-item-row">
      <td className="menu-name">{item.name}</td>
      <td className="menu-category">{item.category}</td>
      <td className="menu-price">Rp {item.price.toLocaleString("id-ID")}</td>
      <td className="menu-actions">
        <div className="button-edit-delete">
        <button 
          onClick={() => onEdit(item)} 
          className="edit-button"
        >
          <i className="fas fa-edit"></i>Edit
        </button>
        <button
          onClick={() => {
            const confirmDelete = window.confirm(`Yakin ingin menghapus menu "${item.name}"?`);
            if (confirmDelete) {
              onDelete(item.id);
            }
          }}
          className="delete-button"
        >
          <i className="fas fa-trash"></i>Hapus
        </button>
        </div>
      </td>
    </tr>
  );
};

export default MenuItem;