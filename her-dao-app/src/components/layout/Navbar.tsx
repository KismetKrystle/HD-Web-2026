"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container-navbar">
                <Link href="/" className="brand">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://res.cloudinary.com/dsoojlgg1/image/upload/v1769332904/logo_black_light-mode_zzw5oi.png"
                        alt="H.E.R. DAO"
                        className="navbar-logo"
                        style={{ height: '32px', width: 'auto' }}
                    />
                </Link>
                <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <Link href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>HOME</Link>
                    <Link href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>ABOUT</Link>
                    <Link href="#products" className="nav-link" onClick={() => setMenuOpen(false)}>PRODUCTS</Link>
                </div>
                <Link href="#contact" className="button-navbar">
                    <div>let's talk</div>
                </Link>
                <div
                    className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}
