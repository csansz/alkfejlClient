import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProductFormComponent } from './product-form/product-form.component';

import { MatToolbarModule, MatButtonToggleModule, MatIconModule, MatButtonModule, MatMenuModule, MatFormFieldModule, MatInputModule,MatSelectModule, MatOption } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { BarListComponent } from './bar-list/bar-list.component';
import { BarFormComponent } from './bar-form/bar-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';





@NgModule({
  declarations: [

    AppComponent,
    ProductListComponent,
    UserListComponent,
    BarListComponent,
    LoginFormComponent,
    ProductFormComponent,
    BarFormComponent,
    UserFormComponent,
    RegisterFormComponent,

  ],
  imports: [
    MatSelectModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    
  ],
  exports: [ProductFormComponent],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
