import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Search your favourite book .</h2><br />
                <p className='header-text fs-18 fw-3'>An electronic book or an eBook is the digital representation of a book publication that can be accessed on readable platforms of electronic devices like computers, smartphones, or tablets. Although most of the eBooks are available as hard copies, some are only available as soft copies on the internet.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header