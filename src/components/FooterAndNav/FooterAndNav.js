import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const FooNav=()=>{
    const [activeNavItem, setActiveNavItem] = useState('');

  const handleQuickLinkClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  return (
    <div>
      <NavBar activeNavItem={activeNavItem} />
      <Footer onQuickLinkClick={handleQuickLinkClick} />
    </div>
  );
};
export default FooNav;