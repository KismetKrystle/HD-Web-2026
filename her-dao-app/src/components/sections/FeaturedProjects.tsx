"use client"

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'

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

        // Product cards - Fade in (sticky effect is CSS)
        gsap.from(".product-card", {
            scrollTrigger: {
                trigger: ".product-list",
                start: "top 70%",
            },
            opacity: 0,
            y: 80,
            stagger: 0.3,
            duration: 1,
            ease: "power2.out"
        });
    }, { scope: container })

    const products = [
        {
            title: "H.E.R. DAO Labs",
            desc: "Innovation hub for blockchain development and research.",
            badges: ["Branding", "Platform"],
            zIndex: 3
        },
        {
            title: "Hero Network",
            desc: "Decentralized infrastructure platform empowering Web3 builders.",
            badges: ["Infrastructure", "Platform"],
            zIndex: 2
        },
        {
            title: "H.E.R. CON",
            desc: "Annual blockchain conference celebrating women in Web3.",
            badges: ["Event", "Community"],
            zIndex: 1
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
                                    <div className="product-badges">
                                        {product.badges.map((badge, bIdx) => (
                                            <span key={bIdx} className="badge">{badge}</span>
                                        ))}
                                    </div>
                                    <h3 className="product-title">{product.title}</h3>
                                    <p className="product-description">{product.desc}</p>
                                    <Link href="#" className="button-navbar dark">
                                        <div>view product</div>
                                    </Link>
                                </div>
                                <div className="product-image">
                                    <div className="product-image-placeholder">PRODUCT IMAGE</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
