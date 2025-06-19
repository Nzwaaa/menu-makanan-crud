import React from "react";

const MenuItem = ({ item, onEdit, onDelete }) => {
  return (
    <tr className="menu-item">
      <td className="menu-name">
        <div className="menu-name-wrapper">
          <span>{item.name}</span>
        </div>
      </td>
      <td className="menu-category">
        <span className={`category-badge ${item.category.toLowerCase()}`}>
          {item.category}
        </span>
      </td>
      <td className="menu-price">
        <span className="price-value">
          Rp {item.price.toLocaleString("id-ID")}
        </span>
      </td>
      <td className="menu-actions">
        <div className="actions-wrapper">
          <button 
            onClick={() => onEdit(item)} 
            className="btn btn-warning"
          >
            <i className="fas fa-edit"></i> Edit
          </button>
          <button
            onClick={() => {
              if (window.confirm(`Yakin ingin menghapus menu "${item.name}"?`)) {
                onDelete(item.id);
              }
            }}
            className="btn btn-danger"
          >
            <i className="fas fa-trash"></i> Hapus
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MenuItem;