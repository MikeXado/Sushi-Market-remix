function FooterSocials() {
  return (
    <div className="footer-socials">
      <div className="footer-socials__text">
        Выберите удобный мессенджер для общения
      </div>
      <div className="footer-socials__images">
        <picture>
          <source
            type="image/webp"
            srcSet="https://firebasestorage.googleapis.com/v0/b/romsem-b19b7.appspot.com/o/social-media%2Fwhatsapp.webp?alt=media&token=11107020-9e29-44c8-814e-e6868cbe0a74"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/romsem-b19b7.appspot.com/o/social-media%2Fwhatsapp.png?alt=media&token=ffe76407-53e7-46d9-9200-79d60d53de55"
            alt="whatsapp"
            width="50"
            height="50"
          />
        </picture>
        <picture>
          <source
            type="image/webp"
            srcSet="https://firebasestorage.googleapis.com/v0/b/romsem-b19b7.appspot.com/o/social-media%2Ftelegram.webp?alt=media&token=357f8ea1-bb4f-4344-a3b3-35c5f857175d"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/romsem-b19b7.appspot.com/o/social-media%2Ftelegram.png?alt=media&token=e23f3668-e555-40ec-96ed-408b040b4b49"
            alt="telegram"
            width="50"
            height="50"
          />
        </picture>
        <picture>
          <source
            type="image/webp"
            srcSet="https://firebasestorage.googleapis.com/v0/b/romsem-b19b7.appspot.com/o/social-media%2Finstagram.webp?alt=media&token=09b50066-825f-49f6-8f53-dc8fd2387cb7"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/romsem-b19b7.appspot.com/o/social-media%2Finstagram.png?alt=media&token=36ce300d-4558-4884-bf99-e886c25b3190"
            alt="instagram"
            width="50"
            height="50"
          />
        </picture>
      </div>
    </div>
  );
}

export default FooterSocials;
