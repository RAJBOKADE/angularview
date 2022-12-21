import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreBuildAppComponent } from './pre-build-app.component';

describe('PreBuildAppComponent', () => {
  let component: PreBuildAppComponent;
  let fixture: ComponentFixture<PreBuildAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreBuildAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreBuildAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
