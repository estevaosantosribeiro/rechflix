import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { CommonModule } from '@angular/common';
import { Sidebar } from './components/sidebar/sidebar';
import { List } from "./components/list/list";

@Component({
  selector: 'app-root',
  imports: [Header, CommonModule, Sidebar, List],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
