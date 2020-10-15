import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionAComponent } from './collection-a.component';

describe('CollectionAComponent', () => {
  let component: CollectionAComponent;
  let fixture: ComponentFixture<CollectionAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
