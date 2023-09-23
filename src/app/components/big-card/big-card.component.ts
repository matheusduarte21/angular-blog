import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover: string = 'https://miro.medium.com/v2/resize:fit:1358/0*wuNf24urnMp7ypDp.png'
  @Input()
  cardTitle: string = 'SAIU A NOVA VERSÃO DO ANGULAR'
  @Input()
  cardDescription: string = 'Angular (comumente referido como "Angular 2+" ou "Angular 2") é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações. Angular é uma reescrita completa do AngularJS, feito pela mesma equipe que o construiu.'
  @Input()
  id:string = '0'

  constructor() { }

  ngOnInit(): void {
  }

}
