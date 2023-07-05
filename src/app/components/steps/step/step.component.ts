import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { Path } from 'src/app/models/path.model';
import { Step } from 'src/app/models/step.model';
import { PathService } from 'src/app/services/path/path.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepComponent {
  public path: Path | undefined;
  public step: Step | undefined;

  public hasNextStep: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private pathService: PathService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    combineLatest([this.route.parent!.paramMap, this.route.paramMap])
      .pipe(
        map(([parentParams, paramMap]) => ({
          pathId: parentParams.get('pathId'),
          stepId: paramMap.get('stepId'),
        }))
      )
      .subscribe(({ pathId, stepId }) => {
        this.path = this.pathService.getPathById(+pathId!);
        this.step = this.pathService.getStepById(+pathId!, +stepId!);
        this.hasNextStep =
          !!this.step && this.step.id < this.path!.steps!.length;
        this.cdr.markForCheck();
      });
  }

  public nextStep(): void {
    this.router.navigate([
      `/paths/${this.path?.id}/steps/${this.step!.id + 1}`,
    ]);
  }
}
