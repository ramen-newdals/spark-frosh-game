import React from "react";

const ContactInfo = () => {

  return (
    <aside class="menu column is-one-fifth">
        <p class="menu-label">
          Questions? Comments? Just want to say hi?
        </p>
        <ul class="menu-list is-size-7">
          <li><a href="mailto:spark@skule.ca">spark@skule.ca</a></li>
          <li><a href="https://www.google.ca/maps/place/University+of+Toronto+Engineering+Society/@43.6600145,-79.3970232,17z/data=!3m1!4b1!4m5!3m4!1s0x882b34b883ceda27:0x5dcfd60a0830b2ea!8m2!3d43.6600106!4d-79.3948345">
            Engineering Society, B740 Sanford Fleming,
            10 King's College Road,
            Toronto, CA</a></li>
          <li>
            <nav class="level">
              <div class="level-item">
                <a href="https://www.facebook.com/sparkuoft">
                  <span class="icon">
                    <i class="fab fa-facebook-square"></i>
                  </span>
                </a>
              </div>
              <div class="level-item">
                <a href="https://www.instagram.com/sparkdesignclub/">
                  <span class="icon">
                    <i class="fab fa-instagram-square"></i>
                  </span></a>
              </div>
              <div class="level-item">
                <a href="https://www.facebook.com/sparkuoft">
                  <span class="icon">
                    <i class="fab fa-youtube-square"></i>
                  </span>
                </a>
              </div>
            </nav>
          </li>
        </ul>
      </aside>
  );
};

export default ContactInfo;

