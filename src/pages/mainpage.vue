<template>
<div class="fullpage-container">
  <div class="pagination">
       <div class="pagination-item" @click="moveTo(0)" :class="{ 'pagination-item-active' : this.curIndex === 0}"></div>
       <div class="pagination-item" @click="moveTo(1)" :class="{ 'pagination-item-active' : this.curIndex === 1}"></div>
       <div class="pagination-item" @click="moveTo(2)" :class="{ 'pagination-item-active' : this.curIndex === 2}"></div>
       <div class="pagination-item" @click="moveTo(3)" :class="{ 'pagination-item-active' : this.curIndex === 3}"></div>
     </div>
   <div class="fullpage-wp" v-fullpage="opts" ref="fullpage">
      <div class="page-1 page mainpage wrapper">
      <transition name="fade">
        <div class="modal-overlay" v-if="openModal" @click="closeModal()"></div>
      </transition>
          <transition name="fade">
          <div class="modal" v-if="openModal && modalPage === 'login'">
            <div href="#" class="modal-close" @click="closeModal()"></div>
            <div class="modal-title">ЛИЧНЫЙ КАБИНЕТ</div>
            <div class="modal-content">
              <form class="modal-form mb" @submit.prevent="">
                <div class="modal-input-wrap mb">
                  <input type="text" class="modal-input" placeholder="Введите ваш логин">
                </div>
                <div class="modal-input-wrap">
                  <input type="password" class="modal-input" placeholder="Введите ваш пароль">
                </div>
                <div class="modal-form-error mb" v-if="hasError">Неверный логин или пароль</div>
                <a href="#" @click="modalPage = 'recovery'"  class="modal-link">Забыли пароль?</a>
                <router-link to="/lk" class="modal-btn">Войти</router-link>
              </form>
              <button type="button" class="modal-btn" @click="modalPage = 'reg'">Регистрация</button>
            </div>
          </div>
          </transition>
          <transition name="fade">
          <div class="modal" v-if="openModal && modalPage === 'reg'">
            <div href="#" class="modal-close" @click="closeModal()"></div>
            <a class="btn-back modal-back" @click="modalPage = 'login'" href="#">Назад</a>
            <div class="modal-title">РЕГИСТРАЦИЯ</div>
            <div class="modal-content">
              <form class="modal-form mb" @submit.prevent="">
                <div class="modal-input-wrap mb">
                  <input type="text" class="modal-input" placeholder="Логин">
                </div>
                <div class="modal-input-wrap mb">
                  <input type="password" class="modal-input" placeholder="Пароль">
                </div>
                <div class="modal-input-wrap mb">
                  <input type="password" class="modal-input" placeholder="Повторите пароль">
                </div>
                <div class="modal-form-error mb" v-if="hasError">Пароли не совпадают</div>
                <button type="submit" class="modal-btn">Создать аккаунт</button>
              </form>
            </div>
          </div>
          </transition>
          <transition name="fade">
          <div class="modal" v-if="openModal && modalPage === 'recovery'">
            <div href="#" class="modal-close" @click="closeModal()"></div>
            <a class="btn-back modal-back" @click="modalPage = 'login'" href="#">Назад</a>
            <div class="modal-title">ВОССТАНОВЛЕНИЕ ПАРОЛЯ</div>
            <div class="modal-content">
              <form class="modal-form mb" @submit.prevent="">
                <div class="modal-input-wrap mb">
                  <input type="text" class="modal-input" placeholder="Логин">
                </div>
                <button type="submit" class="modal-btn" @click="modalPage = 'newPass'">Продолжить</button>
              </form>
            </div>
          </div>
          </transition>
          <transition name="fade">
          <div class="modal" v-if="openModal && modalPage === 'newPass'">
            <div href="#" class="modal-close" @click="closeModal()"></div>
            <a class="btn-back modal-back" @click="modalPage = 'login'" href="#">Назад</a>
            <div class="modal-title">НОВЫЙ ПАРОЛЬ</div>
            <div class="modal-content">
              <form class="modal-form mb" @submit.prevent="">
                <div class="modal-input-wrap mb">
                  <input type="text" class="modal-input" placeholder="Введите новый пароль">
                </div>
                <button type="submit" class="modal-btn">Сохранить</button>
              </form>
            </div>
          </div>
          </transition>
        <transition name="fade">
          <div class="loading-overlay" v-if="load" :class="{ loading: load }">
          </div>
        </transition>
        <div class="logo" :class="{ loading: load }"><img src="/images/logo-big2.png" alt=""></div>
        <svg @click="activeMenu = !activeMenu" :class="{ active: activeMenu }" class="ham hamRotate ham4" viewBox="0 0 100 100" width="80">
          <path
                class="line top"
                d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
          <path
                class="line middle"
                d="m 70,50 h -40" />
          <path
                class="line bottom"
                d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
        </svg>
        <nav class="menu" :class="{ active: activeMenu }">
          <a class="menu-link" @click="moveTo(1)" href="#">О нас</a>
          <a class="menu-link" href="https://forum.fortisrp.ru/">Форум</a>
          <router-link class="menu-link" to="/donate">Донат</router-link>
          <a class="menu-link menu-link-lk--mob" href="#" @click="showModal(1)">Личный кабинет</a>
          <a class="menu-link-lk" href="#" @click="showModal(1)">
            <img class="menu-link-lk-icon" src="/images/lk.png" alt="">
          </a>
        </nav>
        <div class="girl animate__animated" v-animate="{value: 'animate__fadeIn', delay: homePageDelay }"></div>
        <h1 class="name">
          <p class="name-main animate__animated" v-animate="{value: 'animate__fadeIn', delay: homePageDelay }">FORTIS</p>
          <p class="name-main name-main--blured animate__animated" v-animate="{value: 'animate__pulse', delay: homePageDelay }">FORTIS</p>
          <p class="name-sub animate__animated" v-animate="{value: 'animate__fadeIn', delay: homePageDelay }">ROLEPLAY</p>
          <p class="name-stroked animate__animated" v-animate="{value: 'animate__fadeIn', delay: homePageDelay }">FORTIS</p>
        </h1>
        
        <div class="left-top">
          <div class="circle circle--2 purple anim-delay-1"></div>
          <div class="circle circle--3 red anim-delay-2"></div>
          <div class="circle circle--1 red anim-delay-3"></div>
        </div>
        <div class="left-bottom">
          <div class="circle circle--4 red anim-delay-6"></div>
          <div class="circle circle--5 purple anim-delay-5"></div>
          <div class="circle circle--6 purple anim-delay-4"></div>
        </div>
        <div class="reg-banner" :class="{ active: banner }">
          <div class="reg-banner-icon">
            <img src="/images/moneybag.png" alt="moneybag">
          </div>
          <div class="reg-banner-text">Регистрируйся и получай бонусы!</div>
          <div class="reg-banner-close" @click="banner = false">
            <img src="/images/close.png" alt="">
          </div>
        </div>
        <nav class="buttons">
          <a href="#" @click="moveTo(2)" class="main-btn animate__animated" v-animate="{value: 'animate__fadeInUp', delay: homePageDelay }">Начать играть</a>
          <a href="https://vk.com/fortisrp" class="social-btn social-btn-1 animate__animated" v-animate="{value: 'animate__fadeIn', delay: homePageDelay }"></a>
          <a href="https://www.twitch.tv/fortis_role_play" class="social-btn social-btn-2 animate__animated" v-animate="{value: 'animate__fadeIn', delay: homePageDelay }"></a>
          <a href="https://www.youtube.com/channel/UCXbi1k6SD4CTkQv7RYesSXg" class="social-btn social-btn-3 animate__animated" v-animate="{value: 'animate__fadeIn', delay: homePageDelay }"></a>
          <a href="https://discord.gg/6C9nZDt" class="social-btn social-btn-4 animate__animated" v-animate="{value: 'animate__fadeIn', delay: homePageDelay }"></a>
        </nav>
        <div class="monitoring">
          <div class="monitoring-title">Мониторинг</div>
          <div class="monitoring-body">{{ playersOnline }}</div>
        </div>
      </div>
      <div class="page-2 page about-us wrapper" >
        <div class="about-us__side animate__animated" v-animate="{value: 'animate__fadeInLeft'}">
          <div class="about-us__title">О НАС</div>
          <div class="about-us__text">Молодой и амбициозный проект с хорошей планкой ролевой игры. <br> Наш проект создан для того чтобы игроки могли ощутить настоящую ролевую игру без ООС информации в голосовой чат, отыгрыша визуально видных действий и прочей лабуды.</div>
          <div class="circle about-us__side-circle-1 anim-delay-6"></div>
          <div class="circle about-us__side-circle-2 anim-delay-2"></div>
        </div>
        <div class="about-us__man animate__animated" v-animate="{value: 'animate__fadeInRight', delay: 200 }">
        </div>
        <div class="circle about-us__circle-1 anim-delay-1"></div>
        <div class="circle about-us__circle-2 anim-delay-6"></div>
        <div class="circle about-us__circle-3 anim-delay-2"></div>
        <div class="circle about-us__circle-4 anim-delay-4"></div>
      </div>
      <div class="page-3 page howtostart wrapper">
        <div class="circle howtostart__circle-1 howtostart__circle anim-delay-1"></div>
        <div class="circle howtostart__circle-2 howtostart__circle anim-delay-2"></div>
        <div class="circle howtostart__circle-3 howtostart__circle anim-delay-3"></div>
        <div class="circle howtostart__circle-4 howtostart__circle anim-delay-4"></div>
        <div class="circle howtostart__circle-5 howtostart__circle anim-delay-5"></div>
        <div class="howtostart__man animate__animated" v-animate="{value: 'animate__fadeInLeft', delay: 100 }">
          <img src="/images/man2.png" alt="man" >
        </div>
        <h2 class="howtostart__title animate__animated" v-animate="{value: 'animate__fadeIn', delay: 100 }">КАК НАЧАТЬ ИГРАТЬ?</h2>
        <div class="howtostart__steps">
          <div class="howtostart__step animate__animated" v-animate="{value: 'animate__bounceInRight', delay: 0 }">
            <div class="howtostart__step-name">Шаг 1</div>
            <div class="howtostart__step-text">Купить и установить GTA V</div>
            <a href="https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/" class="howtostart__step-button">Скачать</a>
          </div>
          <div class="howtostart__step howtostart__step-2 animate__animated" v-animate="{value: 'animate__bounceInRight', delay: 300 }">
            <div class="howtostart__step-name">Шаг 2</div>
            <div class="howtostart__step-text">Скачать RAGE MP</div>
            <a href="https://rage.mp/" target="_blank" class="howtostart__step-button">Скачать</a>
          </div>
          <div class="howtostart__step animate__animated" v-animate="{value: 'animate__bounceInRight', delay: 600 }">
            <div class="howtostart__step-name">Шаг 3</div>
            <div class="howtostart__step-text">Ввести IP нашего сервера</div>
            <div class="howtostart__step-ip">{{ serverIp }}</div>
          </div>
        </div>
      </div>
      <div class="page-4 page socials wrapper">
        <div class="circle socials__circle socials__circle-1 purple anim-delay-1"></div>
        <div class="circle socials__circle socials__circle-2 red anim-delay-4"></div>
        <h2 class="socials__title animate__animated" v-animate="{value: 'animate__fadeIn', delay: 200 }">НАШИ СОЦИАЛЬНЫЕ СЕТИ</h2>
        <div class="social__items" >
          <div class="socials__block socials__block-1 animate__animated" v-animate="{value: 'animate__slideInUp', delay: 0 }">
            <a href="https://vk.com/fortisrp" class="socials__circle-link socials__circle-link-1"></a>
            <div class="socials__text">Самые свежие новости проекта!</div>
          </div>
          <div class="socials__block socials__block-2 animate__animated" v-animate="{value: 'animate__slideInUp', delay: 400 }">
            <a href="https://www.twitch.tv/fortis_role_play" class="socials__circle-link socials__circle-link-2"></a>
            <div class="socials__text">Прямые трансляции, где вы можете задать любой вопрос!</div>
          </div>
          <div class="socials__block socials__block-3 animate__animated" v-animate="{value: 'animate__slideInUp', delay: 800 }">
            <a href="https://www.youtube.com/channel/UCXbi1k6SD4CTkQv7RYesSXg" class="socials__circle-link socials__circle-link-3"></a>
            <div class="socials__text">Все видеоматериалы о сервере!</div>
          </div>
          <div class="socials__block socials__block-4 animate__animated" v-animate="{value: 'animate__slideInUp', delay: 1200 }">
            <a href="https://discord.gg/6C9nZDt" class="socials__circle-link socials__circle-link-4"></a>
            <div class="socials__text">Общение с другими игроками!</div>
          </div>
        </div>
        <footer class="footer animate__animated" v-animate="{value: 'animate__fadeInUp', delay: 2000 }">
          <div class="footer__logo"><img src="/images/logo.png" alt=""></div>
          <div class="footer__contacts">
            <div class="footer__contact">
              <div class="footer__contact-title">Наши контакты</div>
              <div class="footer__contact-items">
                <div class="footer__contact-item">
                  Email - partnership@fortisrp.ru </div>
                <div class="footer__contact-item">VK - <a href="https://vk.com/dedushka_rutich">https://vk.com/dedushka_rutich</a></div>
                <div class="footer__contact-item">
                  Telegram - @Rutich</div>
              </div>
            </div>
            <div class="footer__contact">
              <div class="footer__contact-title">Важное</div>
              <div class="footer__contact-items">
                <a href="https://forum.fortisrp.ru/" class="footer__contact-item">
                  Форум
                </a>
              </div>
            </div>
            <div class="footer__contact">
              <div class="footer__contact-title">Для пользователей</div>
              <div class="footer__contact-items">
                <router-link to="/policy" class="footer__contact-item">
                  Политика конфиденциальности
                </router-link>
                <router-link to="/contract" class="footer__contact-item">
                  Пользовательское соглашение
                </router-link>
              </div>
            </div>
          </div>
          <div class="footer__socials">
            <div class="footer__contact">
              <div class="footer__social-items">
                <a href="https://discord.gg/6C9nZDt" class="social-link footer__social-item">
                  <img src="/images/discord2.png" alt="">
                </a>
                <a href="https://www.youtube.com/channel/UCXbi1k6SD4CTkQv7RYesSXg" class="social-link footer__social-item">
                  <img src="/images/youtube2.png" alt="">
                </a>
                <a href="https://vk.com/fortisrp" class="footer__social-item social-link">
                  <img src="/images/vk2.png" alt="">
                </a>
                <a href="https://www.twitch.tv/fortis_role_play" class="footer__social-item social-link">
                  <img src="/images/Twitch2.png" alt="">
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
   </div>
