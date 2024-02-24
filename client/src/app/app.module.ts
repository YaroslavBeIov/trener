import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TrainerComponent } from "./AccountTrainer/registerTrainer/trainer.component";
import { LoginTrainerComponent } from "./AccountTrainer/loginTrainer/logintrainer.component";
import { HomeComponent } from "./home/home.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routes";
import { RoleComponent } from "./role/role.component";
import { TraineeComponent } from "./AccountTrainee/registerTrainee/registertrainee.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[
        AppComponent,
        TrainerComponent,
        LoginTrainerComponent,
        HomeComponent,
        RoleComponent,
        TraineeComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        CommonModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule{}