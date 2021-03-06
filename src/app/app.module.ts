import { CategoryService } from "./category.service";
import { AuthGuard } from "./auth-guard.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule, AngularFireAuth } from "angularfire2/auth";
import { environment } from "../environments/environment";
import { AppNavbarComponent } from "./app-navbar/app-navbar.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ShoppingCartsComponent } from "./shopping-carts/shopping-carts.component";
import { CheckOutComponent } from "./check-out/check-out.component";
import { OrderSuccessComponent } from "./order-success/order-success.component";
import { MyOrderComponent } from "./my-order/my-order.component";
import { AdminProductsComponent } from "./admin/admin-products/admin-products.component";
import { AdminOrdersComponent } from "./admin/admin-orders/admin-orders.component";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AuthService } from "./auth.service";
import { UserService } from "./user.service";
import { AdminAuthGuard } from "./admin-auth-guard.service";
import { ProductFormComponent } from "./admin/product-form/product-form.component";
import { FormsModule } from "../../node_modules/@angular/forms";
import { ProductService } from "./product.service";
import { CustomFormsModule } from "ng2-validation";
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    NotFoundComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      // Accessible for for the Anonymous user
      { path: "", component: ProductsComponent },
      { path: "products", component: ProductsComponent },
      { path: "cart", component: ShoppingCartsComponent },
      { path: "login", component: LoginComponent },
      { path: "404-not-found", component: NotFoundComponent },

      // Restricted for the anonymous user
      {
        path: "check-out",
        component: CheckOutComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "order-success",
        component: OrderSuccessComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "my-order",
        component: MyOrderComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "admin/product/new",
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: "admin/product/:id",
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: "admin/products",
        component: AdminProductsComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: "admin/orders",
        component: AdminOrdersComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      }
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    AdminAuthGuard,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
