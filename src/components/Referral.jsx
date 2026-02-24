import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { FadeIn } from './reactbits'
import LightRays from './reactbits/LightRays'
import './Referral.css'

const Referral = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="section-divider"></div>
      <section id="referral" className="referral section">
        <div className="container">
          <FadeIn direction="up" distance={40} duration={0.6}>
            <div className="section-header">
              <h2>{t('referral.title')}</h2>
              <p className="section-description">
                {t('referral.description')}
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" distance={50} duration={0.7} delay={0.2}>
            <div className="referral-card-wrapper">
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
              <div className="referral-card">
                <div className="referral-content">
                  <div className="referral-icon">💰</div>
                  <h3>{t('referral.cardTitle')}</h3>
                  <p className="referral-main-text">
                    <Trans
                      i18nKey="referral.mainText"
                      components={{ br: <br />, strong: <strong /> }}
                    />
                  </p>
                  <div className="referral-details">
                    <div className="referral-detail-item">
                      <span className="referral-percentage">5-10%</span>
                      <span className="referral-detail-label">{t('referral.commission')}</span>
                    </div>
                    <div className="referral-divider"></div>
                    <div className="referral-detail-item">
                      <span className="referral-percentage">{t('referral.firstInvoice')}</span>
                      <span className="referral-detail-label">{t('referral.paymentSource')}</span>
                    </div>
                    <div className="referral-divider"></div>
                    <div className="referral-detail-item">
                      <span className="referral-percentage">{t('referral.easy')}</span>
                      <span className="referral-detail-label">{t('referral.process')}</span>
                    </div>
                  </div>
                  <p className="referral-footer-text">
                    {t('referral.footerText')}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default Referral
