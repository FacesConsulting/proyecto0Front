import { formatBytes } from '@/utils/utils'
import { describe, expect, test } from '@jest/globals'

describe('formatBytes', () => {
  test('Debe retornar un 1 KB', () => {
    expect(formatBytes(1024, 2)).toBe('1 KB')
  })
  test('Debe comillas vacias', () => {
    expect(formatBytes(undefined)).toBe('')
  })
  test('Debe retornar 2 KB', () => {
    expect(formatBytes(2048)).toBe('2 KB')
  })
  test('Debe retornar 0 bytes', () => {
    expect(formatBytes(0)).toBe('0 Bytes')
  })
  test('Debe retornar un entero', () => {
    expect(formatBytes(1024, 0)).toBe('1 KB')
  })
  test('Debe retornar un entero', () => {
    expect(formatBytes(1024, -10)).toBe('1 KB')
  })
})
