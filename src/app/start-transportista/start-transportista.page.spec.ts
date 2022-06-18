import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartTransportistaPage } from './start-transportista.page';

describe('StartTransportistaPage', () => {
  let component: StartTransportistaPage;
  let fixture: ComponentFixture<StartTransportistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartTransportistaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartTransportistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
