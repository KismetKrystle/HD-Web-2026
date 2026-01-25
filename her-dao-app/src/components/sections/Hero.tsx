"use client"

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import { X, Linkedin, Github, Instagram } from 'lucide-react'

gsap.registerPlugin(useGSAP)

export default function Hero() {
    const container = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "power2.out",
                duration: 1
            }
        })

        // Animate subtitle
        tl.from(".hero-subtitle", {
            y: "100%",
            duration: 0.8,
            delay: 0.3
        })

        // Animate first line of headline (WE BUILD - From Right)
        tl.from(".hero-text.line-1", {
            x: "100%", // Comes from right
            duration: 1.2,
            ease: "power2.out"
        }, "-=0.5")

        // Animate second line of headline (BUILDERS - From Left)
        tl.from(".hero-text.line-2", {
            x: "-100%", // Comes from left
            duration: 1.2,
            ease: "power2.out"
        }, "-=0.9")

        // Animate description
        tl.from(".hero-description", {
            y: "100%",
            duration: 1,
        }, "-=0.7")

        // Animate button
        tl.from(".button-navbar.large", {
            opacity: 0,
            y: 20,
            duration: 0.6
        }, "-=0.4")

    }, { scope: container })

    return (
        <section id="home" className="section hero" ref={container}>
            {/* Background Video */}
            <video className="hero-video" autoPlay loop muted playsInline>
                <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
            </video>

            {/* Gradient Overlay */}
            <div className="hero-overlay"></div>

            {/* Content */}
            <div className="hero-content">
                <div className="hero-wrapper">
                    {/* Top Subtitle */}
                    <div className="overflow-hidden">
                        <div className="hero-subtitle">
                            Building the Future of Web3
                        </div>
                    </div>

                    {/* Main Headline - Staggered */}
                    <div className="hero-headline-wrapper">
                        <div className="overflow-hidden">
                            <div className="hero-text line-1">
                                WE BUILD
                            </div>
                        </div>
                        <div className="overflow-hidden">
                            <div className="hero-text line-2">
                                BUILDERS
                            </div>
                        </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="hero-bottom-group">
                        <div className="hero-description">
                            Infrastructure, education, and ecosystems for the next generation.
                        </div>

                        <Link href="#contact" className="button-navbar large">
                            <div>let's talk</div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Social Icons - Absolute Bottom */}
            <div className="social-row">
                <Link href="#" className="social-icon"><X size={40} /></Link>
                <Link href="#" className="social-icon"><Linkedin size={40} /></Link>
                <Link href="#" className="social-icon"><Github size={40} /></Link>
                <Link href="#" className="social-icon"><Instagram size={40} /></Link>
            </div>
        </section>
    )
}
