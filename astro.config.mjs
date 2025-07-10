import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import starlightFullViewMode from "starlight-fullview-mode";

// https://astro.build/config
export default defineConfig({
  site: "https://openpayments.es",
  integrations: [
    starlight({
      title: "Pagos Abiertos",
      description: "An API for open access to financial accounts to send and receive payments.",
      locales: {
        root: {
          label: "Español",
          lang: "es",
        },
      },
      head: [
        {
          tag: "script",
          attrs: {
            defer: true,
            "data-website-id": "76afa57f-78bb-48ab-a9e4-095a32d8a1b9",
            src: "https://ilf-site-analytics.netlify.app/script.js",
            "data-domains": "openpayments.dev",
          },
        },
      ],
      components: {
        Header: "./src/components/Header.astro",
        PageSidebar: "./src/components/PageSidebar.astro",
      },
      customCss: [
        "./node_modules/@interledger/docs-design-system/src/styles/teal-theme.css",
        "./node_modules/@interledger/docs-design-system/src/styles/ilf-docs.css",
        "./src/styles/openpayments.css",
      ],
      expressiveCode: {
        styleOverrides: {
          borderColor: "transparent",
          borderRadius: "var(--border-radius)",
        },
      },
      logo: {
        src: "./public/favicon.svg",
      },
      plugins: [
        starlightLinksValidator({
          errorOnLocalLinks: false,
          errorOnFallbackPages: false,
        }),
        starlightFullViewMode(),
      ],
      sidebar: [
        {
          label: "Overview",
          translations: {
            es: "Resumen",
          },
          items: [
            {
              label: "Concepts",
              translations: {
                es: "Conceptos",
              },
              collapsed: false,
              items: [
                {
                  label: "Wallet addresses",
                  translations: {
                    es: "Direcciones de billetera",
                  },
                  link: "/concepts/wallet-addresses/",
                },
                {
                  label: "Resources",
                  translations: {
                    es: "Recursos",
                  },
                  link: "/concepts/resources/",
                },
                {
                  label: "Authorization",
                  translations: {
                    es: "Autorización",
                  },
                  link: "/concepts/auth/",
                },
                {
                  label: "Payment methods",
                  translations: {
                    es: "Métodos de pago",
                  },
                  link: "/concepts/payments/",
                },
                {
                  label: "Open Payments flow",
                  translations: {
                    es: "Flujo de Pagos Abiertos",
                  },
                  link: "/concepts/op-flow/",
                },
              ],
            },
          ],
        },
        {
          label: "Guides",
          translations: {
            es: "Guías",
          },
          collapsed: true,
          items: [
            {
              label: "Make a one-time payment",
              translations: {
                es: "Hacer un pago único",
              },
              link: "/guides/make-onetime-payment/",
            },
            {
              label: "Make recurring payments",
              translations: {
                es: "Hacer pagos recurrentes",
              },
              link: "/guides/make-recurring-payments/",
            },
            {
              label: "Split an incoming payment",
              translations: {
                es: "Dividir un pago entrante",
              },
              link: "/guides/split-payments/",
            },
            {
              label: "Get an outgoing payment grant for future payments",
              
              link: "/guides/outgoing-grant-future-payments/",
              badge: "New",
            },
          ],
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/interledger/open-payments",
        },
      ],
    }),
  ],
  server: {
    port: 1108,
  },
});
