<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import { watch, onMounted } from 'vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import { useSeo } from './composables/useSeo'

const { locale } = useI18n()
const router = useRouter()
const route = useRoute()

// Initialize SEO
useSeo()

// Set locale from URL or localStorage
onMounted(() => {
  const urlLocale = route.params.locale
  if (urlLocale && (urlLocale === 'de' || urlLocale === 'it')) {
    locale.value = urlLocale
    localStorage.setItem('locale', urlLocale)
  } else {
    const savedLocale = localStorage.getItem('locale') || 'de'
    locale.value = savedLocale
    if (!urlLocale) {
      router.replace(`/${savedLocale}${route.path}`)
    }
  }
})

// Watch for route changes to update locale
watch(() => route.params.locale, (newLocale) => {
  if (newLocale && (newLocale === 'de' || newLocale === 'it')) {
    locale.value = newLocale
    localStorage.setItem('locale', newLocale)
  }
})
</script>

<template>
  <div id="app">
    <Navigation />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
