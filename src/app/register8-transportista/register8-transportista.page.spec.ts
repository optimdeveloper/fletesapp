import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Register8TransportistaPage } from './register8-transportista.page';

describe('Register8TransportistaPage', () => {
  let component: Register8TransportistaPage;
  let fixture: ComponentFixture<Register8TransportistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register8TransportistaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Register8TransportistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
