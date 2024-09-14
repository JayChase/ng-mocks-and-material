import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
  MatSnackBar,
  MatSnackBarRef,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
import { MacGuffinComponent } from './mac-guffin.component';

describe('MacGuffinComponent', () => {
  let fixture: MockedComponentFixture<MacGuffinComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    return MockBuilder(MacGuffinComponent)
      .beforeCompileComponents((testBed) => {
        testBed.overrideComponent(MacGuffinComponent, {
          set: {
            changeDetection: ChangeDetectionStrategy.Default, // onPush doesn't work well with detectChanges()
            providers: [], // clear out the component level providers so the mocks get used
          },
        });
      })
      .keep(NoopAnimationsModule)
      .keep(MatSelectModule)
      .keep(MatFormFieldModule);
  });

  beforeEach(async () => {
    fixture = MockRender(MacGuffinComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  describe('ok button', () => {
    let okHarness: MatButtonHarness;
    let matSnackBar!: MatSnackBar;
    const mockMatSnackBarRef = {} as MatSnackBarRef<TextOnlySnackBar>;

    beforeEach(async () => {
      okHarness = await loader.getHarness(
        MatButtonHarness.with({ selector: '.mac-guffin__ok' })
      );

      matSnackBar = fixture.componentRef.injector.get(MatSnackBar);
      spyOn(matSnackBar, 'open').and.returnValue(mockMatSnackBarRef);
    });

    it('should show a snackbar', async () => {
      await okHarness.click();
      expect(matSnackBar.open).toHaveBeenCalled();
    });
  });
});
