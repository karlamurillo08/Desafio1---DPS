// Footer.js
import React from 'react';
import styles from'../page.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footercontent}>
        <p>&copy; 2024 Tienda de Libros. Todos los derechos reservados.</p>
        <div className={styles.socialicons}>
          <a href="#"><img src="https://th.bing.com/th/id/R.69855ba8415bd8cf925ac061fcb69f21?rik=j2MqjYYSTFqMNA&pid=ImgRaw&r=0" alt="Facebook" /></a>
          <a href="#"><img src="https://vectorseek.com/wp-content/uploads/2023/07/Twitter-X-Logo-Vector-01-2.jpg" alt="Twitter" /></a>
          <a href="#"><img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-square1-1024.png" alt="Instagram" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
