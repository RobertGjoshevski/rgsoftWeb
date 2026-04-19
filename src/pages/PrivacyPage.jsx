import React from 'react'
import { FadeIn } from '../components/reactbits'
import './PrivacyPage.css'

const PrivacyPage = () => {
  return (
    <>
      <section className="privacy section">
        <div className="container">
          <FadeIn direction="up" distance={30} duration={0.6}>
            <div className="section-header">
              <h1>Privacy policy</h1>
              <p className="section-description privacy-updated">
                Last updated: April 19, 2026
              </p>
            </div>
          </FadeIn>

          <div className="privacy-content">
            <FadeIn delay={0.05} direction="up" distance={30} duration={0.6} className="privacy-block">
              <h2>Overview</h2>
              <p className="privacy-body">
                This page describes how The Impostor website (the game you play in your browser)
                handles information, including when we show ads and when third-party vendors process
                data on our behalf.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} direction="up" distance={30} duration={0.6} className="privacy-block">
              <h2>Advertising</h2>
              <p className="privacy-body">
                We may display advertisements on this site. Ad delivery and measurement can involve
                processing of device and usage data by advertising partners to show relevant ads,
                limit how often you see an ad, and detect fraud.
              </p>
              <p className="privacy-body">
                Google is a vendor we use for advertising and related services (for example, Google
                AdSense or other Google advertising products when enabled on this site). Google’s
                use of information is described in Google’s policies; see{' '}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-link"
                >
                  How Google uses information from sites or apps that use our services
                </a>{' '}
                and{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-link"
                >
                  Google Privacy &amp; Terms
                </a>
                .
              </p>
            </FadeIn>

            <FadeIn delay={0.15} direction="up" distance={30} duration={0.6} className="privacy-block">
              <h2>Cookies and similar technologies</h2>
              <p className="privacy-body">
                We and our vendors (including Google) may use cookies, local storage, pixels, and
                similar technologies for purposes such as remembering preferences, serving and
                personalizing ads, measuring performance, and keeping the service reliable and
                secure.
              </p>
              <p className="privacy-body">
                You can control cookies through your browser settings. Blocking or deleting cookies
                may affect how the site or ads behave.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} direction="up" distance={30} duration={0.6} className="privacy-block">
              <h2>Local data in the game</h2>
              <p className="privacy-body">
                Parts of the game may store information locally in your browser (for example, scores
                or settings) so the experience works offline or across visits. That data stays on
                your device unless you clear it.
              </p>
            </FadeIn>

            <FadeIn delay={0.25} direction="up" distance={30} duration={0.6} className="privacy-block">
              <h2>Changes</h2>
              <p className="privacy-body">
                We may update this policy from time to time. The “Last updated” date at the top
                will change when we do.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPage
