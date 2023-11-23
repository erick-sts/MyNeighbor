import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-tela-mapa',
  templateUrl: './tela-mapa.component.html',
  styleUrls: ['./tela-mapa.component.css']
})
export class TelaMapaComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const map = L.map('map').setView([-15.7801, -47.9292], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        // Atualiza o mapa com as coordenadas do usuário
        map.setView([userLat, userLng], 15);
      }, (error) => {
        console.error('Erro ao obter a localização do usuário:', error);
      });
    } else {
      console.log('Geolocalização não suportada no navegador.');
    }


  }
}
