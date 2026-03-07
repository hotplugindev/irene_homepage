<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-left">
          <span class="footer-brand">Irene Berti</span>
          <span class="footer-separator">·</span>
          <span class="footer-location">Bressanone, Alto Adige</span>
        </div>
        
        <div class="footer-links">
          <router-link :to="`/${locale}`">{{ t('footer.home') }}</router-link>
          <router-link :to="`/${locale}/contact`">{{ t('footer.contact') }}</router-link>
          <router-link :to="`/${locale}/privacy`">{{ t('footer.privacy') }}</router-link>
          <router-link :to="`/${locale}/impressum`">{{ t('footer.impressum') }}</router-link>
        </div>
        
        <div class="footer-right">
          <span>© {{ new Date().getFullYear() }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<style scoped>
.footer {
  background: var(--bg-primary);
  border-top: 1px solid var(--border-color);
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  gap: 2rem;
}

.footer-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
}

.footer-brand {
  color: var(--text-primary);
  font-weight: 600;
}

.footer-separator {
  color: var(--text-tertiary);
}

.footer-location {
  color: var(--text-secondary);
}

.footer-links {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-links a {
  color: var(--text-secondary);
  font-size: 0.875rem;
  transition: color var(--transition-base);
  text-decoration: none;
  font-weight: 500;
}

.footer-links a:hover {
  color: var(--text-primary);
}

.footer-right {
  font-size: 0.875rem;
  color: var(--text-tertiary);
}

@media (max-width: 968px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    padding: 2rem 0;
  }

  .footer-left {
    flex-direction: column;
    gap: 0.5rem;
  }

  .footer-separator {
    display: none;
  }

  .footer-links {
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .footer-container {
    padding: 0 1.5rem;
  }

  .footer-links {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
