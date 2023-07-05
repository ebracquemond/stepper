import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { PathCardComponent } from './components/paths/path-card/path-card.component';
import { PathsComponent } from './components/paths/paths.component';
import { RequirementsComponent } from './components/requirements/requirements.component';
import { StepComponent } from './components/steps/step/step.component';
import { StepperComponent } from './components/steps/stepper/stepper.component';
import { StepsComponent } from './components/steps/steps.component';
import { TooltipImgComponent } from './components/tooltip-img/tooltip-img.component';

@NgModule({
  declarations: [
    AppComponent,
    StepComponent,
    RequirementsComponent,
    PathsComponent,
    PathCardComponent,
    StepsComponent,
    ErrorComponent,
    StepperComponent,
    TooltipImgComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, NgbModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