</div>
</template>
<script>
 // Мониторинг

export default {
    data() {
      return{
        activeMenu: false,
        banner: false,
        modalPage: null,
        openModal: false,
        hasError: false,
        load: true,
        homePageDelay: 2400,
        curIndex: 0,
        playersOnline: 0,
        serverIp: 'fortis-rp.ru:22005',
        opts: {
          start: 0,
          dir: 'v',
          duration: 500,
          afterChange: (currentSlideEl, currentIndex) => {
            this.curIndex = currentIndex
            this.homePageDelay = 0
            console.log(this.homePageDelay)
          },
        }
      }
    },
    created(){
      this.pageLoading()
    },
    mounted(){
      this.showBanner()
      this.monitoring()
    },
    methods: {
      monitoring(){
        var request = new XMLHttpRequest();
        request.open('GET', 'https://cdn.rage.mp/master/', true);
        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = JSON.parse(request.responseText);
            for(var k in data) {
              if(k === this.serverIp){
                return this.playersOnline = data[k].players
              }
            }
          }
        }.bind(this)
        request.onerror = function() {
          // There was a connection error of some sort
        };
        request.send();
      },
      moveTo(e){
        this.$refs.fullpage.$fullpage.moveTo(e, true); //Move to the next page
      },
      showPage:function(){
        this.$refs.fullpage.$fullpage.$update();
      },
      showBanner(){
        setTimeout(() => {
          this.banner = true
        }, 4000);
      },
      showModal(modal){
        if(modal === 1) this.modalPage = 'login'
        if(modal === 2) this.modalPage = 'reg'
        if(modal === 3) this.modalPage = 'recovery'
        if(modal === 4) this.modalPage = 'newPass'
        this.openModal = true
        this.closeMenu()
      },
      closeModal(){
        this.openModal = false
      },
      closeMenu(){
        this.activeMenu = false
      },
      pageLoading(){
        setTimeout(() => {
          this.load = false
        }, 2000);
      }
    },
  };
</script>
<style lang="scss">
</style>