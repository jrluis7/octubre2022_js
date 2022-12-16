import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRickMortyComponent } from './pagina-rick-morty.component';

describe('PaginaRickMortyComponent', () => {
  let component: PaginaRickMortyComponent;
  let fixture: ComponentFixture<PaginaRickMortyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaRickMortyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaRickMortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
