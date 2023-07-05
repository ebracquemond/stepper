import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { Path } from 'src/app/models/path.model';
import { AppRoute } from 'src/app/models/routes.enum';
import { Step } from 'src/app/models/step.model';
import { PathService } from 'src/app/services/path/path.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: [],
  providers: [PathService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsComponent {
  public path: Path | undefined;
  public currentStep: Step | undefined;
  public AppRoute = AppRoute;

  constructor(private route: ActivatedRoute, private pathService: PathService) {
    combineLatest([this.route.paramMap, this.route.firstChild!.paramMap])
      .pipe(
        map(([parentParams, paramMap]) => ({
          pathId: parentParams.get('pathId'),
          stepId: paramMap.get('stepId'),
        }))
      )
      .subscribe(({ pathId, stepId }) => {
        this.path = this.pathService.getPathById(+pathId!);
        this.currentStep = this.pathService.getStepById(+pathId!, +stepId!);
      });
  }
}
