import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathsComponent } from './components/paths/paths.component';
import { RequirementsComponent } from './components/requirements/requirements.component';
import { hasValidateRequirementsGuard } from './guards/has-validate-requirements.guard';
import { AppRoute } from './models/routes.enum';
import { StepComponent } from './components/steps/step/step.component';
import { StepsComponent } from './components/steps/steps.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: RequirementsComponent,
  },
  {
    path: AppRoute.PATHS,
    component: PathsComponent,
    canActivate: [hasValidateRequirementsGuard],
  },
  {
    path: `${AppRoute.PATHS}/:pathId`,
    component: StepsComponent,
    canActivate: [hasValidateRequirementsGuard],
    children: [
      {
        path: `${AppRoute.STEPS}/:stepId`,
        component: StepComponent,
      },
      {
        path: '**',
        component: ErrorComponent,
      },
    ],
  },
  { path: '**', component: RequirementsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
