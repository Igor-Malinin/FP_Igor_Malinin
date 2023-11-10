<template>
  <form class="form" @submit.prevent="submit">
    <div class="data__container required">
      <input type="text" class="form__input" placeholder="Имя"
             v-model="formDataStore.name" required autocomplete="none"
             @input="dirty('name')" @blur="dirty('name')"
             :class="{input__danger: empty.name}"
      >
      <span class="danger" v-if="empty.name">Пожалуйста введите имя</span>
    </div>
    <div class="data__container required">
      <input type="text" class="form__input" placeholder="Фамилия"
             v-model="formDataStore.surname" required autocomplete="none"
             @input="dirty('surname')" @blur="dirty('surname')"
             :class="{input__danger: empty.surname}"
      >
      <span class="danger" v-if="empty.surname">Пожалуйста введите фамилию</span>
    </div>
    <div class="data__container required">
      <input type="text" class="form__input" placeholder="Email"
             v-model.trim="formDataStore.email" required autocomplete="none"
             @input="dirty('email')" @blur="dirty('email')"
             :class="{input__danger: empty.email}"
      >
      <span class="danger" v-if="empty.email">Пожалуйста введите email</span>
      <span class="danger" v-if="touchedEmail && !empty.email && !this.checkEmail">Пожалуйста введите корректный email</span>
    </div>
    <div class="data__container">
      <input data-tel-input type="text" class="form__input" placeholder="+X XXX XXX XX XX"
             v-model="formDataStore.phone" autocomplete="none"
             :class="{input__danger: !this.checkPhone()}"
      >
      <span class="danger" v-if="!this.checkPhone()">Закончите ввод телефона</span>
    </div>
    <div class="data__container required">
      <textarea class="form__input form__input-textarea" placeholder="Сообщение"
                v-model="formDataStore.message" required autocomplete="none"
                @input="dirty('message')" @blur="dirty('message')"
                :class="{input__danger: empty.message}"
      ></textarea>
      <span class="danger" v-if="empty.message">Пожалуйста введите сообщение</span>
    </div>
<!--    <p class="form__privacy form__privacy_bottom" :style="setOrder()">*Мы никому не передаем ваши данные. <br>  И не сохраняем ваш номер в базу.</p>-->
    <button type="submit" class="form__btn" :disabled="disabled">Отправить</button>
  </form>
</template>

<script>
import mask_list from "@/libs/phoneMask/mask_list";
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "TheForm",
  mixins: [mask_list],
  props: {
    style: Number
  },
  data() {
    return {
      selector: '[data-tel-input]',
      emailPattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      checkEmail: false,
      touchedEmail: false,
      phoneValid: true,
      matLen: 0,
      disabled: true,
      empty: {
        name: false,
        surname: false,
        email: false,
        message: false
      },
      formData: {
        name: "",
        surname: "",
        email: "",
        phone: "",
        message: ""
      }
    }
  },
  updated() {
    this.enable()
  },
  created() {
  },
  mounted() {
    let inputs = document.querySelectorAll(this.selector)
    this.matLen = this.formDataStore.phone.replace(/\s/g, "").length
    this.testEmail()
    inputs.forEach(input => {
      input.addEventListener('input', this.setMask)
      input.addEventListener('focus', this.setMask)
      input.addEventListener('blur', () => {
        if (input.value === '+') {
          this.formDataStore.phone = ""
          input.value = ''
          this.matLen = 0
        }
        else
          this.setMask
      })
    });

  },
  methods: {
    ...mapMutations({
      setFormDataStore: "postForm/setFormDataStore"
    }),

    setOrder() {
      return this.style ? `order: ${this.style}` : ""
    },
    dirty(field) {
      this.empty[field] = !this.formDataStore[field];
      if (field === 'email') {
        this.testEmail()
        this.touchedEmail = true
      }
    },
    testEmail() {
      this.checkEmail = this.emailPattern.test(this.formDataStore.email)
    },
    checkPhone() {
      return (this.formDataStore.phone.replace(/\s/g, "").length === this.matLen ^ this.formDataStore.phone !== "") ^ this.formDataStore.phone !== ""
    },
    enable() {
      this.disabled = !this.formDataStore.name || !this.formDataStore.surname ||
          !this.formDataStore.email || !this.formDataStore.message || !this.checkEmail ||
          !(this.checkPhone())
    },

    setMask() {
      let matrix = '+###############'
      let selectorValue = document.querySelector('[data-tel-input]')
      this.maskList.forEach(item => {
        let code = item.code.replace(/[\s#]/g, ''),
            phone = selectorValue.value.replace(/[\s#-)(]/g, '');
        if (phone.includes(code)) {
          matrix = item.code
          this.matLen = matrix.replace(/\s/g, "").length
          this.phoneValid = phone.length === matrix.replace(/\s/g, "").length
        }
      });

      let i = 0,
          val = selectorValue.value.replace(/\D/g, '')

      selectorValue.value = matrix.replace(/(?!\+)./g, function(a) {
        return /[#\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a
      })
      this.formDataStore.phone = selectorValue.value
    },

    submit() {
      if (this.$cookies.get(`request:${this.formDataStore.email}`))
        alert(`${this.$cookies.get(`request:${this.formDataStore.email}`)}, ваше обращение обрабатывается!`)
      else {
        this.$cookies.set(`request:${this.formDataStore.email}`, `${this.formDataStore.name} ${this.formDataStore.surname}`)
        alert(`${this.formDataStore.name} ${this.formDataStore.surname}, спасибо за обращение!`)
      }
      console.log(this.formDataStore)
    }
  },
  computed: {
    ...mapState({
      formDataStore: state => state.postForm.formDataStore
    }),
    ...mapGetters({
      getFormDataStore: "postForm/getFormDataStore"
    })
  }
}
</script>

<style lang="scss" scoped>

.form {
}

.data__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.form__input {
  position: relative;
  font-family: "Roboto";
  width: 100%;
  font-size: 16px;
  height: 50px;
  padding: 12px 12px 12px 34px;
  background-color: rgba(255, 255, 255, 0.2);
  color: $white;
  transition: background-color .2s ease-in;

  &::placeholder {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: $placeholder;
  }

  &:focus {
    background-color: rgba(255, 255, 255, 0.25);
  }
}

.input__danger {
  background-color: rgba(217, 146, 146, 0.3);
}

.form__input-textarea {
  resize: none;
  outline: none;
  line-height: 27px;
}

.required {
  position: relative;
}
.required:before {
  font-family: "Roboto";
  position: absolute;
  top: 0;
  left: 15px;
  content: "*";
  line-height: 54px;
  color: $placeholder;
}

.form__privacy {
  font-size: 13px;
  color: $privacy;
  text-align: center;
  line-height: 1.23;

  &_bottom {
    @include mediaTablet {
      grid-row: 4 / 5;
    }
  }
}

.form__btn {
  height: 50px;
  text-align: center;
  color: $white;
  font-weight: 700;
  padding: 12px;
  background-color: $accent;
  font-size: 17px;
  transition: all .2s ease-in;

  &:hover {
    background-color: saturate($accent, 15%);
  }

  &:disabled {
    background-color: rgba(143, 142, 131, 0.5);
    color: #cbc3bf;
    cursor: not-allowed;
  }
}

</style>
