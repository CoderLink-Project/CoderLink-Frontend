import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoriteDevelopersService {
  private favorites: any[] = [];

  constructor() {}

  addToFavorites(developer: any): void {
    if (!this.favorites.find((dev) => dev.id === developer.id)) {
      this.favorites.push(developer);
    }
  }

  getFavorites(): any[] {
    return this.favorites;
  }

  isFavorite(developerId: number): boolean {
    return !!this.favorites.find((dev) => dev.id === developerId);
  }
}
