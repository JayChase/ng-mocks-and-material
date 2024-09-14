import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
import { AppComponent } from './app.component';
import { LikeService } from './like/like.service';

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

      .mock(LikeService, {
        like: () => null,
      });
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
    let likeService!: LikeService;

    beforeEach(async () => {
      likeHarness = await loader.getHarness(
        MatButtonHarness.with({ selector: '.toolbar__like' })
      );
      likeService = fixture.componentRef.injector.get(LikeService);

      spyOn(likeService, 'like').and.returnValue();
    });

    it('should call like on the like service', async () => {
      await likeHarness.click();

      expect(likeService.like).toHaveBeenCalled();
    });
  });
});
