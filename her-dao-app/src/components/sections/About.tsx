"use client"

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function About() {
    const container = useRef(null)

    useGSAP(() => {
        // Floating 3D element - Parallax effect
        gsap.to(".floating-element", {
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
            y: -100,
            rotation: 15,
            ease: "none"
        });

        // Title lines - Staggered reveal
        gsap.from(".section-title", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%",
            },
            y: "100%",
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out"
        });

        // Description fade in
        gsap.from(".about-description", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 60%",
            },
            opacity: 0,
            y: 30,
            duration: 0.8
        });

        // Partner logos - Staggered fade
        gsap.from(".partner-card", {
            scrollTrigger: {
                trigger: ".partner-logos",
                start: "top 80%",
            },
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.6
        });

    }, { scope: container })

    return (
        <section id="about" className="section about-us" ref={container}>
            <div className="container">
                <div className="about-content">

                    {/* Floating 3D Element */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&h=800&fit=crop"
                        alt="3D Element"
                        className="floating-element" />

                    {/* Header */}
                    <div className="section-header">
                        <div className="label-wrapper">
                            <span className="label-dot"></span>
                            <span className="label-text">about us</span>
                        </div>

                        {/* Title Lines */}
                        <div className="title-wrapper">
                            <div className="overflow-hidden">
                                <h2 className="section-title">Empowering Women</h2>
                            </div>
                            <div className="overflow-hidden">
                                <h2 className="section-title">In Blockchain</h2>
                            </div>
                            <div className="overflow-hidden">
                                <h2 className="section-title">Building Tomorrow</h2>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="about-description">
                        <p>H.E.R. DAO is committed to increasing diversity and inclusion in Web3, creating a sustainable pipeline for women developers and fostering innovation through education and community.</p>
                        <Link href="#" className="text-link">Read more →</Link>
                    </div>

                    {/* Partner Logos */}
                    <div className="partner-logos">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="partner-card">
                                <div className="partner-placeholder">PARTNER {i}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
