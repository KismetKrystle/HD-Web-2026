"use client"

import { useEffect } from 'react'

interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    // Close modal on ESC key press
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    ×
                </button>

                <h2 className="modal-title">Get in Touch</h2>
                <p className="modal-subtitle">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>

                <form
                    action="https://formsubmit.co/contact@her-dao.xyz"
                    method="POST"
                    className="contact-form"
                >
                    {/* FormSubmit Configuration */}
                    <input type="hidden" name="_subject" value="New contact form submission from H.E.R. DAO website" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />

                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-input"
                            required
                            placeholder="Your name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-input"
                            required
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="form-input"
                            required
                            placeholder="What's this about?"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="form-textarea"
                            required
                            placeholder="Tell us more..."
                        />
                    </div>

                    <button type="submit" className="form-submit">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}
