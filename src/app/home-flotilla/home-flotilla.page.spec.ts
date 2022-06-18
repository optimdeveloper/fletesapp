import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeFlotillaPage } from './home-flotilla.page';

describe('HomeFlotillaPage', () => {
  let component: HomeFlotillaPage;
  let fixture: ComponentFixture<HomeFlotillaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFlotillaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeFlotillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
