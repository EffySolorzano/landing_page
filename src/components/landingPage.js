import React from 'react';


const LandingPage = () => {
  const links = [
    { url: 'https://portfolio-steph.vercel.app/', label: 'Portfolio', icon:'fa-solid fa-code'},
    { url: 'https://github.com/EffySolorzano', label: 'GitHub', icon: 'fa-brands fa-github' },
    { url: 'https://www.linkedin.com/in/stephcsolorzanom/', label: 'LinkedIn', icon: 'fa-brands fa-linkedin' },
    { url: 'https://www.instagram.com/cocuymami/', label: 'Instagram', icon:'fa-brands fa-instagram' },
    
 
  ];

  return (
    <main className="landing-page">
      <div className="profile-section">
        <img src="/123.jpg" alt="Profile" className="profile-pic" />
        <h1>Stephanie Solórzano</h1>
        <p>Front End Dev & Illustrator</p>
      </div>
      <div className="button-links">
        {links.map((link, index) => (
          <button key={index} onClick={() => window.open(link.url, '_blank')} className="link-button">
             <i className={link.icon} style={{ marginRight: '8px' }}></i>
            {link.label}
          </button>
        ))}
      </div>
    </main>
  );
};

export default LandingPage;
