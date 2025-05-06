import React, { useState } from "react";
import MenuList from "./components/MenuList";
import AddMenu from "./components/AddMenu";
import EditMenu from "./components/EditMenu";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Nasi Goreng", category: "Makanan", price: 15000 },
    { id: 2, name: "Mie Ayam", category: "Makanan", price: 12000 },
  ]);

  const [editingMenu, setEditingMenu] = useState(null);

  const handleAddMenu = (newMenu) => {
    setMenuItems([...menuItems, newMenu]);
  };

  const handleEditMenu = (menu) => {
    setEditingMenu(menu);
  };

  const handleDeleteMenu = (id) => {
    const updatedMenuItems = menuItems.filter((item) => item.id !== id);
    setMenuItems(updatedMenuItems);
  };

  const handleSaveMenu = (updatedMenu) => {
    const updatedMenuItems = menuItems.map((item) =>
      item.id === updatedMenu.id ? updatedMenu : item
    );
    setMenuItems(updatedMenuItems);
    setEditingMenu(null);
  };

  
  const filteredMenuItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Daftar Menu</h1>

      {/* 🔍 Search Bar */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        <input
          type="text"
          placeholder="Cari menu ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "8px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <AddMenu onAdd={handleAddMenu} />

      {editingMenu ? (
        <EditMenu menu={editingMenu} onSave={handleSaveMenu} />
      ) : (
        <MenuList
          menuItems={filteredMenuItems}
          onEdit={handleEditMenu}
          onDelete={handleDeleteMenu}
        />
      )}
    </div>
  );
};

export default App;
