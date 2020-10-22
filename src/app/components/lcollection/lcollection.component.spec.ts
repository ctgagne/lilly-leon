import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcollectionComponent } from './lcollection.component';

describe('LcollectionComponent', () => {
  let component: LcollectionComponent;
  let fixture: ComponentFixture<LcollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LcollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
