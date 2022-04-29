import "./Footer.scss";
import logo from '../assets/images/logo.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__signup">
        <span>Be the first to know about new arrivals</span>
        <a href="#">
          <button>Sign up</button>
        </a>
      </div>
      <div className="footer__container">
        <div className="container">
          <div className="footer__container__1">
            <div className="footer__container__listitem__left">
                
              <div className="footer__container__1__item">
                <a href="#">Help</a>
                <a href="#">Sale Exclusions</a>
                <a href="#">Sale Exclusions</a>
                <a href="#">Sale Exclusions</a>
              </div>
              <div className="footer__container__1__item">
                <a href="#">Help</a>
                <a href="#">Sale Exclusions</a>
                <a href="#">Sale Exclusions</a>
                <a href="#">Sale Exclusions</a>
              </div>
              <div className="footer__container__1__item">
                <a href="#">Help</a>
                <a href="#">Sale Exclusions</a>
                <a href="#">Sale Exclusions</a>
                <a href="#">Sale Exclusions</a>
              </div>
              <div className="footer__container__1__item">
                <a href="#">Help</a>
                <a href="#">Sale Exclusions</a>
                <a href="#">Sale Exclusions</a>
                <a href="#">Sale Exclusions</a>
              </div>
            </div>
            <div className="footer__container__listitem__right">
                <a className="footer__logo" href="">
                    <img src={logo} alt="" />
                </a>
                
                <span>Independent since 1906, we empower people through sport and craftsmanship to create positive change in communities around the world</span>
                <ul className="footer__social__meida">
                    <li> <a href="#"><i class='bx bxl-instagram'></i></a></li>
                    <li> <a href="#"><i class='bx bxl-facebook-square'></i></a></li>
                    <li> <a href="#"><i class='bx bxl-twitter' ></i>    </a></li>
                    <li> <a href="#"><i class='bx bxl-youtube' ></i></a></li>

                </ul>
            
            </div>
          </div>
          <div className="footer__container__2">

              <div className="footer__container__2__brands">
                  <span>New Balance family of brands</span>
                  <a href="">
                      <img src="https://www.newbalance.com/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw4cb62335/images/homepage/footer/brine-logo.svg" alt="" />
                  </a>
                  <a href="">
                      <img src="https://www.newbalance.com/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw4cb62335/images/homepage/footer/brine-logo.svg" alt="" />
                  </a>
                  <a href="">
                      <img src="https://www.newbalance.com/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw4cb62335/images/homepage/footer/brine-logo.svg" alt="" />
                  </a>
              </div>
              <div className="footer__container__2__last">
                  <div className="footer__container__2__last__item">
                      <div className="footer__store">
                        <a className="footer__store__link" href="">
                          <i class='bx bxs-edit-location'></i>
                          Find a store
                          </a>
                        
                      </div>
                  </div>
                  <div className="footer__container__2__last__item">
                      <div className="footer__country">
                        <a href="#"><img src="data:image/png;base64,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" alt="" /></a>
                        <p>US</p>
                      </div>
                  </div>

                  <div className="footer__container__2__last__item">
                      <span> <a href=""> Privacy </a></span>
                      <span> <a href=""> Polycy </a></span>
                  </div>
                  <div className="footer__container__2__last__item">
                      <span> <a href=""> Website Terms  </a></span>
                      <span> <a href=""> Website Terms  </a></span>
                  </div>
                  <div className="footer__container__2__last__item">
                      <span> <a href=""> myNB Rewards  </a></span>
                      <span> <a href=""> Website Terms  </a></span>
                  </div>
                  <div className="footer__container__2__last__item">
                      <span> <a href=""> CA Supply Chains Act (SB 657) and Modern Slavery Act Terms  </a></span>
                      <span> <a href=""> Website Terms  </a></span>
                  </div>
                  <div className="footer__container__2__last__item">
                      <span> <a href=""> Do Not Sell My Personal  </a></span>
                      <span> <a href=""> Website Terms  </a></span>
                  </div>
                  <div className="footer__container__2__last__item xxx">
                      <span>Copyright 2020, New Balance</span>
                  </div>
                  

              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
