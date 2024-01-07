import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TrainerComponent } from "./trainer/trainer.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routes";
import { RoleComponent } from "./role/role.component";
import { TraineeComponent } from "./trainee/trainee.component";


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