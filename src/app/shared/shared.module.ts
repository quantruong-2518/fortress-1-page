import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent, HeaderComponent } from './components';

const COMPONENTS = [HeaderComponent, FooterComponent];
const MODULES = [CommonModule, RouterModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS],
})
export class SharedModule {}
