"use client"

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'

gsap.registerPlugin(useGSAP)

export default function Hero() {
    const container = useRef(null)

    // Force scroll to top on refresh
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out",
                duration: 1.2
            }
        })

        // 1. Subtitle entrance
        tl.from(".text-hero-top", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.4
        })

        // 2. Headline - The "Crossing" effect
        tl.from(".hero-line:nth-child(1) .hero-text", {
            x: "100%",
            opacity: 0,
            duration: 1.4,
        }, "-=0.4")

        tl.from(".hero-line:nth-child(2) .hero-text", {
            x: "-100%",
            opacity: 0,
            duration: 1.4,
        }, "-=1.1")

        // 3. "BUILDERS" - Center Fade & Scale
        tl.from(".hero-line:nth-child(3) .hero-text", {
            opacity: 0,
            scale: 0.95,
            y: 20,
            duration: 1.2,
        }, "-=0.8")

        // 4. Bottom Row items
        tl.from(".social-icon", {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "back.out(1.7)",
            onComplete: () => {
                gsap.set(".social-icon", { clearProps: "all" });
            }
        }, "-=0.6")

        tl.from(".text-hero-bottom, .hero-cta", {
            opacity: 0,
            y: 20,
            stagger: 0.2,
            duration: 1,
            clearProps: "all"
        }, "-=0.8")

    }, { scope: container })

    return (
        <section className="section hero home" id="hero" ref={container}>
            <div className="wrapper-content-hero home">
                <div className="hero-top-row">
                    <div className="top-subtitle-hero overflow-hidden">
                        <div className="text-hero-top">
                            <span className="color-purple">Infrastructure</span> ·
                            <span className="color-pink">Education</span> ·
                            <span className="color-blue">Ecosystems</span>
                        </div>
                    </div>
                </div>

                <div className="hero-title-container">
                    <div className="hero-line overflow-hidden">
                        <h1 className="hero-text">WE</h1>
                    </div>
                    <div className="hero-line overflow-hidden">
                        <h1 className="hero-text">BUILD</h1>
                    </div>
                    <div className="hero-line overflow-hidden">
                        <h1 className="hero-text">BUILDERS</h1>
                    </div>
                </div>

                <div className="hero-bottom-row">
                    <div className="social-wrapper-hero">
                        <div className="social-icons">
                            <a href="https://x.com/_HerDAO" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (Twitter)">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="https://t.me/herdao" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Telegram">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M1.101 11.513l21.373-8.191c.96-.368 1.8.216 1.488 1.636l-3.64 16.945c-.272 1.256-1.024 1.56-2.08.96l-5.544-4.04-2.672 2.544c-.296.296-.544.544-1.112.544l.392-5.568 10.168-9.088c.44-.392-.096-.608-.68-.216l-12.568 7.824-5.392-1.672c-1.168-.368-1.192-1.168.248-1.728z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/h.e.r.dao" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/h-e-r-dao/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="https://github.com/H-E-R-DAO" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Github">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Text + CTA */}
                    <div className="bottom-subtext-hero">
                        <div className="text-hero-bottom">
                            Building a sustainable pipeline for the next generation of women developers.
                        </div>
                        <Link href="https://t.me/herdao" target="_blank" rel="noopener noreferrer" className="hero-cta">
                            <span>Join Us</span>
                            <div className="arrow-wrapper">
                                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="overlay-hero"></div>
            <div className="image-hero-video-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://res.cloudinary.com/dsoojlgg1/image/upload/v1769361079/her_dao_-hero_section_1_huvrn2.gif"
                    alt="Hero background"
                    className="image-hero"
                />
            </div>
        </section>
    )
}
