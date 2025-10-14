import { Component, inject } from '@angular/core';
import { Header } from "./components/header/header";
import { CommonModule } from '@angular/common';
import { Sidebar } from "./components/sidebar/sidebar";
import { TmdbService } from './services/tmdb-service';
import { formatarTitulo } from './utils/formatter';

@Component({
  selector: 'app-root',
  imports: [Header, CommonModule, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly tmdbService = inject(TmdbService);

  protected readonly midias = this.tmdbService.selecionarFilmes();

  formatarTitulo = formatarTitulo
}
