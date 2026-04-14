// @ts-check
import { test, expect } from '@playwright/test';  /* representa el navegador controlado por Playwright. */

test('has title', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/index.html'); /* abre la página principal del proyecto  */

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/login/); /*  verifica que el título contenga la subcadena de la pagina "login - pandea" */
});


/* ¿Que hace el programa baicamaente?
El programa es un test automatizado que utiliza Playwright para abrir una página web y verificar que el título de la página contenga la subcadena "login - pandea". 
Si el título de la página cumple con esta condición, el test pasará; de lo contrario, fallará.
*/

/* 

npx playwright test => es el comando que se utiliza para ejecutar los tests escritos con Playwright. 
y te genera un reporte de los resultados de los tests, indicando cuáles pasaron y cuáles fallaron, 
así como detalles adicionales sobre cada test ejecutado.
*/

/* npx playwright show-report = Abre el reporte visual */


/* 

Running 3 tests = > indica que se han ejecutado tres pruebas en total. En tres navegadores diferentes (chromium, firefox y webkit), lo que sugiere que se están probando las mismas funcionalidades en distintos entornos para asegurar la compatibilidad. 
3 passed = > indica que las tres pruebas han pasado exitosamente, es decir, han cumplido con las expectativas definidas en los tests sin errores.



*/