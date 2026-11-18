# mgr Michał Kowalski — Fizjoterapia i Terapia Bólu Kręgosłupa (Ełk i region)

Nowoczesna, responsywna strona internetowa dla gabinetu fizjoterapii stacjonarnej w **Ełku** oraz mobilnej rehabilitacji z dojazdem do domu pacjenta (**Ełk, Olecko, Gołdap, Giżycko, Grajewo, Prostki, Rajgród, Augustów, Suwałki, Stare Juchy, Wydminy**).

## Zawartość projektu
- `index.html` – semantyczna struktura HTML5 (sekcja Hero z dowodami zaufania KIF/RPWDL, interaktywny selektor bólu „Gdzie odczuwasz ból?", oferta z przełącznikiem pakietów, potwierdzone kwalifikacje, galeria przypadków klinicznych z filtrami i oknem modalnym `<dialog>`, przebieg współpracy, mapa stref dojazdu z kalkulatorem kosztów, opinie pacjentów, akordeon FAQ, formularz rezerwacji wizyty)
- `styles.css` – system stylistyczny **Medical Premium** (zasada 60-30-10, typografia `Outfit` + `Plus Jakarta Sans` + `JetBrains Mono`, płynna animacja akordeonu `::details-content`, responsywny dolny pasek akcji na telefonach `<= 720px`)
- `app.js` – logika interaktywna: diagnostyka objawów, przełącznik cen i pakietów (-12% / -20%), filtrowanie galerii Case Studies, okno modalne z obsługą `closedby="any"` i fallbackiem light-dismiss, kalkulator kosztu terapii i dojazdu oraz walidacja formularza
- `.github/workflows/deploy-pages.yml` oraz `.nojekyll` – pełna konfiguracja pod automatyczną publikację na **GitHub Pages**

## Publikacja na GitHub Pages
Projekt jest skonfigurowany do natychmiastowego wdrożenia na **GitHub Pages** z gałęzi `main` (katalog `/ (root)` lub przez GitHub Actions).
