import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Register2FlotillaPage } from './register2-flotilla.page';

describe('Register2FlotillaPage', () => {
  let component: Register2FlotillaPage;
  let fixture: ComponentFixture<Register2FlotillaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register2FlotillaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Register2FlotillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
