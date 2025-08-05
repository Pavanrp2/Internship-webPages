import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcSettingsComponent } from './ac-settings.component';

describe('AcSettingsComponent', () => {
  let component: AcSettingsComponent;
  let fixture: ComponentFixture<AcSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
