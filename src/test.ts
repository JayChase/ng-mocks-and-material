import { CommonModule } from '@angular/common';
import { getTestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ngMocks } from 'ng-mocks';

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
  {
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true,
  }
);

ngMocks.globalKeep(CommonModule);
ngMocks.globalKeep(NoopAnimationsModule);
ngMocks.globalKeep(MatIconModule);
ngMocks.globalKeep(MatToolbarModule);
ngMocks.globalKeep(MatCardModule);
ngMocks.globalKeep(MatSnackBarModule);
ngMocks.globalKeep(MatButtonModule);
