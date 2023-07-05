import { Injectable } from '@angular/core';
import { PATHS } from 'src/app/consts/paths.const';
import { Path } from 'src/app/models/path.model';
import { Step } from 'src/app/models/step.model';

@Injectable()
export class PathService {
  getPathById(pathId: number): Path | undefined {
    return PATHS.find((path) => path.id === pathId);
  }

  getStepById(pathId: number, stepId: number): Step | undefined {
    const path = this.getPathById(pathId);
    return path?.steps?.find((step) => step.id === stepId);
  }
}
