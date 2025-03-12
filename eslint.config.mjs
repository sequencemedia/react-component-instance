import globals from 'globals'

import {
  configs as standard
} from '@sequencemedia/eslint-config-standard'

import {
  configs as typescript
} from '@sequencemedia/eslint-config-typescript'

export default [
  {
    ...standard.recommended,
    files: [
      '**/*.{mjs,cjs,mts,cts}'
    ],
    languageOptions: {
      ...standard.recommended.languageOptions,
      globals: {
        ...globals.node
      }
    }
  },
  {
    ...typescript.recommended,
    files: [
      '**/*.{mts,cts}'
    ],
    languageOptions: {
      ...typescript.recommended.languageOptions,
      globals: {
        ...globals.node
      }
    }
  }
]
