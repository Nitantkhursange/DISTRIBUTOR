import React, { useState } from 'react';
import {
  FaHome,
  FaArrowLeft,
  FaChevronDown,
  FaChevronRight,
  FaShieldAlt,
  FaBars
} from 'react-icons/fa';

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
  { key: 'Backup', label: 'Backup' },  // no items here
  { key: 'LOGOUT', label: 'LOGOUT' },  // no items here
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
    <>
      <div className="mobile-toggle d-lg-none animate-fadein" onClick={() => setIsOpen(!isOpen)}>
        <FaBars size={22} />
      </div>
      <div className={`glass-sidebar neon-glow ${isOpen ? 'open animate-slidein-left' : 'collapsed animate-slideout-left'}`}>
        <div className="sidebar-top">
          <div className="logo-section animate-pulse">
            <FaHome className="home-icon" size={20} />
            <span className="logo-text gradient-text">Dashboard</span>
          </div>
          <FaArrowLeft className="toggle-icon d-none d-lg-inline" onClick={() => setIsOpen(!isOpen)} />
        </div>

        <ul className="sidebar-menu">
          {menuData.map(({ key, label, items }) => (
            <li key={key} className="menu-group">
              <div
                onClick={() => items && toggleMenu(key)}  // toggle only if submenu exists
                className={`menu-header animate-hover ${!items ? 'no-submenu' : ''}`}
                style={{ cursor: items ? 'pointer' : 'default' }}
              >
                <span>{label}</span>
                {/* Show arrow only if submenu exists */}
                {items ? (openMenus[key] ? <FaChevronDown /> : <FaChevronRight />) : null}
              </div>
              {/* Render submenu only if items present */}
              {items && (
                <ul className={`submenu ${openMenus[key] ? 'open animate-dropdown' : ''}`}>
                  {items.map((item, idx) => (
                    <li key={idx} className="submenu-item animate-slidein-up">
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
    </>
  );
};

export default Sidebar;
