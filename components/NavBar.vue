<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/public/images/logo/logo-toyota.png" alt="TOYOTA logo" />
      </a>

      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="item in navBarItems" :key="item.title" class="nav-item">
            <a class="nav-link" aria-current="page" :href="item.link">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </div>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <Icon name="material-symbols:search" size="1.5rem" />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">追蹤清單</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            <Icon name="material-symbols:person" size="1.5rem" />
            HI ，您好！
          </a>
          <ul class="dropdown-menu justify-content-center">
            <li>
              <a
                v-for="item in loginItems"
                :key="item.title"
                class="dropdown-item"
                href="/"
                >{{ item.title }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const navBarItems = [
      {
        title: '車款介紹',
        link: '/',
        child: [],
      },
      {
        title: 'TOYOTA bZ',
        link: '/',

        child: [],
      },
      {
        title: '品牌新知',
        link: '/news',

        child: [],
      },
      {
        title: '購車資訊',
        link: '/',

        child: [],
      },
      {
        title: '售後服務',
        link: '/',

        child: [],
      },
    ];

    const loginItems = [
      {
        title: '會員註冊/登入',
        link: '',
      },
      {
        title: '和泰集團會員中心',
        link: '',
      },
      {
        title: '愛車秘書',
        link: '',
      },
      {
        title: '車主新訊',
        link: '',
      },
      {
        title: '會員預約保養',
        link: '',
      },
      {
        title: '維修據點查詢',
        link: '',
      },
      {
        title: '車籍履歷查詢',
        link: '',
      },
      {
        title: '和泰Points',
        link: '',
      },
      {
        title: '購車和泰Pay支付',
        link: '',
      },
    ];

    return {
      navBarItems,
      loginItems,
    };
  },
});
</script>
<style scoped lang="scss">
img[alt='TOYOTA logo'] {
  width: 150px;
}
</style>
