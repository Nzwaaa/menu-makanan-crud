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
  
   
      <div style={{ textAlign: "center", marginBottom: "-15px" }}>
        <input
          type="text"
          placeholder="Cari menu ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            maxWidth: "80%",
            borderRadius: "5px",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        />
      </div>
  
      <AddMenu onAdd={handleAddMenu} />
  
      {editingMenu ? (
        <EditMenu menu={editingMenu} onSave={handleSaveMenu} />
      ) : filteredMenuItems.length > 0 ? (
        <MenuList
          menuItems={filteredMenuItems}
          onEdit={handleEditMenu}
          onDelete={handleDeleteMenu}
        />
      ) : (
        <p style={{ textAlign: "center", color: "gray", marginTop: "20px" }}>
          Menu yang Anda cari tidak tersedia.
        </p>
      )}
    </div>
  );
  
};

export default App;
