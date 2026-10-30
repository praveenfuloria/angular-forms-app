import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NoSpacesDirective } from './directives/no-spaces.directives';

@Component({
  imports: [RouterOutlet, FormsModule, JsonPipe, NoSpacesDirective],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class App {
  username: string = '';
  email: string = '';
  password: string = '';

  street: string = '';
  city: string = '';
  zip: string = '';
}
