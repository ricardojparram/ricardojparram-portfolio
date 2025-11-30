import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { dashboardTool } from '@sanity/dashboard'
import { vercelWidget } from 'sanity-plugin-dashboard-widget-vercel'
import { schemaTypes } from './schemaTypes'

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
    })
  ],

  schema: {
    types: schemaTypes,
  },
})
