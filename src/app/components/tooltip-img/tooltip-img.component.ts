import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-tooltip-img',
  templateUrl: './tooltip-img.component.html',
  styleUrls: ['./tooltip-img.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipImgComponent {
  @Input() public imgSrc!: string;
}
