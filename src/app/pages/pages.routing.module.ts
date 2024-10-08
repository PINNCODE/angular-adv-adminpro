import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { ProgressComponent } from "./progress/progress.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { RxjsComponent } from "./rxjs/rxjs.component";

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
          { path: '', component: DashboardComponent, data: { title: 'Dashboard'} },
          { path: 'grafica1', component: Grafica1Component, data: { title: 'Progress bar'} },
          { path: 'progress', component: ProgressComponent, data: { title: 'Grafica #1'} },
          { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Tema'}},
          { path: 'promesas', component: PromesasComponent, data: { title: 'Promesas'} },
          { path: 'rxjs', component: RxjsComponent, data: { title: 'Rxjs'} },
          { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
