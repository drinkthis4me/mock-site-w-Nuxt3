<template>
  <nav
    class="navbar fixed-top navbar-expand-lg bg-white shadow justify-content-between"
  >
    <div class="container-fluid justify-content-start">
      <!-- Toggler button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Logo -->
      <a class="navbar-brand" href="#">
        <img
          src="@/images/logo/logo-toyota.png"
          alt="TOYOTA logo"
          width="150"
        />
      </a>

      <!-- nav-item -->
      <div id="navbarTogglerDemo01" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            v-for="item in navBarItems"
            :key="item.title"
            class="nav-item h-100 px-2 py-1"
          >
            <a
              class="nav-link"
              :href="item.link"
              data-bs-toggle="offcanvas"
              :data-bs-target="`#${item.data_bs_target}`"
              :aria-controls="item.data_bs_target"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
      </div>
      <!-- end of nav-item -->

      <!-- breadcrumb -->
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
            data-bs-toggle="offcanvas"
            data-bs-target="#searchBox"
            aria-controls="searchBox"
          >
            <Icon name="material-symbols:search" size="1.5em" />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link hr-line" href="#">
            <Icon name="mdi:heart" size="1.5em" />
            追蹤清單
          </a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            <Icon name="material-symbols:person" size="1.5em" />
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

  <!-- offcanvas menu -->
  <div class="global-menu-wrap">
    <div
      v-for="item in navBarItems"
      :id="item.data_bs_target"
      :key="item.data_bs_target"
      class="offcanvas offcanvas-top"
      tabindex="-1"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      :aria-labelledby="`${item.data_bs_target}Label`"
    >
      <div class="offcanvas-header">
        <h5 :id="`${item.data_bs_target}Label`" class="offcanvas-title">
          {{ item.title }}
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div class="container">
          <div
            v-if="item.child && item.child.length > 0"
            class="menu-subject-list"
          >
            <div class="list-group">
              <a
                v-for="childItem in item.child"
                :key="childItem.title"
                href="#"
                class="list-group-item list-group-item-action"
              >
                {{ childItem.title }}
              </a>
            </div>
          </div>
          <div v-else>No child</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const navBarItems = [
      {
        title: '車款介紹',
        link: '/',
        data_bs_target: 'carShowcase',
        child: [],
      },
      {
        title: 'TOYOTA bZ',
        link: '/',
        data_bs_target: 'TOYOTAbZ',
        child: [
          {
            title: 'https://www.toyota.com.tw/bZ/',
            link: '/',
          },
        ],
      },
      {
        title: '品牌新知',
        link: '/',
        data_bs_target: 'branding',
        child: [
          {
            title: '品牌新聞',
            link: '/news',
          },
          {
            title: '一車一樹',
            link: '/news',
          },
          {
            title: 'TNGA新世代造車工藝',
            link: '/news',
          },
          {
            title: '極致安全防護',
            link: '/news',
          },
          {
            title: '新能源動力',
            link: '/news',
          },
          {
            title: 'Start Your Impossible',
            link: '/news',
          },
          {
            title: 'Gazoo Racing',
            link: '/news',
          },
          {
            title: 'TOYOTA精品',
            link: '/news',
          },
        ],
      },
      {
        title: '購車資訊',
        link: '/',
        data_bs_target: 'purchase',
        child: [
          {
            title: '智慧購APP',
            link: '/',
          },
          {
            title: '雲端銷售顧問',
            link: '/',
          },
          {
            title: '科技配備展示',
            link: '/',
          },
          {
            title: '車款比較',
            link: '/',
          },
          {
            title: '速配愛車',
            link: '/',
          },
          {
            title: '購車優惠',
            link: '/',
          },
          {
            title: '購車試算',
            link: '/',
          },
          {
            title: '購車諮詢/預約試乘',
            link: '/',
          },
          {
            title: '訂閱式租賃',
            link: '/',
          },
          {
            title: '認證中古車',
            link: '/',
          },
          {
            title: '展間查詢',
            link: '/',
          },
          {
            title: '購車合約',
            link: '/',
          },
        ],
      },
      {
        title: '售後服務',
        data_bs_target: 'afterSale',
        link: '/',
        child: [
          {
            title: 'HYBRID專區',
            link: '/',
          },
          {
            title: '純電車專區',
            link: '/',
          },
          {
            title: '原廠換橫濱輪胎',
            link: '/',
          },
          {
            title: '原廠嚴選電瓶',
            link: '/',
          },
          {
            title: '車主小學堂',
            link: '/',
          },
          {
            title: 'HOTAI購',
            link: '/',
          },
        ],
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
.nav-link {
  color: #525252;
  &:hover {
    color: #ba222e;
  }
}

.hr-line {
  border-left: solid gray 1px;
  border-right: solid gray 1px;
}

.offcanvas {
  top: 64px;
  --bs-offcanvas-height: #{100vh};
}
</style>
