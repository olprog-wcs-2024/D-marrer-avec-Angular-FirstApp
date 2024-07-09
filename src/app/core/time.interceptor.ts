import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TimeInterceptor implements HttpInterceptor {
  
  // La méthode `intercept` est appelée pour chaque requête HTTP sortante.
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // Enregistre le temps de départ en millisecondes.
    const started = Date.now();
    
    // Affiche l'URL de la requête ainsi que l'heure de début au format ISO.
    console.log(`Request for ${req.url} started at ${new Date(started).toISOString()}`);
    
    // Utilise la méthode `handle` de `HttpHandler` pour continuer le traitement de la requête.
    return next.handle(req).pipe(
      // Utilise l'opérateur `tap` pour effectuer des actions secondaires, comme l'enregistrement du temps.
      tap({
        // Si la requête réussit, on calcule le temps écoulé et on l'affiche.
        next: () => {
          const elapsed = Date.now() - started;
          console.log(`Request for ${req.url} took ${elapsed} ms.`);
        },
        // Si la requête échoue, on calcule aussi le temps écoulé et on l'affiche avec un message d'erreur.
        error: () => {
          const elapsed = Date.now() - started;
          console.log(`Request for ${req.url} failed after ${elapsed} ms.`);
        }
      })
    );
  }
}
