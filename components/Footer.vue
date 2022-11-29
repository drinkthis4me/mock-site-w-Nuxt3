<template>
  <div>
    <div class="container">
      <footer class="py-5">
        <div class="row">
          <div class="col-6 col-md-2 mb-3">
            <h5>車款介紹</h5>
            <ul class="nav flex-column flex-wrap">
              <li v-for="car in cars" :key="car.title" class="nav-item mb-2">
                <a href="/" class="nav-link p-0 text-muted">{{ car.title }}</a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h5>品牌新知</h5>
            <ul class="nav flex-column">
              <li
                v-for="about in aboutUs"
                :key="about.title"
                class="nav-item mb-2"
              >
                <a :href="about.title" class="nav-link p-0 text-muted">{{
                  about.title
                }}</a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h5>購車資訊</h5>
            <ul class="nav flex-column">
              <li
                v-for="purchase in purchaseInfo"
                :key="purchase.title"
                class="nav-item mb-2"
              >
                <a :href="purchase.link" class="nav-link p-0 text-muted">{{
                  purchase.title
                }}</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-2 mb-3">
            <h5>售後服務</h5>
            <ul class="nav flex-column">
              <li
                v-for="service in afterSales"
                :key="service.title"
                class="nav-item mb-2"
              >
                <a href="#" class="nav-link p-0 text-muted">{{
                  service.title
                }}</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-2 mb-3">
            <h5>車主專區</h5>
            <ul class="nav flex-column">
              <li
                v-for="service in memberService"
                :key="service.title"
                class="nav-item mb-2"
              >
                <a href="#" class="nav-link p-0 text-muted">
                  {{ service.title }}
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-2 mb-3">
            <h5>其他專區</h5>
            <ul class="nav flex-column">
              <li
                v-for="other in others"
                :key="other.title"
                class="nav-item mb-2"
              >
                <a href="#" class="nav-link p-0 text-muted">
                  {{ other.title }}
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
                v-for="breadcrumb in footerBreadcrumb"
                :key="breadcrumb.title"
                class="breadcrumb-item"
              >
                <a :href="breadcrumb.link">{{ breadcrumb.title }}</a>
              </li>
            </ol>
          </div>
          <div class="col-6">
            <div class="justify-content-center">
              <div class="col-12 col-lg text-end copyright">
                <img
                  src="@/public/images/logo/toyota-white.png"
                  alt="TOYOTA white"
                />
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
    const cars = [
      {
        title: 'TOWN ACE',
      },
      {
        title: 'VIOS',
      },
      {
        title: 'VIOS',
      },
      {
        title: 'YARIS',
      },
      {
        title: 'SIENTA',
      },
      {
        title: 'ALTIS',
      },
      {
        title: 'COROLLA CROSS',
      },
      {
        title: 'ALTIS GR SPORT',
      },
      {
        title: 'COROLLA SPORT',
      },
      {
        title: 'COROLLA CROSS GR SPORT',
      },
      {
        title: 'C-HR',
      },
      {
        title: 'CAMRY',
      },
      {
        title: 'RAV4',
      },
      {
        title: 'PRIUS PHV',
      },
      {
        title: 'GR86',
      },
      {
        title: 'TOWN ACE',
      },
      {
        title: 'HILUX',
      },
      {
        title: 'bZ4X',
      },
      {
        title: 'GR YARIS',
      },
      {
        title: 'GR SUPRA',
      },
      {
        title: 'SIENNA',
      },
      {
        title: 'PRADO',
      },
      {
        title: 'ALPHARD',
      },
    ];

    const aboutUs = [
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
    ];

    const purchaseInfo = [
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
    ];

    const afterSales = [
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
    ];

    const memberService = [
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

    const footerBreadcrumb = [
      {
        title: '常見問題',
        link: '聯絡我們',
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

    const others = [
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
    ];
    return {
      cars,
      aboutUs,
      purchaseInfo,
      afterSales,
      memberService,
      footerBreadcrumb,
      others,
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
