const {
  withNativeFederation,
  shareAll,
} = require("@angular-architects/native-federation/config");

module.exports = withNativeFederation({
  name: "mf-ventas",

  exposes: {
    "./ListarVentas": "./src/app/pages/listar-ventas/listar-ventas.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },

  skip: [
    "rxjs/ajax",
    "rxjs/fetch",
    "rxjs/testing",
    "rxjs/webSocket",
    // Paquetes solo-CSS/fuentes: se empaquetan vía styles.css, no vía federation
    "primeicons",
    "@fontsource-variable/geist",
    // El preset del tema se importa por subpath (@primeuix/themes/aura); se
    // empaqueta en la app en vez de compartirse para que resuelva en runtime.
    "@primeuix/themes",
    // Entradas de PrimeNG con dependencias opcionales que no usamos
    "primeng/chart",
    "primeng/editor",
    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
});
