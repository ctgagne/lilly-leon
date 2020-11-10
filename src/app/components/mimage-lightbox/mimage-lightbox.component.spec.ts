import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MimageLightboxComponent } from './mimage-lightbox.component';

describe('MimageLightboxComponent', () => {
  let component: MimageLightboxComponent;
  let fixture: ComponentFixture<MimageLightboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MimageLightboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MimageLightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
