import $ from "jquery";

import MobileMenu from "./modules/MobileMenu";
import StickyNav from "./modules/StickyNav";
import RevealModule from "./modules/RevealModule";
import AuthModel from "./modules/AuthModel";
import HeaderReveal from "./modules/HeaderReveal";
import ContactReveal from "./modules/ContactReveal";
import ConstructionOverlay from "./modules/ConstructionOverlay";
import ResumeModel from "./modules/ResumeModel";
import ImageSlider from "./modules/ImageSlider";

var mobileMenu = new MobileMenu();
var stickyNav = new StickyNav();
var authModel = new AuthModel();
var headerReveal = new HeaderReveal();
var contactReveal = new ContactReveal();
var constructorOverlay = new ConstructionOverlay();
var resumeModel = new ResumeModel();

new RevealModule($(".proj-box"), "65%");
new RevealModule($(".skills-box"), "80%");
new RevealModule($(".footer-section__footer-content"), "100%");
