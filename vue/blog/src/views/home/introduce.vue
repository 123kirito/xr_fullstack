<template>
  <div class="introduce" :class="{ reverse: reverse }">
    <div class="introduce-wrap image">
      <slot name="image">
        <img :src="url" />
      </slot>
    </div>
    <div class="introduce-wrap info">
      <div class="info-wrap">
        <slot name="title">
          <h4 class="title">{{ title }}</h4>
        </slot>
        <slot name="content">
          <div class="content" v-html="content"></div>
        </slot>
        <div class="desc">
          <template
            v-for="(item, index) of info" :key="'desc' + index"
          >
          <slot name="info" :info="item">
              <a :href="item.link" target="_blank" class="desc-item">
                   <img class="desc-item-image" :src="item.url" />
                    <p class="desc-item-title">{{ item.title }}</p>
              </a>
          </slot>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Introduce",
  props: {
    url: String,
    title: String,
    content: String,
    reverse: {
      type: Boolean,
      default: false,
    },
    info: Array,
  },
}
</script>

<style>

</style>