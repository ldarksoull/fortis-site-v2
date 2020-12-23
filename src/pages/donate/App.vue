<template>
  <div class="donate-page">
    <transition name="fade">
      <div class="modal-overlay" v-if="openModal" @click="closeModal()"></div>
    </transition>
    <transition name="fade">
    <div class="donate-modal" v-if="openModal && modalPage === 'donatePending'">
      <div href="#" class="modal-close" @click="closeModal()"></div>
      <div class="donate-modal__title">Обработка доната</div>
      <div class="donate-modal__text">Обрабатываем информацию о Вашем пожертвовании</div>
      <div class="donate-modal__info">
        <div class="donate-modal__info-icon"><img src="/images/clocks.png" alt="часики"></div>
        <div class="donate-modal__info-text">Пожалуйста, ожидайте</div>
        <div class="donate-modal__info-icon"><img src="/images/clocks.png" alt="часики"></div>
      </div>
    </div>
    </transition>
    <transition name="fade">
    <div class="donate-modal" v-if="openModal && modalPage === 'donateAccess'">
      <div href="#" class="modal-close" @click="closeModal()"></div>
      <div class="donate-modal__title">Ваш донат принят!</div>
      <div class="donate-modal__text">Игровую благодарность от нас Вы можете получить в игре:</div>
      <div class="donate-modal__info">
        <div class="donate-modal__info-text">“Меню персонажа” - “Донат”</div>
      </div>
    </div>
    </transition>
    <transition name="fade">
    <div class="donate-modal donate-modal--error" v-if="openModal && modalPage === 'donateError'">
      <div href="#" class="modal-close" @click="closeModal()"></div>
      <div class="donate-modal__title">Ошибка!</div>
      <div class="donate-modal__text">Возникла какая-то ошибка при Вашем донате, попробуйте ещё раз</div>
    </div>
    </transition>
    <div class="wrapper">
      <div class="circle donate-page-circle-1 anim-delay-1"></div>
      <div class="circle donate-page-circle-2 anim-delay-6"></div>
      <div class="circle donate-page-circle-3"></div>
      <div class="bandit-image"></div>
      <div class="donate-content">
        <a class="btn-back donate-btn-back" href="/">Назад</a>
        <div class="donate-block">
          <form name="payment" method="POST" action="https://anypay.io/merchant" accept-charset='utf-8' class="donate-form">
            <div class="donate-form__title">ДОНАТ</div>
            <div class="donate-form__inputs">
              <input type="text" class="donate-form__input" placeholder="Введите ваш логин">
              <input type="number" name='amount' class="donate-form__input" placeholder="Введите сумму пожертвования">
              <input type='hidden' name='merchant_id' :value="merchant_id">
              <input type='hidden' name='pay_id'>
              <input type='hidden' name='sign' :value="sign">
            </div>
            <button type="submit" class="button donate-form__button">
                Перейти к оплате
            </button>
          </form>
          <div class="donate-calc">
            <div class="donate-calc__title">
              <div class="donate-calc__title-icon"><img src="/images/calc.png" alt="иконка калькулятора"></div>
              <div class="donate-calc__title-text">Калькулятор валют</div>
            </div>
            <div class="donate-calc__body">
              <div class="donate-calc__input-wrap">
                <img class="donate-calc__input-type" src="/images/rub.png" alt="">
                <input class="donate-calc__input" v-model="r" type="number">
              </div>
              <img class="donate-calc__icon" src="/images/exchange-icon.png" alt="">
              <div class="donate-calc__input-wrap">
                <img class="donate-calc__input-type" src="/images/fortis-coin.png" alt="">
                <input class="donate-calc__input" :value="r ? r * 100 : null" readonly>
              </div>
            </div>
          </div>
        </div>
        <div class="donate-info donate-block">
          <div class="donate-info__title">БОНУСЫ</div>
          <div class="donate-info__bonus"><span class="bold">30 р. </span><div class="minus">&nbsp;-</div> Смена имени одного из ваших персонажей</div>
          <div class="donate-info__bonus"><span class="bold">50 р. </span><div class="minus">&nbsp;-</div> Смена внешности одного из ваших персонажей</div>
          <div class="donate-info__bonus"><span class="bold">1000 р. </span><div class="minus">&nbsp;-</div> Смена номера автомобиля (8 уникальных символов)</div>
          <div class="donate-info__title mt">VIP</div>
          <div class="donate-info__bonus"><div class="bold">500 р. за месяц - VIP Silver Аккаунт </div>
            <span>Второй персонаж без достижения 20 часов;</span> <span>+10% ко всем ЗП по фракциях и на работах;</span><span> Время ожидания воскрешения после реанимации уменьшено</span></div>
            <div class="donate-info__bonus mt5"><div class="bold">1000р. за месяц - VIP Patinum Аккаунт</div>
            <span>
  Второй персонаж без достижения 20 часов;</span><span> +20% ко всем ЗП по фракциях и на работах;</span><span>Время ожидания воскрешения после реанимации уменьшено;</span><span> Увеличения лимита оплаты налога дома/автомобиля/бизнеса в 2 раза;</span><span> Возможность иметь два дома</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "donate",
  data() {
    return {
      r: null,
      merchant_id: 6730,
      sign: "",
      modalPage: null,
      openModal: false,
    };
  },
  mounted() {
    const handleFormSubmit = event => {
      event.preventDefault();

      /*const login = document.forms.payment.ik_x_login.value;
      const errorDiv = document.querySelector(".text-error");
      const donateBtn = document.querySelector(".donate-btn");
      donateBtn.setAttribute("disabled", "disabled");
      errorDiv.textContent = "";

      (async () => {
        try {
          const rawResponse = await fetch("https://212.224.112.169:8081/loginCheck", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ login }),
          });
          if (rawResponse.status === 200) {
            document.forms.payment.submit();
          } else if (rawResponse.status === 429) {
            errorDiv.textContent = "Произошла ошибка, слишком много запросов, попробуйте позже";
          } else if (rawResponse.status === 203) {
            errorDiv.textContent = "Произошла ошибка, аккаунт не найден";
            donateBtn.removeAttribute("disabled");
          }
        } catch (e) {
          console.error(e);
          donateBtn.removeAttribute("disabled");
          errorDiv.textContent = "Произошла ошибка, попробуйте позже";
        }
      })();*/
    };
    const form = document.forms.payment;
    form.addEventListener("submit", handleFormSubmit);
    form.pay_id.value = getRandomInt(100000000000000, 999999999999999);
  },
  methods:{
    showModal(modal) {
      if (modal === 1) this.modalPage = "donatePending";
      if (modal === 2) this.modalPage = "donateAccess";
      if (modal === 3) this.modalPage = "donateError";
      this.openModal = true;
      document.documentElement.style.position = 'fixed'
      document.documentElement.style.overflow = 'hidden'
    },
    closeModal() {
      this.openModal = false;
      document.documentElement.style.position = 'static'
      document.documentElement.style.overflow = 'auto'
    },
  }
};
function getRandomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}
</script>