import React, { useState } from 'react';
import {
  FaHome,
  FaChevronDown,
  FaChevronRight,
  FaShieldAlt,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa';
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

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setOpenMenus({}); // optional: close all submenus when collapsed
    }
  };

  return (
    <div className={`glass-sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <div className="sidebar-top">
        <div className="logo-section">
          <FaHome className="home-icon" />
          {isOpen && <span className="logo-text">Dashboard</span>}
        </div>
        <div className="toggle-icon" onClick={toggleSidebar}>
          {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
        </div>
      </div>

      <ul className="sidebar-menu">
        {menuData.map(({ key, label, items }) => (
          <li key={key} className={`menu-group ${openMenus[key] ? 'open' : ''}`}>
            <div
              className={`menu-header ${!items ? 'no-submenu' : ''}`}
              onClick={() => items && toggleMenu(key)}
            >
              <span>{label}</span>
              {items && isOpen && (
                <span className="chevron-icon">
                  {openMenus[key] ? <FaChevronDown /> : <FaChevronRight />}
                </span>
              )}
            </div>

            {items && openMenus[key] && isOpen && (
              <ul className="submenu">
                {items.map((item, idx) => (
                  <li key={idx} className="submenu-item">
                    <FaShieldAlt className="submenu-icon" />
                    <span className="submenu-text">{item}</span>
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
