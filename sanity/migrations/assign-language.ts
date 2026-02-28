/**
 * Migration script: assign language 'es' to all existing documents
 * that don't yet have a `language` field.
 *
 * How to run:
 *   cd sanity
 *   npx sanity exec migrations/assign-language.ts --with-user-token
 *
 * This is SAFE — it only patches documents where `language` is null/missing.
 */

import { getCliClient } from 'sanity/cli'

const SCHEMA_TYPES = ['profile', 'project', 'experience', 'service']
const DEFAULT_LANGUAGE = 'es'

const client = getCliClient({ apiVersion: '2024-03-20' })

async function run() {
    for (const schemaType of SCHEMA_TYPES) {
        // Fetch docs that are missing the language field
        const docs = await client.fetch<{ _id: string }[]>(
            `*[_type == $type && !defined(language)]{ _id }`,
            { type: schemaType }
        )

        if (docs.length === 0) {
            console.log(`✓ [${schemaType}] No documents need migration.`)
            continue
        }

        console.log(`→ [${schemaType}] Patching ${docs.length} document(s) with language="${DEFAULT_LANGUAGE}".`)

        // Patch in batches using transaction
        const transaction = client.transaction()
        for (const doc of docs) {
            transaction.patch(doc._id, (p) => p.setIfMissing({ language: DEFAULT_LANGUAGE }))
        }

        await transaction.commit()
        console.log(`✓ [${schemaType}] Done.`)
    }

    console.log('\n✅ Migration complete. All existing documents now have language="es".')
}

run().catch((err) => {
    console.error('Migration failed:', err)
    process.exit(1)
})
