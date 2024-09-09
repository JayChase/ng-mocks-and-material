import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: MockedComponentFixture<AppComponent>;

  beforeEach(async () => {
    // keep all of the Material modules used by the component AND any child components
    return MockBuilder(AppComponent)
      .beforeCompileComponents((testBed) => {
        testBed.overrideComponent(AppComponent, {
          set: {
            changeDetection: ChangeDetectionStrategy.Default, // onPush doesn't work well with detectChanges()
            providers: [], // clear out the component level providers so the mocks get used
          },
        });
      })
      .keep(CommonModule)
      .keep(NoopAnimationsModule)
      .keep(MatIconModule)
      .keep(MatToolbarModule)
      .keep(MatCardModule)
      .keep(MatSnackBarModule)
      .keep(MatButtonModule);
  });

  beforeEach(async () => {
    fixture = MockRender(AppComponent);
  });

  it('should render title', () => {
    fixture.nativeElement
      .querySelector('.app__title')
      ?.textContent.toContain('Test Component');
  });
});
