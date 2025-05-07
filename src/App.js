import React, { useState } from "react";
import './styles/MenuApp.css';
import './styles/App.css';
import './components/app-bar.js'
import MenuList from "./components/MenuList";
import AddMenu from "./components/AddMenu";
import EditMenu from "./components/EditMenu";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Nasi Goreng", category: "Makanan", price: 15000 },
    { id: 2, name: "Mie Ayam", category: "Makanan", price: 12000 },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [menuToEdit, setMenuToEdit] = useState(null);

  const handleAddMenu = (newMenu) => {
    setMenuItems([...menuItems, newMenu]);
  };

  const handleEditMenu = (menu) => {
    setMenuToEdit(menu);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setMenuToEdit(null);
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
    setIsEditing(false);
    setMenuToEdit(null);
  };

  const filteredMenuItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
    <h1 className="app-title">Daftar Menu Makanan</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Cari menu ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <AddMenu onAdd={handleAddMenu} />

      {isEditing ? (
        <EditMenu menu={menuToEdit} onSave={handleSaveMenu} onCancel={handleCancel}/>
      ) : filteredMenuItems.length > 0 ? (
        <MenuList
          menuItems={filteredMenuItems}
          onEdit={handleEditMenu}
          onDelete={handleDeleteMenu}
        />
      ) : (
        <p className="no-menu-message">
          Menu yang Anda cari tidak tersedia.
        </p>
      )}
    </div>
  );
};

export default App;