import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core'
import { HomeComponent } from './home/home.component';
import { TrainerComponent } from './registerTrainer/trainer.component';
import { RoleComponent } from './role/role.component';
import { TraineeComponent } from './registerTrainee/trainee.component';
import { AccountraineeComponent } from './AccountTrainee/accountrainee/accountrainee.component';
import { AccountrainerComponent } from './AccountTrainer/accountrainer/accountrainer.component';
import { TologComponent } from './tolog/tolog.component';
import { LoginTrainerComponent } from './loginTrainer/logintrainer.component';
import { LoginTraineeComponent } from './loginTrainee/logintrainee.component';
import { SettingstraineeComponent } from './AccountTrainee/settingsTrainee/settingsTrainee.component';

export const routes: Routes = [{
    path:"logintrainer",
    component: LoginTrainerComponent
},
{
    path:"logintrainee",
    component: LoginTraineeComponent,
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
    path: 'register/role', 
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
{
    path: 'tolog/role',
    component: TologComponent
},
{
    path: 'settingsTrainer',
    component: TologComponent
},
{
    path: 'settingsTrainee',
    component: SettingstraineeComponent
},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
