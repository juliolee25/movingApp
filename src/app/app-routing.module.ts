import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { ServiceComponent } from './components/service/service.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SupportComponent } from './components/support/support.component';
import { UserMainComponent } from './components/user-main/user-main.component';

const routes: Routes = [
  {path: 'faq', component: FaqComponent},
  {path: 'home', component: MainComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'support', component: SupportComponent},
  {path: 'usermain', component: UserMainComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
