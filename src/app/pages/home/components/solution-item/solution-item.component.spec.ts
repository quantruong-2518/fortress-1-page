import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionItemComponent } from './solution-item.component';

describe('SolutionItemComponent', () => {
  let component: SolutionItemComponent;
  let fixture: ComponentFixture<SolutionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
