import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { HomeComponent } from './home/home.component';
import { TrainerComponent } from './registerTrainer/trainer.component';
import { RoleComponent } from './role/role.component';
import { TraineeComponent } from './registerTrainee/trainee.component';
import { DietraineeComponent } from './AccountTrainee/dietrainee/dietrainee.component';
import { AccountrainerComponent } from './AccountTrainer/accountrainer/accountrainer.component';
import { TologComponent } from './tolog/tolog.component';
import { LoginTrainerComponent } from './loginTrainer/logintrainer.component';
import { LoginTraineeComponent } from './loginTrainee/logintrainee.component';
import { SettingstraineeComponent } from './AccountTrainee/settingsTrainee/settingsTrainee.component';
import { ProfileTraineeComponent } from './AccountTrainee/profileTrainee/profileTrainee.component';

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
    path: 'accountrainee/profileTrainee',
    component: ProfileTraineeComponent
},
{
    path: 'accountrainee/dietrainee',
    component: DietraineeComponent
},
{
    path: 'accountrainee/settingsTrainee',
    component: SettingstraineeComponent
},
{
    path: 'tolog/role',
    component: TologComponent
},
{
    path: 'accountrainer',
    component: AccountrainerComponent
},
{
    path: 'accountrainer/settingsTrainer',
    component: TologComponent
},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
