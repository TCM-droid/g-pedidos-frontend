import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { Header } from "./core/header/header";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('g-pedidos-frontend');
}
