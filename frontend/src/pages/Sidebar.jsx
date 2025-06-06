import React, { useState } from 'react';
import { FaHome, FaChevronDown, FaChevronRight, FaShieldAlt, FaArrowLeft } from 'react-icons/fa';
import './Sidebar.css';

const menuData = [
  { key: 'PURCHASE', label: 'Purchase', items: ['Purchase Trade', 'Purchase Ledger', 'Purchase Average Rate'] },
  { key: 'SALE', label: 'Sale', items: ['Sale Trade', 'OD', 'Sale Ledger', 'Sale Average Rate'] },
  { key: 'PNL', label: 'PNL', items: ['PNL Report'] },
  { key: 'ORDER', label: 'Order', items: ['Order'] },
  { key: 'DELIVERY', label: 'Delivery', items: ['Delivery'] },
  { key: 'STOCK', label: 'Stock', items: ['Stock'] },
  { key: 'EXPENSES', label: 'Expenses', items: ['Expenses'] },
  { key: 'Accounting', label: 'Accounting', items: ['Accounting'] },
  { key: 'HRM', label: 'HRM', items: ['Employees', 'Attendance', 'Attendance Record', 'Salary Report'] },
  { key: 'Master', label: 'Master', items: ['Party', 'Item Type', 'Packet Size', 'Department', 'User'] },
  { key: 'Backup', label: 'Backup' },
  { key: 'LOGOUT', label: 'LOGOUT' },
];

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = (key) => {
    setOpenMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className={`glass-sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <div className="sidebar-top">
        <div className="logo-section">
          <FaHome className="home-icon" />
          <span className="logo-text">Dashboard</span>
        </div>
        <FaArrowLeft className="toggle-icon" onClick={() => setIsOpen(!isOpen)} />
      </div>
      <ul className="sidebar-menu">
        {menuData.map(({ key, label, items }) => (
          <li key={key} className="menu-group">
            <div
              onClick={() => items && toggleMenu(key)}
              className={`menu-header ${!items ? 'no-submenu' : ''}`}
              style={{ cursor: items ? 'pointer' : 'default' }}
            >
              <span>{label}</span>
              {items ? (openMenus[key] ? <FaChevronDown /> : <FaChevronRight />) : null}
            </div>
            {items && openMenus[key] && (
              <ul className="submenu">
                {items.map((item, idx) => (
                  <li key={idx} className="submenu-item">
                    <FaShieldAlt className="submenu-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
