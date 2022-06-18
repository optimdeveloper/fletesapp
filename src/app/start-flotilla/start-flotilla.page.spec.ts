import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartFlotillaPage } from './start-flotilla.page';

describe('StartFlotillaPage', () => {
  let component: StartFlotillaPage;
  let fixture: ComponentFixture<StartFlotillaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartFlotillaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartFlotillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
