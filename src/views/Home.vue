<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <img :src="isDark ? '/logo_ire_neurofeedback.svg' : '/logo_ire_neurofeedback_dark_text.svg'" alt="IRE Neurofeedback" class="hero-logo" />
        <h1>{{ t('home.title') }}</h1>
        <p class="hero-subtitle">{{ t('home.subtitle') }}</p>
        <div class="hero-actions">
          <router-link :to="`/${locale}/booking`" class="btn btn-primary">{{ t('home.cta_booking') }}</router-link>
          <router-link :to="`/${locale}/about`" class="btn btn-secondary">{{ t('home.cta_about') }}</router-link>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="intro-highlight">
          <div class="intro-badge">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h2>{{ t('home.welcome_title') }}</h2>
          <p class="intro-lead">{{ t('home.welcome_text') }}</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card featured">
            <div class="feature-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <h3>{{ t('home.section2_title') }}</h3>
            <p>{{ t('home.section2_text') }}</p>
            <router-link :to="`/${locale}/neurofeedback`" class="feature-link">
              {{ t('home.learn_more') }}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </router-link>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3>{{ t('home.section1_title') }}</h3>
            <p>{{ t('home.section1_text') }}</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3>{{ t('home.section3_title') }}</h3>
            <p>{{ t('home.section3_text') }}</p>
          </div>
        </div>

        <div class="cta-banner">
          <div class="cta-content">
            <h3>{{ t('home.cta_banner_title') }}</h3>
            <p>{{ t('home.cta_banner_text') }}</p>
          </div>
          <router-link :to="`/${locale}/booking`" class="cta-btn">
            {{ t('home.cta_banner_button') }}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useTheme } from '../composables/useTheme'

const { t, locale } = useI18n()
const { isDark } = useTheme()
</script>

<style scoped>

.home {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.hero {
  flex: 0 0 auto;
  min-height: calc(100vh - 80px);
  position: relative;
  overflow: hidden;
  background-image: url('/back.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 4rem;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--opacity-medium); /* 0.5 = 50% opacity */
  z-index: 1;
}

.hero-content {
  z-index: 2;
  max-width: 700px;
  text-align: center;
}

.hero-logo {
  width: clamp(280px, 40vw, 450px);
  height: auto;
  margin: 0 auto 2rem;
  display: block;
}

h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin: 0 0 1rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: var(--text-secondary);
  margin: 0 0 2.5rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all var(--transition-base);
  display: inline-block;
  text-decoration: none;
}

.btn-primary {
  background: var(--text-primary);
  color: var(--bg-primary);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--border-color);
}

.btn-secondary:hover {
  border-color: var(--text-primary);
  transform: translateY(-2px);
}

.section {
  padding: 5rem 2rem;
  background: linear-gradient(to bottom, var(--bg-primary) 0%, var(--bg-secondary) 100%);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.intro-highlight {
  max-width: 1100px;
  margin: 0 auto 4rem;
  text-align: center;
  padding: 3rem 2rem;
  background: var(--bg-primary);
  border-radius: 20px;
  border: 2px solid var(--border-color);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

.intro-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: var(--bg-secondary);
  border-radius: 50%;
  border: 2px solid var(--border-color);
  color: var(--text-primary);
  margin: 0 auto 1.5rem;
}

.intro-highlight h2 {
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  margin: 0 0 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
}

.intro-lead {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.feature-card {
  background: var(--bg-secondary);
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  transition: all var(--transition-base);
  position: relative;
  display: flex;
  flex-direction: column;
}

.feature-card.featured {
  background: var(--bg-primary);
  border: 2px solid var(--border-color);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  grid-row: span 1;
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background: var(--bg-primary);
  border-radius: 14px;
  border: 2px solid var(--border-color);
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.featured .feature-icon {
  background: var(--bg-secondary);
  width: 80px;
  height: 80px;
}

.feature-card h3 {
  margin: 0 0 1rem;
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--text-primary);
}

.featured h3 {
  font-size: 1.5rem;
  font-weight: 700;
}

.feature-card p {
  margin: 0 0 auto;
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1rem;
}

.feature-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  margin-top: 1.5rem;
  transition: all var(--transition-base);
}

.feature-link:hover {
  gap: 0.75rem;
}

.feature-link svg {
  transition: transform var(--transition-base);
}

.feature-link:hover svg {
  transform: translateX(4px);
}

.cta-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  padding: 3.5rem 3rem;
  border-radius: 20px;
  border: 2px solid var(--border-color);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.cta-content h3 {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: var(--text-primary);
}

.cta-content p {
  font-size: 1.05rem;
  color: var(--text-secondary);
  margin: 0;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.1rem 2.5rem;
  background: var(--text-primary);
  color: var(--bg-primary);
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  white-space: nowrap;
  transition: all var(--transition-base);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25);
  gap: 1rem;
}

.cta-btn svg {
  transition: transform var(--transition-base);
}

.cta-btn:hover svg {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .hero {
    min-height: 60vh;
    padding: 4rem 1.5rem 3rem;
  }

  .section {
    padding: 3rem 1.5rem;
  }

  .intro-highlight {
    padding: 2rem 1.5rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .cta-banner {
    flex-direction: column;
    text-align: center;
    padding: 2.5rem 2rem;
  }

  .cta-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
