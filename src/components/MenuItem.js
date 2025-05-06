import React from "react";

const MenuItem = ({ item, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.category}</td> {/* Menampilkan kategori daripada deskripsi */}
      <td>Rp {item.price}</td>
      <td>
        <button onClick={() => onEdit(item)}>Edit</button>
        <button
          onClick={() => {
            const confirmDelete = window.confirm(`Yakin ingin menghapus menu "${item.name}"?`);
            if (confirmDelete) {
              onDelete(item.id);
            }
          }}
          style={{ marginLeft: "10px", color: "red" }}
        >
          Hapus
        </button>
      </td>
    </tr>
  );
};

export default MenuItem;
