"use client"

import Link from 'next/link'
import { ArrowRight, X } from 'lucide-react'
import { useState } from 'react'

export default function RustSchoolBanner() {
    const [visible, setVisible] = useState(true)

    if (!visible) return null

    return (
        <div style={{
            width: '100%',
            backgroundColor: '#1a0a2e',
            borderBottom: '1px solid rgba(199, 93, 255, 0.3)',
            padding: '12px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            position: 'relative',
            zIndex: 1002,
        }}>
            {/* Live pill */}
            <span style={{
                backgroundColor: 'rgba(199, 93, 255, 0.15)',
                border: '1px solid rgba(199, 93, 255, 0.5)',
                color: '#c75dff',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                padding: '3px 10px',
                borderRadius: '999px',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
            }}>
                🦀 Live Now
            </span>

            {/* Message */}
            <span style={{
                color: '#e8d5ff',
                fontSize: '14px',
                fontWeight: 500,
                textAlign: 'center',
            }}>
                <strong style={{ color: '#ffffff' }}>Rust School Cohort 02</strong> is starting soon— to begin June 23rd.
                Have you joined?{' '}
                <Link
                    href="https://t.me/herdao"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#c75dff', textDecoration: 'underline', whiteSpace: 'nowrap' }}
                >
                    message us on Telegram
                </Link>
            </span>

            {/* CTA */}
            <Link
                href="https://luma.com/22b2hyx3"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: '#c75dff',
                    color: '#ffffff',
                    fontSize: '13px',
                    fontWeight: 700,
                    padding: '6px 16px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.02em',
                }}
            >
                Apply Now <ArrowRight size={14} />
            </Link>

            {/* Dismiss */}
            <button
                onClick={() => setVisible(false)}
                aria-label="Dismiss banner"
                style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'rgba(232, 213, 255, 0.5)',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <X size={16} />
            </button>
        </div>
    )
}