import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurePlanComponent } from './configure-plan.component';

describe('ConfigurePlanComponent', () => {
  let component: ConfigurePlanComponent;
  let fixture: ComponentFixture<ConfigurePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
