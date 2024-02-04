import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TrainerComponent } from "./registerTrainer/trainer.component";
import { LoginComponent } from "./loginTrainer/logintrainer.component";
import { HomeComponent } from "./home/home.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routes";
import { RoleComponent } from "./role/role.component";
import { TraineeComponent } from "./registerTrainee/trainee.component";


@NgModule({
    declarations:[
        AppComponent,
        TrainerComponent,
        LoginComponent,
        HomeComponent,
        RoleComponent,
        TraineeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule{}