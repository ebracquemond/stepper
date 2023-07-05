import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { AppRoute } from 'src/app/models/routes.enum';
import { Step } from 'src/app/models/step.model';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent implements OnInit {
  @Input() public selectedStep: Step | undefined;

  @Input() public steps: Step[] | undefined;

  public AppRoute = AppRoute;
  public lineWidth: string | undefined;

  ngOnInit(): void {
    this.lineWidth = `${100 / this.steps!.length - 1}%`;
  }
}
