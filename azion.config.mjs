/**
 * This file was automatically generated based on your preset configuration.
 *
 * For better type checking and IntelliSense:
 * 1. Install azion config as dev dependency:
 *    npm install -D @aziontech/config
 *
 * 2. Use defineConfig:
 *    import { defineConfig } from '@aziontech/config'
 *
 * 3. Replace the configuration with defineConfig:
 *    export default defineConfig({
 *      // Your configuration here
 *    })
 *
 * For more configuration options, visit:
 * https://github.com/aziontech/lib/tree/main/packages/config
 */

export default {
  build: {
    preset: 'astro',
    polyfills: true
  },
  storage: [
    {
      name: 'astro-paper-fabricio-4',
      prefix: '20261009183401',
      dir: './dist',
      workloadsAccess: 'read_only'
    }
  ],
  connectors: [
    {
      name: 'astro-paper-fabricio-4',
      active: true,
      type: 'storage',
      attributes: {
        bucket: 'astro-paper-fabricio-4',
        prefix: '20261009183401'
      }
    }
  ],
  applications: [
    {
      name: 'astro-paper-fabricio-4',
      cache: [
        {
          name: 'astro-paper-fabricio-4',
          browser: {
            maxAgeSeconds: 7200
          },
          edge: {
            maxAgeSeconds: 7200
          }
        }
      ],
      rules: {
        request: [
          {
            name: 'Deliver Static Assets and Set Cache Policy',
            description:
              'Deliver static assets directly from storage and set cache policy',
            active: true,
            criteria: [
              [
                {
                  variable: '${uri}',
                  conditional: 'if',
                  operator: 'matches',
                  argument:
                    '\.(jpg|jpeg|png|gif|bmp|webp|svg|ico|ttf|otf|woff|woff2|eot|pdf|doc|docx|xls|xlsx|ppt|pptx|mp4|webm|mp3|wav|ogg|css|js|json|xml|html|txt|csv|zip|rar|7z|tar|gz|webmanifest|map|md|yaml|yml)$'
                }
              ]
            ],
            behaviors: [
              {
                type: 'set_connector',
                attributes: {
                  value: 'astro-paper-fabricio-4'
                }
              },
              {
                type: 'set_cache_policy',
                attributes: {
                  value: 'astro-paper-fabricio-4'
                }
              },
              {
                type: 'deliver'
              }
            ]
          },
          {
            name: 'Redirect to index.html',
            description: 'Handle directory requests by rewriting to index.html',
            active: true,
            criteria: [
              [
                {
                  variable: '${uri}',
                  conditional: 'if',
                  operator: 'matches',
                  argument: '.*/$'
                }
              ]
            ],
            behaviors: [
              {
                type: 'set_connector',
                attributes: {
                  value: 'astro-paper-fabricio-4'
                }
              },
              {
                type: 'rewrite_request',
                attributes: {
                  value: '${uri}index.html'
                }
              }
            ]
          },
          {
            name: 'Redirect to index.html for Subpaths',
            description: 'Handle subpath requests by rewriting to index.html',
            active: true,
            criteria: [
              [
                {
                  variable: '${uri}',
                  conditional: 'if',
                  operator: 'matches',
                  argument: '^(?!.*\/$)(?![\s\S]*\.[a-zA-Z0-9]+$).*'
                }
              ]
            ],
            behaviors: [
              {
                type: 'set_connector',
                attributes: {
                  value: 'astro-paper-fabricio-4'
                }
              },
              {
                type: 'rewrite_request',
                attributes: {
                  value: '${uri}/index.html'
                }
              }
            ]
          }
        ],
        response: []
      }
    }
  ],
  workloads: [
    {
      name: 'astro-paper-fabricio-4',
      active: true,
      infrastructure: 1,
      deployments: [
        {
          name: 'astro-paper-fabricio-4',
          current: true,
          active: true,
          strategy: {
            type: 'default',
            attributes: {
              application: 'astro-paper-fabricio-4'
            }
          }
        }
      ]
    }
  ]
}
