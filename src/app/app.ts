import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { CommonModule } from '@angular/common';
import { Sidebar } from "./components/sidebar/sidebar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, CommonModule, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('rechflix');
  selectedTab: string = 'Explorar';

  tabs = ['Explorar', 'Favoritos', 'Configurações'];

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
