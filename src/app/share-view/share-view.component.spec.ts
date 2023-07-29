import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareViewComponent } from './share-view.component';

describe('ShareViewComponent', () => {
  let component: ShareViewComponent;
  let fixture: ComponentFixture<ShareViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareViewComponent]
    });
    fixture = TestBed.createComponent(ShareViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
