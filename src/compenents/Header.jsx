import "./Header.scss";
import { Link } from "react-router-dom";

const HeaderBannerData = {
  display: "Free shipping on orders $50+Details",
  country: "US",
  countryImg:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/285px-Flag_of_the_United_States_%28Pantone%29.svg.png",
};

const HeaderBanner = (props) => {
  return (
    <div className="header__banner__bg">
      <div className="header__banner container">
        <div className="header__banner__content">
          <span>{props.bannerContent.display}</span>
        </div>
        <div className="header__banner__location">
          <a href="#" className="header__banner__location__store">
            <i class="bx bxs-edit-location"></i>
            <span href="#">Find a store</span>
          </a>
          <a href="#">
            <img src={props.bannerContent.countryImg} alt="" />
          </a>
          <span>{props.bannerContent.country}</span>
        </div>
      </div>
    </div>
  );
};

const mainNav = [
  {
    display: "New",
    path: "/new",
  },
  {
    display: "Men",
    path: "/men",
  },
  {
    display: "Women",
    path: "/women",
  },
];

const Header = () => {
  return (
    <div className="main__header">
      <HeaderBanner bannerContent={HeaderBannerData} />
      <div className="container">
        <div className="header">
          <div className="header__logo">
            <Link to="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6mB8tvS5KzmjyeJDYb9CaqhvMsu86b2VfJw&usqp=CAU"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="header__navbar">
            <div className="header__navbar__list">
              {mainNav.map((item, index) => {
                return (
                  <Link key={index} to={item.path}>
                    <span className="header__navbar__item">{item.display}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="header__right">
            <div className="header__right__search">
              <input type="text" />
             <div className="search__icon">
             <i class="bx bx-search-alt-2"></i>
             </div>
            </div>
            <div className="header__right__user">
              <i class="bx bx-user"></i>
              <a className="header__right__user__login" href="#">Login</a>
              <a href="#">Join</a>
            </div>
            <div className="header__right__cart">
              <div className="cart__icon">
                <i class="bx bx-cart-alt"></i>
              </div>
            </div>
            <div className="header__right__cart header__right__menu">
              <div className="cart__icon menu__icon">
              <i class='bx bx-menu-alt-left' ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
