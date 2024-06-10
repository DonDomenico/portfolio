import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyportfolioComponent } from './myportfolio.component';

describe('MyportfolioComponent', () => {
  let component: MyportfolioComponent;
  let fixture: ComponentFixture<MyportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyportfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
