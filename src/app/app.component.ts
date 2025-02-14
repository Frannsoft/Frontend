import { Component, HostBinding, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { UserOptions } from './options/userOptions';
import { GameThemes } from 'src/styles/gameThemes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FightCore';

  constructor(public overlayContainer: OverlayContainer) { }
  @HostBinding('class') componentCssClass;

  ngOnInit(): void {
   this.setThemeForCurrentGame();
  }

  public setThemeForCurrentGame(): void {
    const gameId = UserOptions.getCurrentGame();
    this.setThemeForGameId(gameId);
  }

  public setThemeForGameId(gameId: number): void {
    const theme = this.getThemeForGameId(gameId);
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }

  public getThemeForGameId(gameId: number): string {
    return GameThemes.themeDictionary.get(gameId);
  }
}
