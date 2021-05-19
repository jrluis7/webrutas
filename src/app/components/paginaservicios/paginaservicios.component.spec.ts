import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaserviciosComponent } from './paginaservicios.component';

describe('PaginaserviciosComponent', () => {
  let component: PaginaserviciosComponent;
  let fixture: ComponentFixture<PaginaserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaserviciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
