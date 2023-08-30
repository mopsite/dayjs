<script setup>
import DefaultTheme from 'vitepress/theme'
import Time from '../../components/Time.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <Time></Time>
    </template>
  </Layout>
</template>

<style scoped></style>
