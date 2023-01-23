import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablafacturaComponent } from './tablafactura.component';

describe('TablafacturaComponent', () => {
  let component: TablafacturaComponent;
  let fixture: ComponentFixture<TablafacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablafacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablafacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
