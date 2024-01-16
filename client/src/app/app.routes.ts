import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TrainerComponent } from './trainer/trainer.component';
import { RoleComponent } from './role/role.component';
import { TraineeComponent } from './trainee/trainee.component';
import { AccountraineeComponent } from './accountrainee/accountrainee.component';
import { AccountrainerComponent } from './accountrainer/accountrainer.component';

export const routes: Routes = [{
    path:"login",
    component: LoginComponent
},
{
    path:"home",
    component: HomeComponent,
},
{
    path:"register/trainer",
    component: TrainerComponent,
},
{
    path: 'register/trainee', 
    component: TraineeComponent,
},
{
    path: 'register/:role', 
    component: RoleComponent
},
{
    path: 'accountrainee',
    component: AccountraineeComponent
},
{
    path: 'accountrainer',
    component: AccountrainerComponent
},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
