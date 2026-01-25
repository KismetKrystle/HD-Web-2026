import Link from 'next/link'

export default function Footer() {
    return (
        <footer id="contact" className="footer">
            <div className="footer-container">
                <div className="footer-cta">
                    <h2 className="footer-title">Let's Talk</h2>
                </div>

                <div className="footer-content">
                    <div className="footer-info">
                        <div className="info-group">
                            <span className="info-label">Email:</span>
                            <span className="info-value">hello@herdao.org</span>
                        </div>
                        <div className="info-group">
                            <span className="info-label">Twitter:</span>
                            <span className="info-value">@herdao</span>
                        </div>
                    </div>

                    <div className="footer-social">
                        <Link href="#" className="social-link">Twitter</Link>
                        <Link href="#" className="social-link">Telegram</Link>
                        <Link href="#" className="social-link">GitHub</Link>
                        <Link href="#" className="social-link">Instagram</Link>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2025 H.E.R. DAO. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
