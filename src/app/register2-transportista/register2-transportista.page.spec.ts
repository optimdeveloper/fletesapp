import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Register2TransportistaPage } from './register2-transportista.page';

describe('Register2TransportistaPage', () => {
  let component: Register2TransportistaPage;
  let fixture: ComponentFixture<Register2TransportistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register2TransportistaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Register2TransportistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
