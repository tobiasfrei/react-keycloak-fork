import { createAuthProvider } from '@react-keycloak-fork/core'

import { reactKeycloakSsrContext } from './context'

export const KeycloakProvider = createAuthProvider(reactKeycloakSsrContext)
