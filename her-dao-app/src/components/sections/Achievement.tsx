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
                const finalString = numberElement.textContent || "0";
                // Extract prefix, suffix, and the numeric value
                const prefix = finalString.match(/^\$/) ? '$' : '';
                const suffix = finalString.match(/[k\+]+$/) ? finalString.match(/[k\+]+$/)![0] : '';
                const numericValue = parseInt(finalString.replace(/[^\d]/g, ''));

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
                                const roundedVal = Math.ceil(obj.val);
                                const formattedVal = roundedVal.toLocaleString();
                                numberElement.textContent = prefix + formattedVal + suffix;
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
                            <span className="label-text">achievements</span>
                        </div>
                        <div className="overflow-hidden">
                            <h2 className="section-title">Beyond Influence</h2>
                        </div>
                        <p className="achievement-intro">
                            Influence goes beyond aesthetics; it shifts perception, inspires conversation, and sets new standards. We help women express clarity and power in Web3.
                        </p>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">1,000+</div>
                            <p className="stat-text">Scholars supported</p>
                        </div>

                        <div className="stat-item">
                            <div className="stat-number">20+</div>
                            <p className="stat-text">Hackathons</p>
                        </div>

                        <div className="stat-item">
                            <div className="stat-number">$300k+</div>
                            <p className="stat-text">Won in prizes</p>
                        </div>

                        <div className="stat-item">
                            <div className="stat-number">10+</div>
                            <p className="stat-text">Hacker Houses</p>
                        </div>

                        <div className="stat-item">
                            <div className="stat-number">100+</div>
                            <p className="stat-text">Hacker teams</p>
                        </div>

                        <div className="stat-item">
                            <div className="stat-number">6,000+</div>
                            <p className="stat-text">Attendees</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
