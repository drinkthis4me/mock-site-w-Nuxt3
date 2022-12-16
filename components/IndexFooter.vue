<template>
  <div>
    <!-- Social links -->
    <section>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid justify-content-center">
          <ul id="pills-tab" class="nav nav-pills nav-justified" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                id="pills-home-tab"
                class="nav-link active"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                掌握最新資訊
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="pills-profile-tab"
                class="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                相關網站
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div id="tab-content" class="tab-content">
        <div
          id="pills-home"
          class="tab-pane fade show active"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >
          <div class="container">
            <div class="row justify-content-center">
              <div
                v-for="link in socialMediaLinks"
                :key="link.link"
                class="col-6 col-md-auto my-3"
              >
                <a :href="link.link" class="social-media-link">
                  <span class="icon me-2">
                    <img :src="link.img_src" :alt="link.img_alt" />
                  </span>
                  <span class="text">{{ link.title }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="pills-profile"
          class="tab-pane fade"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          <div class="container">
            <div class="row justify-content-center">
              <div
                v-for="link in businessLinks"
                :key="link.link"
                class="col-6 col-md-auto my-3"
              >
                <a :href="link.link">
                  <img
                    :src="link.img_src"
                    :alt="link.img_alt"
                    class="related-business-image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Mobile links -->
    <section class="index-footer-section-subscription">
      <div class="container">
        <div class="row g-0s align-items-md-center">
          <div class="col-12 col-md-auto">
            <div class="app-block">
              <div class="row">
                <div class="col-auto">
                  <img
                    src="img/index-footer/icon-app.png"
                    alt="TOYOTA app icon"
                    class="app-img"
                  />
                </div>
                <div
                  class="col col-lg-auto d-flex flex-md-column align-items-center align-items-md-start justify-content-around"
                >
                  <span>My Toyota</span>
                  <a
                    href="https://www.toyota.com.tw/app/citydriver/"
                    class="btn btn-danger"
                  >
                    了解更多

                    <Icon name="ic:baseline-arrow-forward-ios" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md">
            <div class="email-block">
              <form
                id="subscribe-email needs-validation"
                novalidate
                @submit="onSubmit"
              >
                <div
                  class="row g-0s align-items-center justify-content-lg-center"
                >
                  <div class="col-12 mb-2 mb-lg-0 col-lg-auto">
                    <b>TOYOTA電子報</b>
                  </div>
                  <div
                    class="col-12 mb-8 mb-lg-0 col-lg colxl-auto position-relative"
                  >
                    {{ emailInput }}
                    <input
                      id="email"
                      v-model="emailInput"
                      type="email"
                      class="form-control form-control-lg border-0"
                      placeholder="請輸入Email以訂閱電子報"
                      required
                    />
                    <div class="invalid-tooltip">
                      E-mail格式有誤，請重新填寫！
                    </div>
                    <div
                      id="emailModal"
                      class="modal fade"
                      tabindex="-1"
                      aria-labelledby="emailModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-body text-center">
                            <p>E-mail格式有誤，請重新填寫！</p>
                          </div>
                          <div class="modal-footer">
                            <button
                              class="btn btn-danger"
                              type="button"
                              data-bs-dismiss="modal"
                            >
                              關閉
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-auto">
                    <div
                      class="btn-group g-0 align-items-center justify-content-center"
                      aria-label="subscrib button group"
                    >
                      <button
                        id="email-subscribe"
                        class="btn btn-danger px-4"
                        tpye="submit"
                      >
                        訂閱
                      </button>
                      <button
                        id="email-unsubscribe"
                        class="btn btn-dark"
                        tpye="submit"
                      >
                        取消訂閱
                      </button>
                      <!-- To open modal, add: 
                      data-bs-toggle"modal"
                      data-bs-target="#emailModal"
                      -->
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useFetch } from '#app';
export default defineComponent({
  setup() {
    const socialMediaLinks = [
      {
        title: 'TOYOTA TAIWAN',
        link: 'https://www.facebook.com/TOYOTA.Taiwan',
        img_src: '/img/index-footer/icon-facebook.png',
        img_alt: 'TOYOTA TAIWAN @Facebook',
      },
      {
        title: 'TOYOTA 環保特攻隊',
        link: 'https://www.facebook.com/Toyotalove.earth99',
        img_src: 'img/index-footer/icon-facebook.png',
        img_alt: 'TOYOTA 環保特攻隊 @Facebook',
      },
      {
        title: 'TOYOTA TW',
        link: 'https://www.instagram.com/toyotatw/',
        img_src: '/img/index-footer/icon-instagram.png',
        img_alt: 'TOYOTA TW @Instagram',
      },
      {
        title: 'TOYOTA TW',
        link: 'https://www.youtube.com/user/TOYOTA2012TW',
        img_src: '/img/index-footer/icon-youtube.png',
        img_alt: 'TOYOTA TW @YouTube',
      },
    ];

    const businessLinks = [
      {
        title: 'GLOBAL TOYOTA',
        link: 'https://global.toyota/en/',
        img_src: '/img/index-footer/business-01.png',
        img_alt: 'GLOBAL TOYOTA',
      },
      {
        title: 'TOYOTA商旅車',
        link: 'https://www.toyota-granvia.com.tw/?utm_source=ToyotaTW&utm_medium=OS&utm_campaign=new_website',
        img_src: '/img/index-footer/business-02.png',
        img_alt: 'TOYOTA商旅車',
      },
      {
        title: '認證中古車',
        link: 'https://www.toyotacpo.com.tw/?utm_source=toyotanew&utm_medium=toyotanew_web&utm_campaign=2020_toyotanew_web',
        img_src: '/img/index-footer/business-03.png',
        img_alt: '認證中古車',
      },
      {
        title: '和泰汽車',
        link: 'https://pressroom.hotaimotor.com.tw/zh/',
        img_src: '/img/index-footer/business-04.png',
        img_alt: '和泰汽車',
      },
      {
        title: '和運租車',
        link: 'http://www.hotains.com.tw/',
        img_src: '/img/index-footer/business-06.png',
        img_alt: '和運租車',
      },
      {
        title: '和潤企業',
        link: 'https://www.hfcfinance.com.tw/',
        img_src: '/img/index-footer/business-07.png',
        img_alt: '和潤企業',
      },
      {
        title: '和安保險代理人',
        link: 'https://www.hoan.com.tw/',
        img_src: '/img/index-footer/business-08.png',
        img_alt: '和安保險代理人',
      },
      {
        title: 'ht-carmax',
        link: 'http://www.ht-carmax.com.tw/',
        img_src: '/img/index-footer/business-09.png',
        img_alt: 'ht-carmax',
      },
      {
        title: 'HOTAI購',
        link: 'https://www.hotaigo.com.tw/',
        img_src: '/img/index-footer/business-10.png',
        img_alt: 'HOTAI購',
      },
    ];

    const emailInput = ref('');

    const isValid = ref<boolean>();

    function formValidator(e: Event) {
      const form = e.target as HTMLInputElement;
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        isValid.value = false;
      } else {
        isValid.value = true;
      }
      form.classList.add('was-validated');
    }

    function sendSubRequest(e: Event) {
      e.preventDefault();

      // Send email to server
      postRequest(emailInput.value)
        .then((response) => console.log(response.data.value))
        .catch((error) => console.log(error.data));
      // Open modal and display success msg (Pending problem. See NOTE 2)
      console.log('>>> Subscribe success');
    }

    async function postRequest(data: string) {
      const url = 'https://jsonplaceholder.typicode.com/posts';
      return await useFetch(url, {
        method: 'POST',
        body: JSON.stringify({
          title: 'This is a test',
          body: 'Email should be user input email',
          userId: 1,
          email: data,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        parseResponse: JSON.parse,
      });
    }

    function onSubmit(e: Event) {
      formValidator(e);
      if (isValid.value) {
        sendSubRequest(e);
      }
    }

    return {
      socialMediaLinks,
      businessLinks,
      emailInput,
      onSubmit,
    };
  },
});

/**
 * NOTE:
 * 1 .Dynamically bind local path to img:
 * src:Expression inside v-bind is executed in runtime, webpack/Vite aliases work in compile time.
 * - Solution 1: (May have Security Error)
 *      const imgUrl = new URL('./img.png', import.meta.url).href
 *    Then in <template>
 *      <img :src="imgURL">
 *    src:https://vitejs.dev/guide/assets.html#the-public-directory
 * - Solution 2:
 *    Store image in public dir
 *
 * 2. Acess Bootstrap components via JavaScript:
 *    create an instance through bootstrap plguin
 *    ex: const myModalAlternative = new bootstrap.Modal('#myModal', options)
 */
</script>
<style scoped lang="scss">
@media (min-width: 1024px) {
  .social-media-link > .icon img {
    width: 40px;
    height: 40px;
  }
}

.nav-item {
  width: 300px;
}
.nav-link {
  color: white;
}

.tab-pane {
  background-color: #ededf0;
}
.nav-link.active {
  background-color: red;
}
.social-media-link {
  color: #313131;
  align-items: center;
  text-decoration: none;
  font-size: 0.875rem;
}

.social-media-link > .icon img {
  width: 34px;
  height: 34px;
}

.related-business-image {
  width: 130px;
  height: 35px;
}

.index-footer-section-subscription {
  background-color: #313131;
  color: #fff;
  padding: 0;
  .app-block {
    padding-right: 80px;
    padding-left: 0;
    height: 150px;
    border-bottom: 0;
    border-right: 1px solid #525252;
    align-items: center;
    display: flex;

    span {
      font-weight: 500;
      font-size: 1.125em;
    }
  }
  .app-img {
    width: 82px;
    height: 82px;
  }
  .email-block {
    b {
      font-size: 1.125rem;
    }

    button {
      min-width: 145px;
    }

    #emailModal {
      color: #313131;
    }
  }
}
</style>
