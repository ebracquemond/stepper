import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequirementsService {
  STORAGE_KEY = 'HAS_VALIDATE_REQUIREMENTS';

  set hasValidatedRequirements(hasValidateRequirements: boolean) {
    sessionStorage.setItem(
      this.STORAGE_KEY,
      JSON.stringify(hasValidateRequirements)
    );
  }
  get hasValidatedRequirements(): boolean {
    const item = sessionStorage.getItem(this.STORAGE_KEY);
    return !!item ? JSON.parse(item) : false;
  }
}
