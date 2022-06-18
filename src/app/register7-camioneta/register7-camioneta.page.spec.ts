import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Register7CamionetaPage } from './register7-camioneta.page';

describe('Register7CamionetaPage', () => {
  let component: Register7CamionetaPage;
  let fixture: ComponentFixture<Register7CamionetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register7CamionetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Register7CamionetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
