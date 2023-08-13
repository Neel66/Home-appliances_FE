import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRetailersComponent } from './show-retailers.component';

describe('ShowRetailersComponent', () => {
  let component: ShowRetailersComponent;
  let fixture: ComponentFixture<ShowRetailersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRetailersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRetailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
