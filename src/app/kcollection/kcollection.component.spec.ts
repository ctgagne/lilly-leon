import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KcollectionComponent } from './kcollection.component';

describe('KcollectionComponent', () => {
  let component: KcollectionComponent;
  let fixture: ComponentFixture<KcollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KcollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
