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
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
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
                <strong style={{ color: '#ffffff' }}>Rust School Cohort 01</strong> is underway — started May 12th.
                Haven&apos;t received your invite?{' '}
                <Link
                    href="mailto:contact@rust-school.xyz"
                    style={{ color: '#c75dff', textDecoration: 'underline', whiteSpace: 'nowrap' }}
                >
                    contact@rust-school.xyz
                </Link>
                {' '}or{' '}
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
                href="https://forms.fillout.com/t/8HzdmCV7c6us"
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