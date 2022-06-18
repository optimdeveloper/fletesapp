import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Register6CamionetaPage } from './register6-camioneta.page';

describe('Register6CamionetaPage', () => {
  let component: Register6CamionetaPage;
  let fixture: ComponentFixture<Register6CamionetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register6CamionetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Register6CamionetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
