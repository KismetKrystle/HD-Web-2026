"use client"

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function ServiceCards() {
    const container = useRef(null)
    const [activeSlide, setActiveSlide] = useState(0)

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

        // DESKTOP: Service cards reveal
        gsap.fromTo(".service-cards-desktop .service-card",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".service-cards-desktop",
                    start: "top 80%",
                }
            }
        );

        // MOBILE: Service cards reveal
        gsap.fromTo(".service-cards-mobile .service-card",
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".service-cards-mobile",
                    start: "top 85%",
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
            image: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1769342056/herdao_defi_nnfccj.png"
        },
        {
            id: "05",
            title: "Content Creation",
            desc: "Media and storytelling studio amplifying women's voices in blockchain.",
            image: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1769341270/her_dao_content_creation_bssyp9.png"
        }
    ]

    const nextSlide = () => {
        setActiveSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setActiveSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1))
    }

    return (
        <section id="services" className="section products-section" ref={container}>
            <div className="container">
                <div className="section-header left">
                    <div className="label-wrapper">
                        <span className="label-dot"></span>
                        <span className="label-text">PRODUCTS</span>
                    </div>
                    <div className="overflow-hidden">
                        <h2 className="section-title">FULL-SPECTRUM<br /><span className="color-pink">DEVELOPMENT</span></h2>
                    </div>
                </div>

                {/* DESKTOP BLOCK: List view */}
                <div className="service-cards-desktop">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="service-number">{service.id}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <div className="service-image-wrapper">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="service-card-img"
                                />
                            </div>
                            <p className="service-description">{service.desc}</p>
                        </div>
                    ))}
                </div>

                {/* MOBILE BLOCK: Carousel view */}
                <div className="service-cards-mobile">
                    {services.map((service, index) => (
                        <div key={service.id} className={`service-card ${index === activeSlide ? 'active' : ''}`}>
                            <div className="service-card-header">
                                <div className="service-number">{service.id}</div>
                                <h3 className="service-title">{service.title}</h3>
                            </div>
                            <div className="service-image-wrapper">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="service-card-img"
                                />
                            </div>
                            <p className="service-description">{service.desc}</p>
                        </div>
                    ))}

                    <div className="mobile-carousel-nav">
                        <button onClick={prevSlide} className="nav-arrow prev" aria-label="Previous service">
                            <ArrowLeft size={24} />
                        </button>
                        <button onClick={nextSlide} className="nav-arrow next" aria-label="Next service">
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
