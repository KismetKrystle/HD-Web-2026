"use client"

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function FeaturedProjects() {
    const container = useRef(null)

    useGSAP(() => {
        // Title animation
        gsap.from(".section-title", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%",
            },
            y: "100%",
            duration: 0.8,
            ease: "power2.out"
        });

        // Product cards - Fade in (target inner content to avoid breaking sticky parent)
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

    const products = [
        {
            title: "H.E.R. DAO Labs",
            desc: "Innovation hub for blockchain development and research.",
            badges: ["Branding", "Platform"],
            zIndex: 3,
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Hero Network",
            desc: "Decentralized infrastructure platform empowering Web3 builders.",
            badges: ["Infrastructure", "Platform"],
            zIndex: 2,
            image: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1769340952/hero_mjk1fz.svg"
        },
        {
            title: "H.E.R. CON",
            desc: "Annual blockchain conference celebrating women in Web3.",
            badges: ["Event", "Community"],
            zIndex: 1,
            image: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1769339672/her-con-flyer_qahw3f.avif"
        }
    ]

    return (
        <section className="section featured-products" ref={container}>
            <div className="container">
                <div className="section-header">
                    <div className="label-wrapper">
                        <span className="label-dot"></span>
                        <span className="label-text">featured products</span>
                    </div>
                    <div className="overflow-hidden">
                        <h2 className="section-title">
                            Empowering<br />
                            <span className="title-accent">Ecosystems</span>
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
                                    {/* <Link href="#" className="button-navbar dark view-project-btn">
                                        <div>View Project</div>
                                        <ArrowRight size={16} />
                                    </Link> */}
                                </div>
                                <div className="product-image">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
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
