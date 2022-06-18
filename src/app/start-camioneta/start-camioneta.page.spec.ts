import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartCamionetaPage } from './start-camioneta.page';

describe('StartCamionetaPage', () => {
  let component: StartCamionetaPage;
  let fixture: ComponentFixture<StartCamionetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCamionetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartCamionetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
