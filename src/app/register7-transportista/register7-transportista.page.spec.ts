import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Register7TransportistaPage } from './register7-transportista.page';

describe('Register7TransportistaPage', () => {
  let component: Register7TransportistaPage;
  let fixture: ComponentFixture<Register7TransportistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register7TransportistaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Register7TransportistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
