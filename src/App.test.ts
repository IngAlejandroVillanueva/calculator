import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import App from './App.vue'

describe('App.vue', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(App)
  })

  it('should initialize with an empty result', () => {
    const input = wrapper.find('input')

    expect(input.element.value).toBe('')
  })

  it('should display number when button is clicked', async () => {
    const button = wrapper.find('button[aria-label="7"]')

    await button.trigger('click')

    const input = wrapper.find('input')

    expect(input.element.value).toBe('7')
  })

  it('should perform addition correctly', async () => {
    await wrapper.find('button[aria-label="7"]').trigger('click')
    await wrapper.find('button[aria-label="+"]').trigger('click')
    await wrapper.find('button[aria-label="3"]').trigger('click')
    await wrapper.find('button[aria-label="="]').trigger('click')

    const input = wrapper.find('input')

    expect(input.element.value).toBe('10')
  })

  it('should perform subtraction correctly', async () => {
    await wrapper.find('button[aria-label="9"]').trigger('click')
    await wrapper.find('button[aria-label="-"]').trigger('click')
    await wrapper.find('button[aria-label="4"]').trigger('click')
    await wrapper.find('button[aria-label="="]').trigger('click')

    const input = wrapper.find('input')

    expect(input.element.value).toBe('5')
  })

  it('should perform multiplication correctly', async () => {
    await wrapper.find('button[aria-label="3"]').trigger('click')
    await wrapper.find('button[aria-label="*"]').trigger('click')
    await wrapper.find('button[aria-label="3"]').trigger('click')
    await wrapper.find('button[aria-label="="]').trigger('click')

    const input = wrapper.find('input')

    expect(input.element.value).toBe('9')
  })

  it('should perform division correctly', async () => {
    await wrapper.find('button[aria-label="8"]').trigger('click')
    await wrapper.find('button[aria-label="/"]').trigger('click')
    await wrapper.find('button[aria-label="4"]').trigger('click')
    await wrapper.find('button[aria-label="="]').trigger('click')

    const input = wrapper.find('input')

    expect(input.element.value).toBe('2')
  })

  it('should handle division by zero correctly', async () => {
    await wrapper.find('button[aria-label="9"]').trigger('click')
    await wrapper.find('button[aria-label="/"]').trigger('click')
    await wrapper.find('button[aria-label="0"]').trigger('click')
    await wrapper.find('button[aria-label="="]').trigger('click')

    const input = wrapper.find('input')

    expect(input.element.value).toBe('Error')
  })

  it('should clear the result when "C" is clicked', async () => {
    await wrapper.find('button[aria-label="7"]').trigger('click')
    await wrapper.find('button[aria-label="C"]').trigger('click')

    const input = wrapper.find('input')

    expect(input.element.value).toBe('')
  })
})
