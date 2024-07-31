import { Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'formulario',
        component: FormularioComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo:'formulario',
        pathMatch: 'full'
    }
];
