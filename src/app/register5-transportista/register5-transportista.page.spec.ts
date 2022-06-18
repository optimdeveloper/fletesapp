import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Register5TransportistaPage } from './register5-transportista.page';

describe('Register5TransportistaPage', () => {
  let component: Register5TransportistaPage;
  let fixture: ComponentFixture<Register5TransportistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register5TransportistaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Register5TransportistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
