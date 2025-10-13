import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  tabs = ['Explorar', 'Favoritos', 'Configurações'];
  selectedTab = this.tabs[0];
  selectedIndex = 0;

  selectTab(tab: string, index: number) {
    this.selectedTab = tab;
    this.selectedIndex = index;
  }
}
