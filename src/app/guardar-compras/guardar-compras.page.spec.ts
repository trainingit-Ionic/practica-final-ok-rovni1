import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuardarComprasPage } from './guardar-compras.page';

describe('GuardarComprasPage', () => {
  let component: GuardarComprasPage;
  let fixture: ComponentFixture<GuardarComprasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardarComprasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuardarComprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
