<script lang="ts"></script>

<template>
  <div>
    <div class="container-fluid top-margin">
      <header class="page-header">
        <h2 class="page-title text-center">品牌新聞</h2>
      </header>
    </div>

    <div class="container my-5">
      <ul class="list-inline text-center">
        <li class="list-inline-item">
          <a class="type-text">全部</a>
        </li>
        <li class="list-inline-item">
          <a class="type-text">品牌活動</a>
        </li>
        <li class="list-inline-item">
          <a class="type-text">品牌新聞</a>
        </li>
        <li class="list-inline-item">
          <a class="type-text">優惠活動</a>
        </li>
        <li class="list-inline-item">
          <a class="type-text">中獎名單</a>
        </li>
      </ul>
    </div>

    <div class="container-lg">
      <div class="row">
        <div v-for="n in 10" :key="n" class="card col-12 col-sm-6 col-lg-4">
          <img
            src="~/assets/img/NEWS_prize.jpg"
            class="card-img-top"
            alt="Box with bowtie"
          />
          <div class="card-body">
            <p class="card-text">Some quick example text</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-margin {
  margin-top: 65px;
}

header.page-header {
  background-color: #f7f7f5;
  padding: 40px 0;
  margin: none;
}

a.type-text {
  color: #525252;
  text-decoration: none;
  &:hover {
    color: #ba222e;
  }
  cursor: pointer;
}

.list-inline-item {
  margin-left: 15px;
  padding: 0 10px;
}
</style>
