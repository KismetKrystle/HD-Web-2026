import Link from 'next/link'

export default function Footer() {
    return (
        <footer id="contact" className="footer">
            <div className="footer-container">
                <div className="footer-cta">
                    <Link href="https://t.me/herdao" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h2 className="footer-title">Let's Talk</h2>
                    </Link>
                </div>

                <div className="footer-content">
                    <div className="footer-info">
                        <div className="info-group">
                            <span className="info-label">Email:</span>
                            <span className="info-value">hello@herdao.org</span>
                        </div>
                        <div className="info-group">
                            <span className="info-label">X:</span>
                            <span className="info-value">@herdao</span>
                        </div>
                    </div>

                    <div className="footer-social">
                        <Link href="https://x.com/_HerDAO" target="_blank" rel="noopener noreferrer" className="social-link">X</Link>
                        <Link href="https://t.me/herdao" target="_blank" rel="noopener noreferrer" className="social-link">Telegram</Link>
                        <Link href="https://github.com/H-E-R-DAO" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</Link>
                        <Link href="https://www.instagram.com/h.e.r.dao" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</Link>
                    </div>

                    <div className="footer-bottom">
                        <div className="footer-brand">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://res.cloudinary.com/dsoojlgg1/image/upload/v1769332904/logo_black_light-mode_zzw5oi.png"
                                alt="H.E.R. DAO"
                                className="footer-logo"
                                style={{ height: '24px', marginBottom: '12px', opacity: 0.8 }}
                            />
                            <p>&copy; 2026 H.E.R. DAO. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
