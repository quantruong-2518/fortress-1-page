import { Component } from '@angular/core';

import { getHeaderItems} from '../../../helpers/config.helper'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public items = getHeaderItems();

  public trackByFunc(index: number) {
    return index;
  }
}
