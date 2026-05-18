"use client"

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

// --- Type definition ---
type Product = {
    title: string
    desc: string
    badges: string[]
    image: string
    link?: string
    linkLabel?: string       // optional — falls back to "Connect" if not set
    curriculumUrl?: string   // optional — renders a secondary text link if provided
}

export default function FeaturedProjects() {
    const container = useRef(null)

    useGSAP(() => {
        gsap.from(".section-title", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%",
            },
            y: "100%",
            duration: 0.8,
            ease: "power2.out"
        });

        gsap.from(".product-card-inner", {
            scrollTrigger: {
                trigger: ".product-list",
                start: "top 70%",
            },
            opacity: 0,
            y: 80,
            stagger: 0.3,
            duration: 1,
            ease: "power2.out",
            clearProps: "all"
        });
    }, { scope: container })

    const products: Product[] = [
        {
            title: "Rust School 🦀",
            desc: "Beginner-to-intermediate Rust program built around systems thinking, real projects, and production code. Cohort 01 is live — applications open now.",
            badges: ["Education", "Live Now"],
            image: "https://res.cloudinary.com/dphncpfbw/image/upload/v1779064470/rustflyer1_tj1nfm.jpg", // ← upload Image 1 to Cloudinary and paste the URL here
            link: "https://forms.fillout.com/t/8HzdmCV7c6us",
            linkLabel: "Apply Now",
            curriculumUrl: "https://res.cloudinary.com/dphncpfbw/image/upload/v1779064470/rustflyer1schedule_waxo1x.jpg" // ← upload Image 2 to Cloudinary and paste here
        },
        {
            title: "Herō Network",
            desc: "Decentralized infrastructure platform empowering Web3 builders.",
            badges: ["Infrastructure", "Platform"],
            image: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1769340952/hero_mjk1fz.svg",
            link: "https://heronetwork.xyz",
            linkLabel: "Connect"
        },
        {
            title: "H.E.R. DAO Labs",
            desc: "Innovation hub for blockchain development and research.",
            badges: ["Development", "Incubator"],
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "H.E.R. CON",
            desc: "Annual blockchain conference celebrating women in Web3.",
            badges: ["Event", "Community"],
            image: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1769339672/her-con-flyer_qahw3f.avif"
        }
    ]

    return (
        <section id="products" className="section featured-products" ref={container}>
            <div className="container">
                <div className="section-header">
                    <div className="label-wrapper">
                        <span className="label-dot"></span>
                        <span className="label-text">featured products</span>
                    </div>
                    <div className="overflow-hidden">
                        <h2 className="section-title">
                            Featured<br />
                            <span className="title-accent">Products</span>
                        </h2>
                    </div>
                </div>

                <div className="product-list">
                    {products.map((product, idx) => (
                        <div key={idx} className="product-card">
                            <div className="product-card-inner">
                                <div className="product-content">
                                    <div className="product-header">
                                        <div className="product-badges">
                                            {product.badges.map((badge, bIdx) => (
                                                <span key={bIdx} className="badge">{badge}</span>
                                            ))}
                                        </div>
                                        <h3 className="product-title">{product.title}</h3>
                                    </div>
                                    <p className="product-description">{product.desc}</p>

                                    {product.link ? (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                            <Link
                                                href={product.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="button-navbar dark view-project-btn"
                                            >
                                                <div>{product.linkLabel ?? "Connect"}</div>
                                                <ArrowRight size={16} />
                                            </Link>
                                            {product.curriculumUrl && (
                                                <Link
                                                    href={product.curriculumUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        fontSize: '14px',
                                                        fontWeight: 500,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.5px',
                                                        color: '#ffffff',
                                                        textDecoration: 'underline',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '8px',
                                                        transition: 'opacity 0.2s',
                                                    }}
                                                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                                                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                                                >
                                                    View Curriculum
                                                </Link>
                                            )}
                                        </div>
                                    ) : (
                                        <div
                                            className="button-navbar dark view-project-btn"
                                            style={{ visibility: 'hidden', pointerEvents: 'none' }}
                                        >
                                            <div>Connect</div>
                                            <ArrowRight size={16} />
                                        </div>
                                    )}
                                </div>
                                <div className="product-image">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
