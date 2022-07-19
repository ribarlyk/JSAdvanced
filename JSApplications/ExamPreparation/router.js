import page from './node_modules/page/page.mjs';
import {homeView} from './homeView.js'
import { loginView } from './loginView.js';
import { regView } from './registerView.js';
import { edit } from './editBookView.js';
import { addBook } from './addBookView.js';
import { logOutView } from './logOutView.js';

export function router(){
page('/home',homeView);
page('/login',loginView);
page('/register',regView);
page('/myBook',edit);
page('/addBook',addBook);
page('/logout',logOutView);


page.start()}