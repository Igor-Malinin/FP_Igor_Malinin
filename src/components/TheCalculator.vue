<template>
  <div class="container">
    <div class="customization">
      <div class="calculator">
        <div class="calculator__input">
          <input class="input" type="text" autofocus v-model="currentNumber" maxlength="13">
          <button class="btn btn-cancel" @click="cancel">&lt;</button>
        </div>
        <div class="calculator__buttons">
          <div class="numbers">
            <button class="btn btn-clear" @click="reset">C</button>
            <button
                class="btn btn-operation"
                v-for="additional in additionals"
                @click="calculate(additional)"
            >{{additional}}</button>
            <button
                class="btn btn-number"
                v-for="n in [...Array(9).keys()].slice().reverse()"
                @click="inputNumber(n+1)"
            >{{n+1}}</button>
            <button class="btn btn-zero" @click="inputNumber(0)">0</button>
            <button class="btn" @click="inputDot">.</button>
          </div>
          <div class="operations">
            <button
                class="btn btn-operation"
                v-for="operation in operations"
                @click="calculate(operation)"
            >{{operation}}</button>
          </div>
        </div>
      </div>
    </div>
    <the-history
      :calculations="history"
    />
  </div>
</template>

<script>
import TheHistory from "@/components/TheHistory.vue";

export default {
  name: "TheCalculator",
  components: {TheHistory},
  data() {
    return {
      operations: ['÷', '×', '–', '+', '='],
      additionals: ['^', '√'],
      currentNumber: null,
      tempNumber: null,
      operation: "",
      history: [],
      cases: {
        '÷': (a,b) => a/b,
        '×': (a,b) => a*b,
        '–': (a,b) => a-b,
        '+': (a,b) => a+b,
        '^': (a,b) => Math.pow(a, b),
        '√': (a) => Number((Math.sqrt(a)).toFixed(2).toString()),
      }
    }
  },
  updated() {
    let input = document.querySelector(".input")
    if (!Number(input.value) && input.value !== '-'){
      input.value = input.value.replace(/\D/g,'')
    }
  },
  methods: {
    inputNumber(number) {
      let input = document.querySelector(".input").value
      if (input.length < 13) {
        input += number
        this.currentNumber = Number(input)
      }
    },
    inputDot() {
      let input = document.querySelector(".input").value
      if (input.length < 12)
        document.querySelector(".input").value += '.'
    },
    calculate(operation) {
      let input = document.querySelector(".input")

      if (this.tempNumber === null) {
        this.tempNumber = this.currentNumber
        this.currentNumber = null
        this.operation = operation
        if (operation === '√') {
          this.root()
        }
        input.focus()
      }
      else if (operation === '=') {
        this.tempNumber = this.formula()
        input.value = this.tempNumber

        this.currentNumber = this.tempNumber
        this.operation = ""
        this.tempNumber = null
        input.focus()
      }
      else {
        this.tempNumber = this.formula()
        input.value = ""
        this.operation = operation
        if (operation === '√') {
          this.root()
        }
        input.focus()
      }
    },
    formula() {
      let calculation = this.cases[this.operation](this.tempNumber, this.currentNumber)
      this.history.push(this.tempNumber + this.operation + this.currentNumber + ' = ' + calculation)
      let fixedOutput = String(Math.floor(calculation)).length
      if (fixedOutput > 13) {
        let indexOfE = String(calculation).indexOf("e")
        let toThePowerOutput
        if (indexOfE === -1) {
          toThePowerOutput = calculation / (Math.pow(10,fixedOutput-1))
          toThePowerOutput = String(toThePowerOutput).slice(0, 8) + "e+" + String(fixedOutput-1)
        }
        else {
          toThePowerOutput = calculation
          let power = String(toThePowerOutput).slice(indexOfE, String(toThePowerOutput).length)
          toThePowerOutput = String(toThePowerOutput).slice(0,8) + power
          console.log(power)
        }

        return toThePowerOutput
      }
      return Number((calculation).toFixed(13-fixedOutput).toString())
    },
    root() {
      this.currentNumber = this.cases[this.operation](this.tempNumber)
      this.history.push(this.operation + this.tempNumber + ' = ' + this.currentNumber)
      this.operation = ""
      this.tempNumber = null
    },
    reset() {
      this.currentNumber = null
      this.tempNumber = null
      this.operation = ""
      document.querySelector(".input").focus()
    },
    cancel() {
      let input = document.querySelector(".input").value
      input = input.slice(0, -1)
      this.currentNumber = Number(input)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  column-gap: 40px;
}

.customization {
  width: max-content;
  padding: 6px;
  border: 1px solid $accent;
  border-radius: 8px;
  background-color: #413c2e;
}

.calculator {
  padding: 20px 15px;
  width: 220px;
  border: 1px solid $accent;
  border-radius: 6px;
  background-color: $dark;
}

.calculator__input {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.calculator__buttons {
  display: flex;
  align-items: flex-end;
  //gap: 10px;
}

.numbers {
  width: 140px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.operations {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  margin-left: 10px;
}

.input {
  padding: 0 8px;
  text-align: right;
  width: 140px;
  color: $accent;
  caret-color: transparent;
  border: 1px solid $accent;
  border-radius: 10px;
  background-color: $dark_accent;
}
.input:focus {
  border: 1px solid #f1e7c5;
}

.btn {
  width: 40px;
  height: 40px;
  color: $accent;
  border: 1px solid $accent;
  border-radius: 50%;
}

.btn-operation {
  background-color: $dark_accent;
}

.btn-zero {
  grid-column-start: 1;
  grid-column-end: 3;
  width: 90px;
  border-radius: 40px;
}

.btn-clear {
  background-color: $red;
}
</style>