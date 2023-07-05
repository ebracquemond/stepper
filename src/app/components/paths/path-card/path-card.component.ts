import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Path } from 'src/app/models/path.model';
import { AppRoute } from 'src/app/models/routes.enum';

@Component({
  selector: 'app-path-card',
  templateUrl: './path-card.component.html',
  styleUrls: ['./path-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PathCardComponent {
  @Input() path!: Path;

  public AppRoute = AppRoute;
}
