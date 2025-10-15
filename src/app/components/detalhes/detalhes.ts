import { Component, inject } from '@angular/core';
import { TmdbService } from '../../services/tmdb-service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from "../header/header";
import { formatarData } from '../../utils/formatter';

@Component({
  selector: 'app-detalhes',
  imports: [CommonModule, Header],
  templateUrl: './detalhes.html',
  styleUrl: './detalhes.scss',
})
export class Detalhes {
  private readonly route = inject(ActivatedRoute);

  protected readonly tmdbService = inject(TmdbService);

  protected readonly detalhes = this.tmdbService.selecionarDetalhes(
    Number(this.route.snapshot.paramMap.get('id'))
  );

  formatarData = formatarData;
}
