import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MacGuffinComponent } from './mac-guffin/mac-guffin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MacGuffinComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-mocks-and-material';

  constructor(private snackBar: MatSnackBar) {}

  like() {
    this.snackBar.open('Liked', 'ok', { duration: 1000 });
  }

  share() {
    this.snackBar.open('Shared', 'ok', { duration: 1000 });
  }
}
