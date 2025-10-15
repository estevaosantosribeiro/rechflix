import { Component, inject } from '@angular/core';
import { TmdbService } from '../../services/tmdb-service';
import { formatarData, formatarTitulo } from '../../utils/formatter';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  protected readonly tmdbService = inject(TmdbService);

  protected readonly midias = this.tmdbService.selecionarFilmes();

  formatarTitulo = formatarTitulo;
  formatarData = formatarData;
}
