<script lang="ts" setup>
import { ref } from 'vue'

const result = ref('')

type Operator = '+' | '-' | '*' | '/'

const OPERATORS: Operator[] = ['+', '-', '*', '/']

const BUTTONS = [
  '7',
  '8',
  '9',
  '+',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '*',
  '.',
  '0',
  '=',
  '/',
  'C'
]

const calculateResult = () => {
  try {
    if (!OPERATORS.includes(result.value[result.value.length - 1] as Operator)) {
      result.value = evaluateExpression(result.value)
    } else {
      result.value = evaluateExpression(result.value.slice(0, -1))
    }
  } catch (e) {
    result.value = 'Error'
  }
}

const addOperator = (operator: Operator) => {
  const lastChar = result.value[result.value.length - 1]

  if (result.value === '' && operator !== '-') {
    return
  }

  if (!OPERATORS.includes(lastChar as Operator)) {
    result.value += operator
  } else if (lastChar !== operator) {
    result.value = result.value.slice(0, -1) + operator
  }
}

const handleClickButton = (value: string) => {
  if (result.value === 'Error') {
    result.value = ''
  }

  const lastChar = result.value[result.value.length - 1]

  if (value === '.' && (lastChar === '.' || result.value === '')) {
    return
  }

  switch (value) {
    case 'C':
      result.value = ''
      break
    case '=':
      if (result.value && !OPERATORS.includes(lastChar as Operator)) {
        calculateResult()
      }
      break
    case '+':
    case '-':
    case '*':
    case '/':
      addOperator(value as Operator)
      break
    default:
      result.value += value
  }
}

const evaluateExpression = (expression: string): string => {
  try {
    const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '')
    const result = new Function(`return ${sanitizedExpression}`)()

    if (result === Infinity || result === -Infinity) {
      return 'Error'
    }

    return result.toString()
  } catch {
    return 'Error'
  }
}
</script>

<template>
  <div class="calculator">
    <input
      v-model="result"
      type="text"
      readonly
      class="calculator__input"
    />

    <button
      v-for="value in BUTTONS"
      :key="value"
      :aria-label="value"
      @click="handleClickButton(value)"
      class="calculator__button"
    >
      {{ value }}
    </button>
  </div>
</template>

<style src="./App.css" />
