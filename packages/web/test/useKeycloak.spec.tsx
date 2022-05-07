import React, { JSXElementConstructor, ReactElement } from 'react'
import { renderHook } from '@testing-library/react'

import { createKeycloakStub } from './test-utils'

import { useKeycloak, ReactKeycloakProvider } from '../src'

afterEach(require('@testing-library/react').cleanup)

const createHookWrapper = () => ({
  children,
}: {
  children: ReactElement<any, string | JSXElementConstructor<any>>
}) => (
  <ReactKeycloakProvider authClient={createKeycloakStub()}>
    {children}
  </ReactKeycloakProvider>
)

describe('useKeycloak hook', () => {
  it('should return Keycloak (as object)', () => {
    const { result } = renderHook(() => useKeycloak(), {
      wrapper: createHookWrapper(),
    })

    const { keycloak } = result.current

    expect(keycloak).toBeDefined()
    expect(keycloak).toBeInstanceOf(Object)
  })

  it('should return initialized (as object)', () => {
    const { result } = renderHook(() => useKeycloak(), {
      wrapper: createHookWrapper(),
    })

    const { initialized } = result.current

    expect(initialized).toBeDefined()
    expect(initialized).toBe(false)
  })

  it('should return Keycloak (as array[0])', () => {
    const { result } = renderHook(() => useKeycloak(), {
      wrapper: createHookWrapper(),
    })

    const { keycloak } = result.current

    expect(keycloak).toBeDefined()
    expect(keycloak).toBeInstanceOf(Object)
  })

  it('should return initialized (as array[1])', () => {
    const { result } = renderHook(() => useKeycloak(), {
      wrapper: createHookWrapper(),
    })

    const { initialized } = result.current

    expect(initialized).toBeDefined()
    expect(initialized).toBe(false)
  })
})
