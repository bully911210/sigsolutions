
import React, { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    document.title = "SIG Solutions - Revenue Operations";
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="/lovable-uploads/sig-solutions-logo.png" alt="SIG Solutions" />
          </div>
          <nav className="desktop-nav">
            <ul>
              <li><a href="#pipeline">Pipeline</a></li>
              <li><a href="#leadership">Leadership</a></li>
              <li><a href="#engagement">Engagement</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="mobile-nav-trigger">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </header>

      <div className="mobile-menu">
        <div className="mobile-menu-close">
          <i className="fa-solid fa-times"></i>
        </div>
        <ul>
          <li><a href="#pipeline">Pipeline</a></li>
          <li><a href="#leadership">Leadership</a></li>
          <li><a href="#engagement">Engagement</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Turn Attention Into Collected Revenue — Reliably.</h1>
              <p className="hero-framework">Click · Close · Collect</p>
              <p className="hero-subheadline">SIG Solutions designs, operates, and manages the full revenue chain for organisations that need consistency, not campaigns.</p>
              <p className="hero-supporting">If your growth depends on leads being followed up, money being collected on time, and systems not breaking under pressure — this is what we do.</p>
              <div className="hero-cta">
                <a href="#contact" className="btn btn-primary">Discuss Revenue Growth</a>
                <a href="#pipeline" className="btn btn-outline">See How We Work</a>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="proof-section">
          <div className="container">
            <div className="proof-grid">
              <div className="proof-item">Operating nationally in South Africa</div>
              <div className="proof-item">Call-centre based execution team</div>
              <div className="proof-item">Built for NGOs, membership organisations, and subscription businesses</div>
              <div className="proof-item">Designed for long-term revenue, not once-off spikes</div>
            </div>
            <p className="positioning-line">We are not a marketing agency. We are an operating partner responsible for outcomes across the full revenue chain.</p>
          </div>
        </section>

        {/* Click. Close. Collect. Section */}
        <section id="pipeline" className="pipeline-section">
          <div className="container">
            <h2 className="section-title">Click · Close · Collect</h2>
            
            {/* Pipeline Overview Cards */}
            <div className="pipeline-cards">
              <div className="pipeline-card">
                <div className="pipeline-card-number">01</div>
                <div className="pipeline-card-icon">
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                <h3>Click</h3>
                <p className="pipeline-card-outcome">Generate qualified leads that your sales team actually wants to call.</p>
              </div>
              
              <div className="pipeline-card">
                <div className="pipeline-card-number">02</div>
                <div className="pipeline-card-icon">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <h3>Close</h3>
                <p className="pipeline-card-outcome">Execute consistent follow-up until prospects commit — no leads go cold.</p>
              </div>
              
              <div className="pipeline-card">
                <div className="pipeline-card-number">03</div>
                <div className="pipeline-card-icon">
                  <i className="fa-solid fa-coins"></i>
                </div>
                <h3>Collect</h3>
                <p className="pipeline-card-outcome">Manage subscriptions and recover failed payments to ensure predictable cashflow.</p>
              </div>
            </div>
            
            {/* Click */}
            <div className="pipeline-block" data-number="01">
              <h3 className="pipeline-title">Click – Lead Generation</h3>
              <p className="pipeline-dominant">Most lead generation fails because volume is chased without accountability.</p>
              
              <div className="pipeline-content">
                <div className="pipeline-col">
                  <h4>What breaks</h4>
                  <ul>
                    <li>Cheap leads that don't convert</li>
                    <li>Sales teams blaming quality</li>
                    <li>Marketing blaming follow-up</li>
                  </ul>
                </div>
                
                <div className="pipeline-col">
                  <h4>What SIG Solutions owns</h4>
                  <ul>
                    <li>Lead source control across paid and data channels</li>
                    <li>Qualification logic aligned to sales and collections</li>
                    <li>Lead standards measured by downstream performance</li>
                  </ul>
                </div>
                
                <div className="pipeline-col">
                  <h4>What the client stops worrying about</h4>
                  <ul>
                    <li>Wasted sales time</li>
                    <li>Endless arguments about lead quality</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Close */}
            <div className="pipeline-block" data-number="02">
              <h3 className="pipeline-title">Close – Sales Support</h3>
              <p className="pipeline-dominant">Sales fails when follow-up is inconsistent and pressure isn't managed.</p>
              
              <div className="pipeline-content">
                <div className="pipeline-col">
                  <h4>What breaks</h4>
                  <ul>
                    <li>Leads go cold</li>
                    <li>Staff turnover kills momentum</li>
                    <li>No visibility into conversations</li>
                  </ul>
                </div>
                
                <div className="pipeline-col">
                  <h4>What SIG Solutions owns</h4>
                  <ul>
                    <li>Trained agents running structured follow-ups</li>
                    <li>Sales activity tracking and accountability</li>
                    <li>Consistent execution from first contact to commitment</li>
                  </ul>
                </div>
                
                <div className="pipeline-col">
                  <h4>What the client stops worrying about</h4>
                  <ul>
                    <li>Whether leads are being contacted</li>
                    <li>Deals dying silently</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Collect */}
            <div className="pipeline-block" data-number="03">
              <h3 className="pipeline-title">Collect – Fund & Subscription Management</h3>
              <p className="pipeline-dominant">Revenue collapses when collections are treated as admin.</p>
              
              <div className="pipeline-content">
                <div className="pipeline-col">
                  <h4>What breaks</h4>
                  <ul>
                    <li>Failed debit orders</li>
                    <li>Unpredictable cashflow</li>
                    <li>Burnt-out internal teams</li>
                  </ul>
                </div>
                
                <div className="pipeline-col">
                  <h4>What SIG Solutions owns</h4>
                  <ul>
                    <li>Subscription and fund collection workflows</li>
                    <li>Failed payment recovery</li>
                    <li>Reporting on collected revenue, not promises</li>
                  </ul>
                </div>
                
                <div className="pipeline-col">
                  <h4>What the client stops worrying about</h4>
                  <ul>
                    <li>Month-end surprises</li>
                    <li>Chasing money internally</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why SIG Solutions Exists */}
        <section className="why-section">
          <div className="container">
            <h2 className="section-title">Why SIG Solutions Exists</h2>
            
            <p>SIG Solutions exists because internal teams struggle once volume increases.</p>
            
            <p className="emphasis-lines">Leads are easy.<br />Sales pressure is not.<br />Collections are where most organisations quietly bleed.</p>
            
            <p>We were built to run the uncomfortable middle:</p>
            <ul className="why-list">
              <li>the follow-ups that don't happen</li>
              <li>the payments that fail</li>
              <li>the systems that break under scale</li>
            </ul>
            
            <p className="why-conclusion">Our role is simple.<br />We take responsibility where most organisations lose control.</p>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="who-section">
          <div className="container">
            <h2 className="section-title">Who This Is For</h2>
            
            <div className="who-grid">
              <div className="who-col">
                <h3>We are a fit if</h3>
                <ul>
                  <li>Your revenue is recurring or subscription-based</li>
                  <li>You rely on people, not just software</li>
                  <li>You care about retention and cashflow stability</li>
                </ul>
              </div>
              
              <div className="who-col">
                <h3>We are not a fit if</h3>
                <ul>
                  <li>You want a once-off campaign</li>
                  <li>You want vanity metrics</li>
                  <li>You avoid operational transparency</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="leadership-section">
          <div className="container">
            <h2 className="section-title">Leadership</h2>
            
            <div className="leadership-grid">
              <div className="leader-card">
                <h3>Johannes Stoker</h3>
                <p className="leader-title">Managing Director</p>
                <p className="leader-responsibility">Responsible for execution, client alignment, and operational delivery.</p>
              </div>
              
              <div className="leader-card">
                <h3>Franz Badenhorst</h3>
                <p className="leader-title">Sales & Revenue Operations</p>
                <p className="leader-responsibility">Oversees lead generation strategy, sales systems, and revenue performance.</p>
              </div>
              
              <div className="leader-card">
                <h3>Charles Castle</h3>
                <p className="leader-title">Client & Commercial Operations</p>
                <p className="leader-responsibility">Ensures delivery consistency, reporting, and long-term outcomes.</p>
              </div>
              
              <div className="leader-card">
                <h3>Ivan Taljard</h3>
                <p className="leader-title">Technology & Systems</p>
                <p className="leader-responsibility">Responsible for infrastructure, automation, and data integrity.</p>
              </div>
            </div>
            
            <p className="leadership-note">Leadership is structured around responsibility, not titles.</p>
          </div>
        </section>

        {/* How Engagement Works */}
        <section id="engagement" className="engagement-section">
          <div className="container">
            <h2 className="section-title">How Engagement Works</h2>
            
            <div className="engagement-grid">
              <div className="engagement-item">Revenue pipeline scoped end-to-end</div>
              <div className="engagement-item">Responsibilities defined upfront</div>
              <div className="engagement-item">Performance tracked continuously</div>
              <div className="engagement-item">Reporting focused on outcomes, not activity</div>
            </div>
            
            <div className="engagement-performance">
              <h3>When performance dips</h3>
              <ul>
                <li>It is visible immediately</li>
                <li>Causes are identified operationally</li>
                <li>Adjustments are made without finger-pointing</li>
              </ul>
            </div>
            
            <p className="engagement-note">This is a working relationship, not a marketing retainer.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <h2 className="section-title">Let's Talk Revenue Consistency</h2>
            
            <p className="contact-intro">If you are evaluating partners, replacing internal strain, or fixing a broken revenue process, we'll tell you quickly whether we are a fit.</p>
            
            <p className="contact-principles">No pitch decks.<br />No pressure.<br />Just a clear conversation.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong> <a href="mailto:sales@sigsolutions.co.za">sales@sigsolutions.co.za</a>
              </div>
              <div className="contact-item">
                <strong>Location:</strong> Riviera, Pretoria, South Africa
              </div>
              <div className="contact-item">
                <strong>Business hours:</strong> Monday to Friday, 08:00 to 17:00
              </div>
            </div>
            
            <div className="contact-cta">
              <a href="mailto:sales@sigsolutions.co.za" className="btn btn-primary">Start the Conversation</a>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-line">SIG Solutions operates where lead generation, sales execution, and collections meet.<br />We don't optimise parts. We run the whole.</p>
          <p className="footer-copyright">&copy; 2025 SIG Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
