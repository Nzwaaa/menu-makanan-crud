import React, { useState } from "react";
import MenuList from "./components/MenuList";
import AddMenu from "./components/AddMenu";
import EditMenu from "./components/EditMenu";

const App = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Nasi Goreng", description: "Nasi goreng dengan telur", price: 15000 },
    { id: 2, name: "Mie Ayam", description: "Mie dengan ayam panggang", price: 12000 },
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

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Daftar Menu Makanan</h1>
      <AddMenu onAdd={handleAddMenu} />
      {editingMenu ? (
        <EditMenu menu={editingMenu} onSave={handleSaveMenu} />
      ) : (
        <MenuList menuItems={menuItems} onEdit={handleEditMenu} onDelete={handleDeleteMenu} />
      )}
    </div>
  );
};

export default App;
