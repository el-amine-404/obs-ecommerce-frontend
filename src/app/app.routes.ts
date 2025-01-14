import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ROUTES } from './core/constants/routes';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopSingleComponent } from './pages/shop/shop-single/shop-single.component';
import { LoginComponent } from './pages/login/login.component';
import { CartListComponent } from './pages/cart/cart-list/cart-list.component';
import { CartDetailsComponent } from './pages/cart/cart-details/cart-details.component';

export const routes: Routes = [
  { path: '', redirectTo: ROUTES.HOME.PATH, pathMatch: 'full'},
  { path: ROUTES.HOME.PATH ,title:ROUTES.HOME.TITLE, component: HomeComponent},
  { path: ROUTES.ABOUT.PATH ,title:ROUTES.ABOUT.TITLE, component: AboutComponent},
  { path: ROUTES.SHOP.PATH ,title:ROUTES.SHOP.TITLE, component: ShopComponent},
  { path: ROUTES.SHOP_SINGLE.PATH ,title:ROUTES.SHOP_SINGLE.TITLE, component: ShopSingleComponent},
  { path: ROUTES.CART_LIST.PATH ,title:ROUTES.CART_LIST.TITLE, component: CartListComponent},
  { path: ROUTES.CART_DETAILS.PATH ,title:ROUTES.CART_DETAILS.TITLE, component: CartDetailsComponent},
  { path: ROUTES.CONTACT.PATH ,title:ROUTES.CONTACT.TITLE, component: ContactComponent},
  { path: ROUTES.LOGIN.PATH ,title:ROUTES.LOGIN.TITLE, component: LoginComponent},
];
