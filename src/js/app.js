import * as wmRoot from "./modules/root.js"
import * as wmFunctions from "./modules/functions.js"

wmRoot.isWebp();
wmRoot.project();

const brands = document.querySelector('.brands');

wmFunctions.burgerMenu();
wmFunctions.tabs(brands);
wmFunctions.readMore();
wmFunctions.modal();

