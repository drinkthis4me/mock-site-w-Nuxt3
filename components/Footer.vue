<template>
  <div>
    <div class="container">
      <footer class="py-5">
        <div class="row">
          <div
            v-for="link in websiteMap"
            :key="link.title"
            class="col-6 col-md-2 mb-3"
          >
            <h5>{{ link.title }}</h5>
            <ul class="nav flex-column flex-wrap">
              <li
                v-for="childLink in link.children"
                :key="childLink.title"
                class="nav-item mb-2"
              >
                <a href="/" class="nav-link p-0 text-muted">
                  {{ childLink.title }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
    <nav
      class="navbar navbar-dark stiky-bottom bg-dark"
      aria-label="breadcrumb"
    >
      <div class="container container-fluid">
        <div class="row g-2">
          <div class="col-6">
            <ol class="breadcrumb">
              <li
                v-for="b in footerBreadcrumbs"
                :key="b.title"
                class="breadcrumb-item"
              >
                <a :href="b.link">{{ b.title }}</a>
              </li>
            </ol>
          </div>
          <div class="col-6">
            <div class="justify-content-center">
              <div class="col-12 col-lg text-end copyright">
                <img src="/img/logo/toyota-white.png" alt="TOYOTA white" />
                © HOTAI MOTOR CO., LTD. 和泰汽車股份有限公司
              </div>
              <div class="col-12 col-lg text-end copyright-suggestion">
                建議使用edge，或chrome瀏覽器，以達最佳瀏覽效果。
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const websiteMap = [
      {
        title: '車款介紹',
        children: [
          {
            title: 'TOWN ACE',
            link: '',
          },
          {
            title: 'VIOS',
            link: '',
          },
          {
            title: 'VIOS',
            link: '',
          },
          {
            title: 'YARIS',
            link: '',
          },
          {
            title: 'SIENTA',
            link: '',
          },
          {
            title: 'ALTIS',
            link: '',
          },
          {
            title: 'COROLLA CROSS',
            link: '',
          },
          {
            title: 'ALTIS GR SPORT',
            link: '',
          },
          {
            title: 'COROLLA SPORT',
            link: '',
          },
          {
            title: 'COROLLA CROSS GR SPORT',
            link: '',
          },
          {
            title: 'C-HR',
            link: '',
          },
          {
            title: 'CAMRY',
            link: '',
          },
          {
            title: 'RAV4',
            link: '',
          },
          {
            title: 'PRIUS PHV',
            link: '',
          },
          {
            title: 'GR86',
            link: '',
          },
          {
            title: 'TOWN ACE',
            link: '',
          },
          {
            title: 'HILUX',
            link: '',
          },
          {
            title: 'bZ4X',
            link: '',
          },
          {
            title: 'GR YARIS',
            link: '',
          },
          {
            title: 'GR SUPRA',
            link: '',
          },
          {
            title: 'SIENNA',
            link: '',
          },
          {
            title: 'PRADO',
            link: '',
          },
          {
            title: 'ALPHARD',
            link: '',
          },
        ],
      },
      {
        title: '品牌新知',
        children: [
          {
            title: '品牌新聞',
            link: '',
          },
          {
            title: '一車一樹',
            link: '',
          },
          {
            title: ' TNGA新世代造車工藝',
            link: '',
          },
          {
            title: '極致安全防護',
            link: '',
          },
          {
            title: '新能源動力',
            link: '',
          },
          {
            title: 'Start Your Impossible',
            link: '',
          },
          {
            title: 'Gazoo Racing',
            link: '',
          },
          {
            title: 'TOYOTA精品',
            link: '',
          },
        ],
      },
      {
        title: '購車資訊',
        children: [
          {
            title: '智慧購APP',
            link: '',
          },
          {
            title: '雲端銷售顧問',
            link: '',
          },
          {
            title: '科技配備展示',
            link: '',
          },
          {
            title: '車款比較',
            link: '',
          },
          {
            title: '速配愛車',
            link: '',
          },
          {
            title: '購車優惠',
            link: '',
          },
          {
            title: '購車試算',
            link: '',
          },
          {
            title: '購車諮詢/預約試乘',
            link: '',
          },
          {
            title: '訂閱式租賃',
            link: '',
          },
          {
            title: '認證中古車',
            link: '',
          },
          {
            title: '展間查詢',
            link: '',
          },
          {
            title: '購車合約',
            link: '',
          },
        ],
      },
      {
        title: '售後服務',
        children: [
          {
            title: '車主權益',
            link: '',
          },
          {
            title: '汽油/柴油車專區',
            link: '',
          },
          {
            title: 'HYBRID專區',
            link: '',
          },
          {
            title: '純電車專區',
            link: '',
          },
          {
            title: '原廠換橫濱輪胎',
            link: '',
          },
          {
            title: '原廠嚴選電瓶',
            link: '',
          },
          {
            title: '車主小學堂',
            link: '',
          },
          {
            title: 'HOTAI購',
            link: '',
          },
        ],
      },
      {
        title: '車主專區',
        children: [
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
        ],
      },
      {
        title: '其他專區',
        children: [
          {
            title: '站內搜尋',
            link: '',
          },
          {
            title: '追蹤清單',
            link: '',
          },
          {
            title: '瀏覽記錄',
            link: '',
          },
          {
            title: '智能客服',
            link: '',
          },
          {
            title: '常見問題',
            link: '',
          },
        ],
      },
    ];

    const footerBreadcrumbs = [
      {
        title: '常見問題',
        link: '',
      },
      {
        title: '聯絡我們',
        link: '',
      },
      {
        title: '隱私權條款',
        link: '',
      },
      {
        title: '法律保護條款',
        link: '',
      },
      {
        title: '客服專線 02-5599-7299',
        link: '',
      },
      {
        title: '0800-221-345',
        link: '',
      },
    ];

    return {
      websiteMap,
      footerBreadcrumbs,
    };
  },
});
</script>

<style scoped lang="scss">
.navbar {
  --bs-breadcrumb-divider: '|';
}

h5 {
  color: #ba222e;
}
.nav-item {
  font-size: 0.875rem;
}
.breadcrumb-item a {
  color: white;
  text-decoration: none;
  &:hover {
    color: red;
  }
}
.copyright {
  color: white;
}

.copyright-suggestion {
  color: gray;
  font-size: 0.8rem;
}
</style>
