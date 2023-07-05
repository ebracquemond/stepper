import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { REQUIREMENTS, WARNINGS } from 'src/app/consts/requirements.const';
import { AppRoute } from 'src/app/models/routes.enum';
import { RequirementsService } from 'src/app/services/requirements/requirements.service';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequirementsComponent {
  public REQUIREMENTS = REQUIREMENTS;
  public WARNINGS = WARNINGS;
  public formGroup = new FormGroup({});
  constructor(
    private router: Router,
    private requirementsService: RequirementsService
  ) {
    REQUIREMENTS.list.forEach((_, i) =>
      this.formGroup.addControl(
        `req-${i}`,
        new FormControl(
          requirementsService.hasValidatedRequirements,
          Validators.requiredTrue
        )
      )
    );
    WARNINGS.list.forEach((_, i) =>
      this.formGroup.addControl(
        `warn-${i}`,
        new FormControl(
          requirementsService.hasValidatedRequirements,
          Validators.requiredTrue
        )
      )
    );
  }

  public onSubmit(): void {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      this.requirementsService.hasValidatedRequirements = true;

      this.router.navigate([`/${AppRoute.PATHS}`]);
    }
  }
}
