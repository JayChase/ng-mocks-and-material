import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonHarness } from '@angular/material/button/testing';
import {
  MatSnackBar,
  MatSnackBarRef,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';
import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: MockedComponentFixture<AppComponent>;
  let loader: HarnessLoader;

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
      .keep(MatButtonModule);
  });

  beforeEach(async () => {
    fixture = MockRender(AppComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should render title', () => {
    fixture.nativeElement
      .querySelector('.app__title')
      ?.textContent.toContain('Test Component');
  });

  describe('Like button', () => {
    let likeHarness: MatButtonHarness;
    let matSnackBar!: MatSnackBar;
    const mockMatSnackBarRef = {} as MatSnackBarRef<TextOnlySnackBar>;

    beforeEach(async () => {
      likeHarness = await loader.getHarness(
        MatButtonHarness.with({ selector: '.toolbar__share' })
      );

      matSnackBar = fixture.componentRef.injector.get(MatSnackBar);
      spyOn(matSnackBar, 'open').and.returnValue(mockMatSnackBarRef);
    });

    it('should show a snackbar', async () => {
      await likeHarness.click();
      expect(matSnackBar.open).toHaveBeenCalled();
    });
  });
});
