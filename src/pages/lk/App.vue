<template>
  <div class="lk">
    <div class="circle lk-circle-1 lk-circle anim-delay-1"></div>
    <div class="circle lk-circle-2 lk-circle anim-delay-2"></div>
    <div class="circle lk-circle-3 lk-circle anim-delay-3"></div>
    <a class="btn-back lk-quit" href="/">Выйти</a>
    <div class="left">
      <div class="block info">
        <div class="info-avatar">
          <div class="avatar">
            <img :src="`/images/avatar-${gender}.png`" alt="">
          </div>
          <div class="switch">
            <div class="switch-container">
              <div class="switch__button" :class="{ inactive: inactive }">
                <div class="switch__button-arrow arrow-left">
                  <img src="/images/arrow.png" alt="">
                </div>
                <div class="switch__button-text">Пред.</div>
              </div>
              <div class="switch__button" :class="{ inactive: inactive }">
                <div class="switch__button-text">След.</div>
                <div class="switch__button-arrow arrow-right">
                  <img src="/images/arrow.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="info-main">
          <div class="info-main-general">
            <div class="info-main__name">
              <p>Имя</p>
              <p>Фамилия</p>
            </div>
            <div class="info-main__status">Статус: <span :class="{ 'color-green' : online, 'color-red': !online }">{{ online ? 'online' : 'offline' }}</span></div>
          </div>
          <div class="info-work">
            <div class="info-main__status">Работа: <span :class="{ 'color-green' : hasWork, 'color-red': !hasWork }">{{ hasWork ? 'есть' : 'нет' }}</span></div>
            <div class="info-main__status">Фракция: <span>The Vagos Gang</span></div>
            <div class="info-main__status">Должность: <span>Burito</span></div>
            <div class="info-main__status">Зароботная плата: <span>10000 $</span></div>
          </div>
        </div>
      </div>
      <div class="block actions">
        <div class="actions-btn lk-btn" @click="openModal(1)">
          Денежный лог
        </div>
        <div class="actions-btn lk-btn" @click="openModal(2)">
          Лог входа
        </div>
      </div>
      <section class="block block-bg quests">
        <h1 class="block-title">Квесты</h1>
        <div class="quests-body">
          <div class="quests-content">
            <div class="quests-content__title">Название квеста</div>
            <div class="quests-content__text">Lorem ipsum dolor sm ipsum dolor sit amet, consectm ipsum dolor sit amet, consectm ipsum dolor sit amet, consectm ipsum dolor sit amet, consectm ipsum dolor sit amet, consectm ipsum dolor sit amet, consectm ipsum dolor sit amet, consectm ipsum dolor sit amet, consectm ipsum dolor sit amet, consectm ipsum dolor sit amet, consectm ipsum dolor sit amet, consectit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <ul class="quests-list">
            <li class="quests-list-item lk-btn" >Название квеста</li>
            <li class="quests-list-item lk-btn" :class="{ inactive: inactive }">Название квеста</li>
            <li class="quests-list-item lk-btn" :class="{ inactive: inactive }">Принести то</li>
            <li class="quests-list-item lk-btn" :class="{ inactive: inactive }">Принести се</li>
            <li class="quests-list-item lk-btn" :class="{ inactive: inactive }">Встретиться с тем то</li>
            <li class="quests-list-item lk-btn" :class="{ inactive: inactive }">Попросить того сделать се</li>
            <li class="quests-list-item lk-btn" :class="{ inactive: inactive }">Поехать туда чтобы сделать то а потом се</li>
          </ul>
        </div>
      </section>
    </div>
    <div class="right">
      <section class="block block-bg personal">
        <h1 class="block-title">Имущество</h1>
        <div class="personal-body">
          <div class="personal-item">
            <div class="personal-item-title">
              <span>Дом: </span><span :class="{ 'color-green' : house, 'color-red': !house }">{{ house ? '№' + house : 'нет' }}</span>
            </div>
            <div class="personal-item-content">
              <div class="personal-item-stat">
                <span>Класс дома: </span><span>Premium +</span>
              </div>
              <div class="personal-item-stat">
                <span>Налог в неделю: </span><span>22222$</span>
              </div>
            </div>
          </div>
          <div class="personal-item">
            <div class="personal-item-title">
              <span>Бизнес: </span>
              <span :class="{ 'color-green' : business, 'color-red': !business }">{{ business ? business : 'нет' }}</span>
            </div>
            <div class="personal-item-content">
              <div class="personal-item-stat">
                <span>Налог в неделю: </span><span>1111$</span>
              </div>
            </div>
          </div>
          <div class="personal-item personal-auto">
            <div class="personal-item-title">
              <span>Автомобили: </span>
            </div>
            <div class="personal-item-content personal-auto-items">
              <div class="personal-item-stat" :class="{ inactive: !carSlot1 }">
                <div class="personal-auto-name">-Sultan RS</div>
                <div>Налог в неделю: <span>2999$</span></div>
              </div>
              <div class="personal-item-stat" :class="{ inactive: !carSlot2 }">
                <div class="personal-auto-name">-Elegy Retro Custom</div>
                <div>Налог в неделю: <span>29929$</span></div>
              </div>
              <div class="personal-item-stat" :class="{ inactive: !carSlot3 }">
                <div class="personal-auto-name">-Bravado Buffalo</div>
                <div>Налог в неделю: <span>нет</span></div>
              </div>
              <div class="personal-item-stat" :class="{ inactive: !carSlot4 }">
                <div class="personal-auto-name">Свободное место</div>
                <div>Налог в неделю: <span>нет</span></div>
              </div>
              <div class="personal-item-stat" :class="{ inactive: !carSlot5 }">
                <div class="personal-auto-name">Свободное место</div>
                <div>Налог в неделю: <span>нет</span></div>
              </div>
              <div class="personal-item-stat" :class="{ inactive: !carSlot6 }">
                <div class="personal-auto-name">Свободное место</div>
                <div>Налог в неделю: <span>нет</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="block block-bg features">
        <h1 class="block-title">Характеристики</h1>
        <ul class="features-skills">
          <li class="features-skills-item">
            <div class="skills-item-amount">0%</div>
            <div class="skills-item-name">Рыболов</div>
          </li>
          <li class="features-skills-item">
            <div class="skills-item-amount">0%</div>
            <div class="skills-item-name">Электрик</div>
          </li>
          <li class="features-skills-item">
            <div class="skills-item-amount">46%</div>
            <div class="skills-item-name">Фермер</div>
          </li>
          <li class="features-skills-item">
            <div class="skills-item-amount">0%</div>
            <div class="skills-item-name">Зависимость</div>
          </li>
          <li class="features-skills-item">
            <div class="skills-item-amount">100%</div>
            <div class="skills-item-name">Взломщик</div>
          </li>
        </ul>
        <div class="features-stats">
          <div class="features-stats-col">
            <div class="features-stats-item">
              <span>Отыграно: </span><span>23 ч.</span>
            </div>
            <div class="features-stats-item">
              <span>Регистрация:  </span><span>19/22/2020</span>
            </div>
            <div class="features-stats-item">
              <span>Последний вход: </span><span>19/22/2020</span>
            </div>
            <div class="features-stats-item">
              <span>VIP: </span><span>Platinum до 01/01/2020 </span>
            </div>
          </div>
          <div class="features-stats-col">
            <div class="features-stats-item">
              <span>Наличка: </span><span>234.000.000$</span>
            </div>
            <div class="features-stats-item">
              <span>Предупреждений: </span><span>2</span>
            </div>
            <div class="features-stats-item">
              <span>Деморганов всего: </span><span>222  мин. </span>
            </div>
            <div class="features-stats-item">
              <span>Банов: </span><span :class="{ 'color-green' : hasBan, 'color-red': !hasBan }">{{ hasBan ? hasBan.amount : 'нет' }}</span>
            </div>
          </div>
          <div class="features-stats-col">
            <div class="features-stats-item">
              <span>На карте: </span><span>234.000.000$</span>
            </div>
            <div class="features-stats-item">
              <span>Имущество: </span><span>256.000.000$</span>
            </div>
            <div class="features-stats-item">
              <span>Карта: </span><span>2334 2357 9953</span>
            </div>
            <div class="features-stats-item">
              <span>Активная SIM: </span><span>893 610</span>
            </div>
          </div>
        </div>
      </section>
      <section class="block block-bg licenses">
        <h1 class="block-title">Лицензии</h1>
        <ul class="licenses-body">
          <li class="licenses-item" :class="{ inactive: !catA }">
            <div class="licenses-item-icon">
              <img src="/images/moto.png" alt="">
            </div>
            <div class="licenses-item-text">Категория A</div>
          </li>
          <li class="licenses-item" :class="{ inactive: !catB }">
            <div class="licenses-item-icon">
              <img src="/images/auto.png" alt="">
            </div>
            <div class="licenses-item-text">Категория B</div>
          </li>
          <li class="licenses-item" :class="{ inactive: !catC }">
            <div class="licenses-item-icon">
              <img src="/images/catC.png" alt="">
            </div>
            <div class="licenses-item-text">Категория C</div>
          </li>
          <li class="licenses-item" :class="{ inactive: !catD }">
            <div class="licenses-item-icon">
              <img src="/images/catD.png" alt="">
            </div>
            <div class="licenses-item-text">Категория D</div>
          </li>
          <li class="licenses-item" :class="{ inactive: !catCE }">
            <div class="licenses-item-icon">
              <img src="/images/catCE.png" alt="">
            </div>
            <div class="licenses-item-text">Категория C+E</div>
          </li>
          <li class="licenses-item" :class="{ inactive: !catL }">
            <div class="licenses-item-icon">
              <img src="/images/catL.png" alt="">
            </div>
            <div class="licenses-item-text">Категория L</div>
          </li>
          <li class="licenses-item" :class="{ inactive: !catV }">
            <div class="licenses-item-icon">
              <img src="/images/catV.png" alt="">
            </div>
            <div class="licenses-item-text">Категория V</div>
          </li>
          <li class="licenses-item" :class="{ inactive: !medCard }">
            <div class="licenses-item-icon">
              <img src="/images/licmed.png" alt="">
            </div>
            <div class="licenses-item-text">Мед-карта</div>
          </li>
          <li class="licenses-item" :class="{ inactive: !gunLicense }">
            <div class="licenses-item-icon">
              <img src="/images/licgun.png" alt="">
            </div>
            <div class="licenses-item-text">Лицензия на оружие</div>
          </li>
          <li class="licenses-item" :class="{ inactive: !fishLicense }">
            <div class="licenses-item-icon">
              <img src="/images/licfish.png" alt="">
            </div>
            <div class="licenses-item-text">Лицензия рыболова</div>
          </li>
        </ul>
      </section>
    </div>
    <transition name="fade">
    <div class="modal-overlay" v-if="modal != null" @click="closeModal()"></div>
    </transition>
    <transition name="fade">
    <div class="modal lk-modal moneyLog" v-if="modal === 1">
      <div class="modal-close" @click="closeModal()"></div>
      <div class="modal-title">Денежный лог</div>
      <div class="modal-body">
        <div class="table-head">
          <div class="table-col">Номер</div>
          <div class="table-col" :class="{ fixOffset: scrollbar }">Тип операции</div>
          <div class="table-col" :class="{ fixOffset: scrollbar }">Сумма</div>
          <div class="table-col" :class="{ fixOffset: scrollbar }">Дата, время</div>
        </div>
        <div class="table-body" ref="tableBody">
          <div class="table-row">
            <div class="table-col">35</div>
            <div class="table-col">Lorem ipsum dolor
              Lorem ipsum dolor</div>
            <div class="table-col" :class="{ 'color-green': money = 'plus', 'color-red': money = 'minus' }">-50000</div>
            <div class="table-col">06.12.2020, 16:00</div>
          </div>
          <div class="table-row">
            <div class="table-col">35</div>
            <div class="table-col">Lorem ipsum dolor
              Lorem ipsum dolor</div>
            <div class="table-col color-green">+50000</div>
            <div class="table-col">06.12.2020, 16:00</div>
          </div>
          <div class="table-row">
            <div class="table-col">35</div>
            <div class="table-col">Lorem ipsum dolor
              Lorem ipsum dolor</div>
            <div class="table-col color-green">+50000</div>
            <div class="table-col">06.12.2020, 16:00</div>
          </div>
          <div class="table-row">
            <div class="table-col">35</div>
            <div class="table-col">Lorem ipsum dolor
              Lorem ipsum dolor</div>
            <div class="table-col color-green">+50000</div>
            <div class="table-col">06.12.2020, 16:00</div>
          </div>
          <div class="table-row">
            <div class="table-col">35</div>
            <div class="table-col">Lorem ipsum dolor
              Lorem ipsum dolor</div>
            <div class="table-col color-green">+50000</div>
            <div class="table-col">06.12.2020, 16:00</div>
          </div>
          <div class="table-row">
            <div class="table-col">35</div>
            <div class="table-col">Lorem ipsum dolor
              Lorem ipsum dolor</div>
            <div class="table-col color-green">+50000</div>
            <div class="table-col">06.12.2020, 16:00</div>
          </div>
          <div class="table-row">
            <div class="table-col">35</div>
            <div class="table-col">Lorem ipsum dolor
              Lorem ipsum dolor</div>
            <div class="table-col color-green">+50000</div>
            <div class="table-col">06.12.2020, 16:00</div>
          </div>
          <div class="table-row">
            <div class="table-col">35</div>
            <div class="table-col">Lorem ipsum dolor
              Lorem ipsum dolor</div>
            <div class="table-col color-green">+50000</div>
            <div class="table-col">06.12.2020, 16:00</div>
          </div>
          <div class="table-row">
            <div class="table-col">35</div>
            <div class="table-col">Lorem ipsum dolor
              Lorem ipsum dolor</div>
            <div class="table-col color-green">+50000</div>
            <div class="table-col">06.12.2020, 16:00</div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal lk-modal enterLog" v-if="modal === 2">
      <div class="modal-close" @click="closeModal()"></div>
      <div class="modal-title">Лог входа</div>
      <div class="modal-body">
        <div class="table-head">
          <div class="table-col">Номер</div>
          <div class="table-col" :class="{ fixOffset: scrollbar }">Дата, время</div>
        </div>
        <div class="table-body" ref="tableBody">
          <div class="table-row">
            <div class="table-col">35</div>
            <div class="table-col">06.12.2020, 16:00</div>
          </div>
        </div>
      </div>
    </div>
    </transition>
  </div>
