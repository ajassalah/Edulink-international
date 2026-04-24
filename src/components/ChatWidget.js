'use client';
import { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(true); // Open by default for visibility since requested

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-window-header">
            <div className="chat-window-controls">
              <button aria-label="Expand" type="button">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
              </button>
              <button onClick={() => setIsOpen(false)} aria-label="Close" type="button">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <h2>👋 Our team is here for you</h2>
          </div>

          {/* Form Card */}
          <div className="chat-window-body">
            <div className="chat-window-card">
              <div className="chat-card-top">
                <div className="chat-avatar-lg" style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                  <img src="/images/logo.png" alt="EduLink" style={{ width: '80%', height: 'auto', objectFit: 'contain' }} />
                </div>
                <div className="chat-online-badge">
                  <span className="online-dot-small"></span> ONLINE
                </div>
              </div>
              
              <p className="chat-intro-text">
                Hi, please share your contact details and we will get back to you within 24 hrs.
              </p>

              <form className="chat-form" onSubmit={(e) => e.preventDefault()}>
                <div className="chat-form-group">
                  <label>Email <span className="text-red">*</span></label>
                  <input type="email" className="chat-input" required />
                </div>
                
                <div className="chat-form-group">
                  <label>Name <span className="text-red">*</span></label>
                  <input type="text" className="chat-input" required />
                </div>

                <div className="chat-form-group">
                  <label>Phone Number</label>
                  <div className="phone-input-group">
                    <div className="flag-select">
                      <span>🇱🇰</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                    <input type="tel" className="chat-input phone-input" placeholder="+94" />
                  </div>
                </div>

                <button type="submit" className="chat-submit-btn">
                  <span>Start chatting</span>
                  <div className="chat-submit-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </div>
                </button>
              </form>
            </div>

            <div className="chat-footer">
              Powered by{' '}
              <span className="chatway-logo" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginLeft: '4px', fontWeight: 600 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M8 10h.01"></path><path d="M12 10h.01"></path><path d="M16 10h.01"></path></svg>
                chatway
              </span>
            </div>
          </div>
        </div>
      )}
      
      <button className="chat-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Chat" type="button">
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="none">
            <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" fill="white"/>
            <path d="M8 12C9.5 13.5 12.5 13.5 14 12" stroke="#111A41" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        )}
      </button>
    </div>
  );
}
