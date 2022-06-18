import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Register1TransportistaPage } from './register1-transportista.page';

describe('Register1TransportistaPage', () => {
  let component: Register1TransportistaPage;
  let fixture: ComponentFixture<Register1TransportistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register1TransportistaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Register1TransportistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
