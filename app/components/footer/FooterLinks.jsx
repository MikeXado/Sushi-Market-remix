import { footerLinks } from "~/constants";

function FooterLinks() {
  return (
    <div className="footer-links">
      <ul className="footer-links__body">
        {footerLinks.map((link) => {
          return (
            <li key={link.id} className="footer-links__item">
              <button className="footer-links__link">{link.text}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterLinks;
