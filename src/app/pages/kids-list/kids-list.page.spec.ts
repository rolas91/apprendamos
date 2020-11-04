import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KidsListPage } from './kids-list.page';

describe('KidsListPage', () => {
  let component: KidsListPage;
  let fixture: ComponentFixture<KidsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KidsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
