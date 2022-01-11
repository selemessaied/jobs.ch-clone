import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {
@Input() image = '';
@Input() title = '';
@Input() description = '';
@Input() companyName = '';
@Input() date = '';
@Input() place = '';
@Input() id = '';
@Input() isFavorite = false;
  constructor() { }

  ngOnInit(): void {
  }

}