</template>
<script>
export default {
  data(){
    return{
      gender: 'man',
      online: false,
      hasWork: true,
      house: 192,
      business: 'Прачечная №45',
      hasBan: false,
      inactive: true,
      catA: true,
      catB: false,
      catC: false,
      catD: false,
      catCE: false,
      catL: false,
      catV: false,
      medCard: false,
      gunLicense: false,
      fishLicense: false,
      carSlot1: 'Sultan RS',
      carSlot2: 'Elegy Retro Custom',
      carSlot3: 'Bravado Buffalo',
      carSlot4: null,
      carSlot5: null,
      carSlot6: null,
      modal: null,
      money: 'plus',
      scrollbar: false
    }
  },
  mounted(){
    this.fixOffset()
  },
  methods:{
    openModal(e){
      if (e === 1) this.modal = 1;
      if (e === 2) this.modal = 2;
      document.documentElement.style.position = 'fixed'
      document.documentElement.style.overflow = 'hidden'
      setTimeout(() => {
        this.fixOffset()
      }, 0);
    },
    closeModal(){
      this.modal = null
      document.documentElement.style.position = 'static'
      document.documentElement.style.overflow = 'auto'
    },
    fixOffset(){
      if(this.$refs.tableBody.scrollHeight > this.$refs.tableBody.clientHeight){
        this.scrollbar = true
      }
    }
  },
}
</script>