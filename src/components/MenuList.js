import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ menuItems, onEdit, onDelete }) => {
  return (
    <div className="menu-list-container">
      {menuItems.length === 0 ? (
        <div className="empty-state">
          <i className="fas fa-utensils empty-icon"></i>
          <p>Belum ada menu yang tersedia. Tambahkan menu pertama Anda!</p>
        </div>
      ) : (
        <table className="menu-table" cellPadding="10" cellSpacing="0">
          <thead>
            <tr className="table-header">
            <th style={{ width: "30%" }}>Nama Menu</th>
            <th style={{ width: "20%" }}>Kategori</th>
            <th style={{ width: "20%" }}>Harga</th>
            <th style={{ width: "10%" }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} onEdit={onEdit} onDelete={onDelete} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MenuList;