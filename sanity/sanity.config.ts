import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { dashboardTool } from '@sanity/dashboard'
import { vercelWidget } from 'sanity-plugin-dashboard-widget-vercel'
import { documentInternationalization } from '@sanity/document-internationalization'
import { schemaTypes } from './schemaTypes'

const SUPPORTED_LANGUAGES = [
  { id: 'es', title: 'Español' },
  { id: 'en', title: 'English' },
]

const I18N_SCHEMA_TYPES = ['profile', 'project', 'experience', 'service']

export default defineConfig({
  name: 'default',
  title: 'ricardojparram-portfolio',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,

  plugins: [
    structureTool(),
    visionTool(),
    dashboardTool({
      widgets: [
        vercelWidget()
      ]
    }),
    documentInternationalization({
      supportedLanguages: SUPPORTED_LANGUAGES,
      schemaTypes: I18N_SCHEMA_TYPES,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
