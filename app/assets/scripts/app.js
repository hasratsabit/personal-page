import $ from "jquery";

import MobileMenu from "./modules/MobileMenu";
import StickyNav from "./modules/StickyNav";
import RevealModule from "./modules/RevealModule";
import Overlay from "./modules/Overlay";
import HeaderReveal from "./modules/HeaderReveal";
import ContactReveal from "./modules/ContactReveal";
import HeaderParallax from "./modules/HeaderParallax";


var mobileMenu = new MobileMenu();
var stickyNav = new StickyNav();
var overlay = new Overlay();
var headerReveal = new HeaderReveal();
var contactReveal = new ContactReveal();
var headerParallax = new HeaderParallax();

new RevealModule($(".proj-box"), "65%");
new RevealModule($(".skills-box"), "80%");
new RevealModule($(".footer-section__footer-content"), "100%");
