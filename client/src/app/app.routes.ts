import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { HomeComponent } from './home/home.component';
import { TrainerComponent } from './AccountTrainer/registerTrainer/trainer.component';
import { RoleComponent } from './role/role.component';
import { TraineeComponent } from './AccountTrainee/registerTrainee/registertrainee.component';
import { DietraineeComponent } from './AccountTrainee/dietrainee/dietrainee.component';
import { AccountrainerComponent } from './AccountTrainer/accountrainer/accountrainer.component';
import { TologComponent } from './tolog/tolog.component';
import { LoginTrainerComponent } from './AccountTrainer/loginTrainer/logintrainer.component';
import { LoginTraineeComponent } from './AccountTrainee/loginTrainee/logintrainee.component';
import { SettingstraineeComponent } from './AccountTrainee/settingsTrainee/settingsTrainee.component';
import { ProfileTraineeComponent } from './AccountTrainee/profileTrainee/profileTrainee.component';
import { FitnessTraineeComponent } from './AccountTrainee/fitness/fitnesstrainee.component';
import { StatisticTraineeComponent } from './AccountTrainee/statistic/statistictrainee.component';

export const routes: Routes = [{
    path:"logintrainer", // Путь для входа тренера
    component: LoginTrainerComponent
},
{
    path:"logintrainee", // Путь для входа ученика
    component: LoginTraineeComponent,
},
{
    path:"home",  // Путь для домашней страницы
    component: HomeComponent,
},
{
    path:"register/trainer", // Путь для регистрации тренера
    component: TrainerComponent,
},
{
    path: 'register/trainee', // Путь для регистрации ученика
    component: TraineeComponent,
},
{
    path: 'register/role', // Путь для выбора роли
    component: RoleComponent
},
{
    path: 'accountrainee/profileTrainee', // Путь для профиля ученика
    component: ProfileTraineeComponent
},
{
    path: 'accountrainee/dietrainee', // Путь для диеты ученика
    component: DietraineeComponent
},
{
    path: 'accountrainee/settingsTrainee', // Путь для настроек ученика
    component: SettingstraineeComponent
},
{
    path: 'accountrainee/fitnessTrainee', // Путь для фитнеса ученика
    component: FitnessTraineeComponent
},
{
    path: 'accountrainee/statisticTrainee', // Путь для статистики ученика 
    component: StatisticTraineeComponent
},
{
    path: 'tolog/role', // Путь для выбора роли 
    component: TologComponent
},
{
    path: 'accountrainer', // Путь для аккаунта тренера
    component: AccountrainerComponent
},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
