import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [{
    path:"login",
    component: LoginComponent
},
{
    path:"home",
    component: HomeComponent,
},
{
    path:"register",
    component: RegisterComponent,
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
