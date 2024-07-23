import React from 'react';


const LandingPage = () => {
  const links = [
    { url: 'https://portfolio-steph.vercel.app/', label: 'Portfolio', icon:'fa-solid fa-code'},
    { url: 'https://github.com/EffySolorzano', label: 'GitHub', icon: 'fa-brands fa-github' },
    { url: 'https://www.linkedin.com/in/stephcsolorzanom/', label: 'LinkedIn', icon: 'fa-brands fa-linkedin' },
    { url: 'https://www.instagram.com/cocuymami/', label: 'Instagram', icon:'fa-brands fa-instagram' },
    
 
  ];

  return (
    <main className="landing-page bg">
      <div className="profile-section">
      <img src="/steph.jpg" alt="Profile" className="profile-pic" />
        <h2 className="title">Stephanie Solórzano</h2>
        <h3 className="text-left">I'm a Junior Front-End Developer from 🇻🇪 ✨ and located in Europe. I have a passion for creating beautiful 
        <br/>and functional websites and landing pages. My background is in illustration, which brings a unique artistic perspective 
        <br/> to web design and development. <br/>Combining my love for art and technology, I craft visually engaging and user-friendly
        <br/> experiences that captivate and delight. <br/>Explore my work and see how I can bring your digital vision to life.</h3>
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
