import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShowCaseComponent } from './components/show-case/show-case.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { SolutionComponent } from './components/solution/solution.component';
import { SolutionItemComponent } from './components/solution-item/solution-item.component';

const MODULES = [CommonModule, HomeRoutingModule, SharedModule];

@NgModule({
  declarations: [HomeComponent, ShowCaseComponent, IntroductionComponent, SolutionComponent, SolutionItemComponent],
  imports: [...MODULES],
  exports: [HomeComponent],
})
export class HomeModule {}
