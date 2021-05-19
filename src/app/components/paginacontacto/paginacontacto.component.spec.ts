import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginacontactoComponent } from './paginacontacto.component';

describe('PaginacontactoComponent', () => {
  let component: PaginacontactoComponent;
  let fixture: ComponentFixture<PaginacontactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginacontactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginacontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
