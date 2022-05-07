import { createAuthProvider } from '@react-keycloak-fork/core'

import { reactKeycloakWebContext } from './context'

export const ReactKeycloakProvider = createAuthProvider(reactKeycloakWebContext)
