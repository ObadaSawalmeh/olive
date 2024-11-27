import { Routes } from '@angular/router';
import { RulesEngineComponent } from './Pages/rulesEnginePage/rules-engine/rules-engine.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AccountsComponent } from './Pages/accounts/accounts.component';
import { UsermanagementComponent } from './Pages/usermanagement/usermanagement.component';
import { BillingComponent } from './Pages/billing/billing.component';
import { SettingsComponent } from './Pages/settings/settings.component';
import { LeavetypesComponent } from './Pages/rulesEnginePage/leavetypes/leavetypes.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'accounts',
    component: AccountsComponent,
  },
  {
    path: 'billing',
    component: BillingComponent,
  },
  {
    path: 'usermanagement',
    component: UsermanagementComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'rules-engine',
    component: RulesEngineComponent,
  },
  {
    path: 'rules-engine/leavetypes',
    component: LeavetypesComponent,
  },
  {
    path: 'notfound',
    component: NotFoundComponent,
  },
  { path: '**', redirectTo: 'notfound' },
];
