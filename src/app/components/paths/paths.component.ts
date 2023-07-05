import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PATHS } from 'src/app/consts/paths.const';

@Component({
  selector: 'app-paths',
  templateUrl: './paths.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PathsComponent {
  public paths = PATHS;
}
