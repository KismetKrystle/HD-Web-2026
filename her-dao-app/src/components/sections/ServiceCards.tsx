"use client"

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function ServiceCards() {
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

        // Service cards - Staggered reveal
        gsap.fromTo(".service-card",
            { opacity: 0, y: 50 }, // Start state
            {
                opacity: 1,
                y: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".service-cards",
                    start: "top 85%", // Trigger when top of container hits 85% of viewport height
                    toggleActions: "play none none reverse" // Re-plays if you scroll back up
                }
            }
        );

    }, { scope: container })

    const services = [
        {
            id: "01",
            title: "Dev Camp",
            desc: "Intensive developer training programs designed to accelerate blockchain skill development.",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: "02",
            title: "Web3 University",
            desc: "Educational platform providing comprehensive Web3 courses and certifications.",
            image: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1769341349/web3_university_acynrm.png"
        },
        {
            id: "03",
            title: "Cyber Security",
            desc: "Security audit and training services to protect blockchain infrastructure.",
            image: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1769341331/her_dao_cyber_security_z2wp6t.png"
        },
        {
            id: "04",
            title: "DeFi",
            desc: "Decentralized finance solutions and infrastructure for the future of money.",
            image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: "05",
            title: "Content Creation",
            desc: "Media and storytelling studio amplifying women's voices in blockchain.",
            image: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1769341270/her_dao_content_creation_bssyp9.png"
        }
    ]

    return (
        <section id="products" className="section products-section" ref={container}>
            <div className="container">
                <div className="section-header left">
                    <div className="label-wrapper">
                        <span className="label-dot"></span>
                        <span className="label-text">PRODUCTS</span>
                    </div>
                    <div className="overflow-hidden">
                        <h2 className="section-title">FULL-SPECTRUM<br />DEVELOPMENT</h2>
                    </div>
                </div>

                <div className="service-cards">
                    {services.map((service, index) => (
                        <div key={service.id} className="service-card">
                            <div className="service-card-content">
                                <div className="service-number">{service.id}</div>
                                <h3 className="service-title">{service.title}</h3>
                            </div>
                            <div className="service-image-wrapper">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                                />
                            </div>
                            <p className="service-description">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
