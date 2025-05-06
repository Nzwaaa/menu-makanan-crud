import React from "react";

const MenuItem = ({ item, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>Rp {item.price.toLocaleString("id-ID")}</td>
      <td>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => onEdit(item)}
            style={{
              padding: "6px 12px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              const confirmDelete = window.confirm(`Yakin ingin menghapus menu "${item.name}"?`);
              if (confirmDelete) {
                onDelete(item.id);
              }
            }}
            style={{
              padding: "6px 12px",
              backgroundColor: "#dc3545",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Hapus
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MenuItem;
