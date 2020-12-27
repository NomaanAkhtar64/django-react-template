import React from "react";

export interface SocialLink {
  icon: string;
  text: string;
  url: string;
}

interface FooterProps {
  creditURL: string;
  socials: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({ creditURL, socials }) => {
  return (
    <footer>
      <div className="social-links">
        {socials.map((soc, i) => (
          <div className="link">
            <img src={soc.icon} alt="" />
            <a href={soc.url}>{soc.text}</a>
          </div>
        ))}
      </div>
      <div className="caption">
        <a href={creditURL}>Website by Nomaan Akhtar</a>
      </div>
    </footer>
  );
};

export default Footer;
