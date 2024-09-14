import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

export type User = {
  id: number;
  name: string;
};

@Component({
  selector: 'app-mac-guffin',
  standalone: true,
  imports: [
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  templateUrl: './mac-guffin.component.html',
  styleUrl: './mac-guffin.component.scss',
})
export class MacGuffinComponent {
  users: User[] = [
    { id: 1, name: 'Paula' },
    { id: 2, name: 'James' },
    { id: 3, name: 'Reggie' },
  ];

  selected: undefined | User;

  constructor(private snackBar: MatSnackBar) {}

  ok() {
    this.snackBar.open(`Hello ${this.selected?.name || ''}`, 'ok', {
      duration: 1000,
    });
  }
}
