import { Component } from '@angular/core';
import { Header } from "../header/header";
import { List } from "../list/list";
import { Sidebar } from "../sidebar/sidebar";

@Component({
  selector: 'app-home',
  imports: [Header, List, Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
