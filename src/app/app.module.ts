import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FaqComponent } from './components/faq/faq.component';
import { SupportComponent } from './components/support/support.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { UserMainComponent } from './components/user-main/user-main.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './components/contact/contact.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CajasventaComponent } from './components/cajasventa/cajasventa.component';
import { DriverComponent } from './components/driver/driver.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { AdressComponent } from './components/adress/adress.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FaqComponent,
    SupportComponent,
    FooterComponent,
    LoginComponent,
    UserMainComponent,
    ServiceComponent,
    ContactComponent,
    SettingsComponent,
    CajasventaComponent,
    DriverComponent,
    VehiculoComponent,
    AdressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
