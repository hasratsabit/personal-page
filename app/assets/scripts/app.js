import $ from "jquery";

import MobileMenu from "./modules/MobileMenu";
import StickyNav from "./modules/StickyNav";
import RevealModule from "./modules/RevealModule";

var mobileMenu = new MobileMenu();
var stickyNav = new StickyNav();


new RevealModule($(".proj-box"), "65%", "reveal-item", "reveal-item--is-visible");
new RevealModule($(".skills-box"), "80%", "reveal-item", "reveal-item--is-visible");
new RevealModule($(".footer-section__footer-content"), "100%", "reveal-item", "reveal-item--is-visible");
new RevealModule($(".input-group"), "80%", "slide-down", "slide-down--is-visible");
