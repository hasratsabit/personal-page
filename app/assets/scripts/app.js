import $ from "jquery";

import MobileMenu from "./modules/MobileMenu";
import StickyNav from "./modules/StickyNav";
import RevealModule from "./modules/RevealModule";
import Overlay from "./modules/Overlay";

var mobileMenu = new MobileMenu();
var stickyNav = new StickyNav();
var overlay = new Overlay();


new RevealModule($(".proj-box"), "65%", "reveal-item", "reveal-item--is-visible");
new RevealModule($(".skills-box"), "80%", "reveal-item", "reveal-item--is-visible");
new RevealModule($(".footer-section__footer-content"), "100%", "reveal-item", "reveal-item--is-visible");
new RevealModule($(".contact-form .input-group"), "80%", "slide-down", "slide-down--is-visible");
