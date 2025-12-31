import React from 'react'
import { FadeIn, TiltedCard } from './reactbits'
import LightRays from './reactbits/LightRays'
import './Referral.css'

const Referral = () => {
    return (
        <>
            <div className="section-divider"></div>
            <section id="referral" className="referral section">
                <div className="container">
                    <FadeIn direction="up" distance={40} duration={0.6}>
                        <div className="section-header">
                            <h2>Referral Program</h2>
                            <p className="section-description">
                                Earn money by referring companies that need mobile app development
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" distance={50} duration={0.7} delay={0.2}>
                        <TiltedCard
                            className="referral-card"
                            rotateAmplitude={15}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip={false}
                        >
                            <LightRays
                                raysOrigin="center"
                                raysColor="#88c444"
                                raysSpeed={0.3}
                                lightSpread={2}
                                rayLength={4}
                                followMouse={true}
                                pulsating={true}
                                fadeDistance={0.7}
                                className="referral-light-rays"
                            />
                            <div className="referral-content">
                                <div className="referral-icon">💰</div>
                                <h3>Refer & Earn</h3>
                                <p className="referral-main-text">
                                    Know a company that needs an app? Refer them to us and earn <strong>5-10%</strong> of their first invoice!
                                </p>
                                <div className="referral-details">
                                    <div className="referral-detail-item">
                                        <span className="referral-percentage">5-10%</span>
                                        <span className="referral-detail-label">Commission</span>
                                    </div>
                                    <div className="referral-divider"></div>
                                    <div className="referral-detail-item">
                                        <span className="referral-percentage">1st Invoice</span>
                                        <span className="referral-detail-label">Payment Source</span>
                                    </div>
                                    <div className="referral-divider"></div>
                                    <div className="referral-detail-item">
                                        <span className="referral-percentage">Easy</span>
                                        <span className="referral-detail-label">Process</span>
                                    </div>
                                </div>
                                <p className="referral-footer-text">
                                    Help businesses grow while earning rewards for yourself
                                </p>
                            </div>
                        </TiltedCard>
                    </FadeIn>
                </div>
            </section>
        </>
    )
}

export default Referral

