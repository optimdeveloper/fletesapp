import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterFinalTransportistaPage } from './register-final-transportista.page';

describe('RegisterFinalTransportistaPage', () => {
  let component: RegisterFinalTransportistaPage;
  let fixture: ComponentFixture<RegisterFinalTransportistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFinalTransportistaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterFinalTransportistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
