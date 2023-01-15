import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarImgComponent } from './buscar-img.component';

describe('BuscarImgComponent', () => {
  let component: BuscarImgComponent;
  let fixture: ComponentFixture<BuscarImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
