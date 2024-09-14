import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LikeService } from './like/like.service';
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
  providers: [LikeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-mocks-and-material';

  constructor(private likeService: LikeService) {}

  like() {
    this.likeService.like();
  }
}
