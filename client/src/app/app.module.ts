import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations:[
        AppComponent,
        RegisterComponent,
        LoginComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule{}