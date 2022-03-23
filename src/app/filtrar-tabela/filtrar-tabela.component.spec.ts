import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarTabelaComponent } from './filtrar-tabela.component';

describe('FiltrarTabelaComponent', () => {
  let component: FiltrarTabelaComponent;
  let fixture: ComponentFixture<FiltrarTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrarTabelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
