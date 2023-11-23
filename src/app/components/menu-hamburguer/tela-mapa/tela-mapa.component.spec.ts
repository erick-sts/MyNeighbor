import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaMapaComponent } from './tela-mapa.component';

describe('TelaMapaComponent', () => {
  let component: TelaMapaComponent;
  let fixture: ComponentFixture<TelaMapaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaMapaComponent]
    });
    fixture = TestBed.createComponent(TelaMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
