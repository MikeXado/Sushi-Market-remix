import FooterLinks from "../footer/FooterLinks";
import FooterContacts from "../footer/FooterContacts";
import FooterSocials from "../footer/FooterSocials";
import React from "react";
export default React.memo(function Footer() {
  return (
    <div className="footer">
      <div className="footer__horizontal-line"></div>
      <div className="footer-content">
        <FooterLinks />
        <div className="footer-content__vertical-line"></div>
        <FooterSocials />
        <div className="footer-content__vertical-line"></div>
        <FooterContacts />
      </div>
    </div>
  );
});
