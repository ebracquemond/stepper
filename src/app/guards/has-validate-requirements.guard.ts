import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RequirementsService } from '../services/requirements/requirements.service';

export const hasValidateRequirementsGuard: CanActivateFn = () => {
  const requiremensService: RequirementsService = inject(RequirementsService);
  const router: Router = inject(Router);
  if (requiremensService.hasValidatedRequirements) {
    return true;
  }
  router.navigate(['']);
  return false;
};
