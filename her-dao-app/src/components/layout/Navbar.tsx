"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const LOGO_LIGHT = "https://res.cloudinary.com/dsoojlgg1/image/upload/v1769332904/logo_black_light-mode_zzw5oi.png"
const LOGO_DARK  = "https://res.cloudinary.com/dphncpfbw/image/upload/v1779075198/H.E.R._DAO_WHITE_LOGO_vilbfo.png"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => { setMounted(true) }, [])

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const logoSrc = mounted && resolvedTheme === 'dark' ? LOGO_DARK : LOGO_LIGHT

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container-navbar">
                <Link href="#hero" className="brand">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={logoSrc}
                        alt="H.E.R. DAO"
                        className="navbar-logo"
                        style={{ height: '32px', width: 'auto' }}
                    />
                </Link>
                <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <a href="#hero" className="nav-link" onClick={() => setMenuOpen(false)}>HOME</a>
                    <a href="#achievement" className="nav-link" onClick={() => setMenuOpen(false)}>ACHIEVEMENTS</a>
                    <Link href="#products" className="nav-link" onClick={() => setMenuOpen(false)}>PRODUCTS</Link>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <ThemeToggle />
                    <Link href="https://t.me/herdao" target="_blank" rel="noopener noreferrer" className="button-navbar">
                        <div>Join Us</div>
                    </Link>
                </div>
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
