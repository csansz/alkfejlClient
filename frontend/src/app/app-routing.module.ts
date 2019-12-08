import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AuthGuard } from './auth.guard';
import { BarListComponent } from './bar-list/bar-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'bars',
    component: BarListComponent,
    canActivate: [ AuthGuard ]
  },

  {
    path: 'users',
    component: UserListComponent,
    canActivate: [ AuthGuard ]
  },
 
  {
    path: 'login',
    component: LoginFormComponent
  },

  {
    path: 'register',
    component: RegisterFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
