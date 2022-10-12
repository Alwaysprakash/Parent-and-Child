import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaindingComponent } from './databainding.component';

describe('DatabaindingComponent', () => {
  let component: DatabaindingComponent;
  let fixture: ComponentFixture<DatabaindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
