import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronanewComponent } from './coronanew.component';

describe('CoronanewComponent', () => {
  let component: CoronanewComponent;
  let fixture: ComponentFixture<CoronanewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronanewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoronanewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
