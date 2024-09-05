import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-mac-guffin',
  standalone: true,
  imports: [MatCardModule, MatSnackBarModule, MatButtonModule],
  templateUrl: './mac-guffin.component.html',
  styleUrl: './mac-guffin.component.scss',
})
export class MacGuffinComponent {
  constructor(private snackBar: MatSnackBar) {}

  ok() {
    this.snackBar.open('Hello', 'ok', { duration: 1000 });
  }
}
