"use client"

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Achievement() {
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

        // Intro text
        gsap.from(".achievement-intro", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 65%",
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.2
        });

        // Stats - Staggered reveal with number count-up
        const stats = gsap.utils.toArray<HTMLElement>(".stat-item");
        stats.forEach((stat) => {
            gsap.from(stat, {
                scrollTrigger: {
                    trigger: ".stats-grid",
                    start: "top 80%",
                },
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: "power2.out"
            });

            // Number count-up animation
            const numberElement = stat.querySelector('.stat-number');
            if (numberElement) {
                const finalNumberString = numberElement.textContent || "0";
                const hasPlus = finalNumberString.includes('+');
                const numericValue = parseInt(finalNumberString.replace(/\D/g, ''));

                ScrollTrigger.create({
                    trigger: stat,
                    start: "top 80%",
                    onEnter: () => {
                        const obj = { val: 0 };
                        gsap.to(obj, {
                            val: numericValue,
                            duration: 2,
                            ease: "power1.out",
                            onUpdate: function () {
                                numberElement.textContent = Math.ceil(obj.val) + (hasPlus ? '+' : '');
                            }
                        });
                    },
                    once: true
                });
            }
        });

    }, { scope: container })

    return (
        <section id="achievement" className="section achievement" ref={container}>
            <div className="container">
                <div className="achievement-content">
                    <div className="section-header left">
                        <div className="label-wrapper">
                            <span className="label-dot"></span>
                            <span className="label-text">achievement</span>
                        </div>
                        <div className="overflow-hidden">
                            <h2 className="section-title">Beyond Influence</h2>
                        </div>
                        <p className="achievement-intro">
                            Influence goes beyond aesthetics; it shifts perception, inspires conversation, and sets new standards. We help women express clarity and power in Web3.
                        </p>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-item large">
                            <div className="stat-number">200+</div>
                            <p className="stat-text">Women trained in blockchain development</p>
                        </div>

                        <div className="stat-item">
                            <div className="stat-number">30+</div>
                            <p className="stat-text">Projects launched by H.E.R. DAO members</p>
                        </div>

                        <div className="stat-item">
                            <div className="stat-number">12</div>
                            <p className="stat-text">Partner organizations supporting our mission</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
