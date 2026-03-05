<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link :to="`/${locale}`" class="logo">
        <img src="/icon_ire_neurofeedback.svg" alt="Irene Berti Logo" class="logo-image" width="50" height="50"/>
        <div class="logo-text-container">
            <span class="logo-text">Irene Berti</span>
            <span class="logo-subtitle">{{ t('nav.logo-subtitle') }}</span>
        </div>
      </router-link>
      
      <div class="nav-main">
        <div class="nav-links">
          <router-link :to="`/${locale}`" exact>{{ t('nav.home') }}</router-link>
          <router-link :to="`/${locale}/neurofeedback`">{{ t('nav.neurofeedback') }}</router-link>
          <router-link :to="`/${locale}/about`">{{ t('nav.about') }}</router-link>
          <router-link :to="`/${locale}/contact`">{{ t('nav.contact') }}</router-link>
        </div>
        
        <div class="nav-actions">
          <router-link :to="`/${locale}/booking`" class="btn-booking">
            {{ t('nav.booking') }}
          </router-link>
          
          <div class="nav-tools">
            <div class="language-switcher">
              <button @click="setLocale('de')" :class="{ active: locale === 'de' }">DE</button>
              <button @click="setLocale('it')" :class="{ active: locale === 'it' }">IT</button>
            </div>
            <button @click="toggleTheme" class="theme-toggle" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
              <IconSunLine v-if="isDark" width="24" height="24" style="color: var(--text-primary)" />
              <IconMoonLinear v-else width="24" height="24" style="color: var(--text-primary)" />
            </button>
          </div>
        </div>
      </div>

      <button class="mobile-toggle" @click="toggleMobile" aria-label="Toggle menu">
        <span :class="{ open: mobileOpen }"></span>
        <span :class="{ open: mobileOpen }"></span>
        <span :class="{ open: mobileOpen }"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ 'mobile-open': mobileOpen }">
      <div class="mobile-links">
        <router-link :to="`/${locale}`" exact @click="closeMobile">{{ t('nav.home') }}</router-link>
        <router-link :to="`/${locale}/neurofeedback`" @click="closeMobile">{{ t('nav.neurofeedback') }}</router-link>
        <router-link :to="`/${locale}/about`" @click="closeMobile">{{ t('nav.about') }}</router-link>
        <router-link :to="`/${locale}/contact`" @click="closeMobile">{{ t('nav.contact') }}</router-link>
        <router-link :to="`/${locale}/booking`" class="mobile-cta" @click="closeMobile">{{ t('nav.booking') }}</router-link>
      </div>
      <div class="mobile-tools">
        <div class="language-switcher">
          <button @click="setLocale('de')" :class="{ active: locale === 'de' }">DE</button>
          <button @click="setLocale('it')" :class="{ active: locale === 'it' }">IT</button>
        </div>
        <button @click="toggleTheme" class="theme-toggle">
            <IconSunLine v-if="isDark" width="24" height="24" style="color: var(--text-primary)" />
            <IconMoonLinear v-else width="24" height="24" style="color: var(--text-primary)" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import { useTheme } from '../composables/useTheme'
import IconSunLine from '~icons/si/sun-line'
import IconMoonLinear from '~icons/solar/moon-linear'

const { t, locale } = useI18n()
const router = useRouter()
const route = useRoute()
const mobileOpen = ref(false)
const { isDark, toggleTheme } = useTheme()

const setLocale = (newLocale) => {
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
  
  const currentPath = route.path.split('/').slice(2).join('/')
  router.push(`/${newLocale}${currentPath ? '/' + currentPath : ''}`)
  closeMobile()
}

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value
}

const closeMobile = () => {
  mobileOpen.value = false
}
</script>

<style scoped>
.navbar {
  background: var(--bg-primary);
  border-bottom: 2px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.logo-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-decoration: none;
  transition: opacity var(--transition-base);
}

.logo:hover {
  opacity: 0.7;
}

.logo-text-container {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1;
}

.logo-subtitle {
  font-size: 0.75rem;
  color: var(--text-secondary);
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  line-height: 1;
}

.nav-main {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-links a {
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  transition: color var(--transition-base);
  position: relative;
  text-decoration: none;
  padding: 0.5rem 0;
}

.nav-links a:hover {
  color: var(--text-primary);
}

.nav-links a.router-link-exact-active {
  color: var(--text-primary);
  font-weight: 600;
}

.nav-links a.router-link-exact-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--text-primary);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.btn-booking {
  background: var(--text-primary);
  color: var(--bg-primary);
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all var(--transition-base);
  text-decoration: none;
  white-space: nowrap;
}

.btn-booking:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.nav-tools {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.language-switcher {
  display: flex;
  gap: 0;
  background: var(--bg-secondary);
  padding: 0.25rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.language-switcher button {
  background: transparent;
  color: var(--text-secondary);
  border: none;
  padding: 0.5rem 0.875rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all var(--transition-fast);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.language-switcher button:hover {
  color: var(--text-primary);
}

.language-switcher button.active {
  background: var(--text-primary);
  color: var(--bg-primary);
}

.theme-toggle {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  transition: all var(--transition-base);
}

.theme-toggle:hover {
  background: var(--bg-tertiary);
  transform: rotate(15deg);
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
}

.mobile-toggle span {
  width: 26px;
  height: 3px;
  background: var(--text-primary);
  border-radius: 3px;
  transition: all var(--transition-base);
  transform-origin: center;
}

.mobile-toggle span.open:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.mobile-toggle span.open:nth-child(2) {
  opacity: 0;
}

.mobile-toggle span.open:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--bg-primary);
  transform: translateX(-100%);
  transition: transform var(--transition-base);
  overflow-y: auto;
  padding: 2rem;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.05);
}

.mobile-menu.mobile-open {
  transform: translateX(0);
}

.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 2rem;
}

.mobile-links a {
  color: var(--text-primary);
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--border-color);
  text-decoration: none;
  transition: all var(--transition-base);
}

.mobile-links a:hover {
  padding-left: 1rem;
}

.mobile-links a.router-link-exact-active {
  color: var(--text-primary);
  font-weight: 700;
}

.mobile-links a.mobile-cta {
  background: var(--text-primary);
  color: var(--bg-primary);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
  border: none;
}

.mobile-tools {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

@media (max-width: 1024px) {
  .nav-main {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }

  .mobile-menu {
    display: block;
  }
}

@media (max-width: 768px) {
  .nav-container {
    padding: 1rem 1.5rem;
  }

  .logo-text {
    font-size: 1.25rem;
  }

  .logo-subtitle {
    font-size: 0.7rem;
  }

  .mobile-menu {
    top: 70px;
    padding: 1.5rem;
  }
}
</style>
