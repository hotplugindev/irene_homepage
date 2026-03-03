<template>
  <div class="page">
    <section class="hero">
      <div class="hero-content">
        <div class="hero-badge">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
        </div>
        <h1>{{ t('neurofeedback.title') }}</h1>
        <p class="hero-lead">{{ t('neurofeedback.subtitle') }}</p>
      </div>
    </section>

    <div class="container">
      <div class="intro-grid">
        <div class="intro-card highlight">
          <h2>{{ t('neurofeedback.what_title') }}</h2>
          <p>{{ t('neurofeedback.what_text') }}</p>
        </div>
        <div class="intro-card">
          <h2>{{ t('neurofeedback.how_title') }}</h2>
          <p>{{ t('neurofeedback.how_text') }}</p>
        </div>
      </div>

      <section class="applications">
        <h2 class="section-title">{{ t('neurofeedback.applications_title') }}</h2>
        <div class="app-grid">
          <div class="app-card">
            <div class="app-number">01</div>
            <h3>{{ t('neurofeedback.app1_title') }}</h3>
            <p>{{ t('neurofeedback.app1_text') }}</p>
          </div>
          <div class="app-card">
            <div class="app-number">02</div>
            <h3>{{ t('neurofeedback.app2_title') }}</h3>
            <p>{{ t('neurofeedback.app2_text') }}</p>
          </div>
          <div class="app-card">
            <div class="app-number">03</div>
            <h3>{{ t('neurofeedback.app3_title') }}</h3>
            <p>{{ t('neurofeedback.app3_text') }}</p>
          </div>
          <div class="app-card">
            <div class="app-number">04</div>
            <h3>{{ t('neurofeedback.app4_title') }}</h3>
            <p>{{ t('neurofeedback.app4_text') }}</p>
          </div>
        </div>
      </section>

      <div class="benefits-card">
        <div class="benefits-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <div class="benefits-content">
          <h2>{{ t('neurofeedback.benefits_title') }}</h2>
          <p>{{ t('neurofeedback.benefits_text') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<style scoped>
.page {
  padding-bottom: 4rem;
}

.hero {
  position: relative;
  overflow: hidden;
  background-image: url('/neurofeedback.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 8rem 2rem 6rem;
  border-bottom: 1px solid var(--border-color);
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--opacity-medium);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: var(--bg-primary);
  border-radius: 50%;
  border: 3px solid var(--border-color);
  color: var(--text-primary);
  margin: 0 auto 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.hero h1 {
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 700;
  margin: 0 0 1.25rem;
  color: var(--text-primary);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.hero-lead {
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
  font-weight: 400;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: -3rem auto 4rem;
  position: relative;
  z-index: 10;
}

.intro-card {
  background: var(--bg-secondary);
  padding: 3rem;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all var(--transition-base);
}

.intro-card.highlight {
  background: var(--bg-primary);
  border: 2px solid var(--border-color);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.intro-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.intro-card h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem;
  color: var(--text-primary);
}

.intro-card p {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
}

.applications {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 3rem;
  color: var(--text-primary);
}

.app-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.app-card {
  background: var(--bg-secondary);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.app-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 0;
  background: var(--text-primary);
  transition: height var(--transition-base);
}

.app-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.app-card:hover::before {
  height: 100%;
}

.app-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--bg-primary);
  border: 2px solid var(--border-color);
  border-radius: 12px;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
}

.app-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
  color: var(--text-primary);
}

.app-card p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

.benefits-card {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  background: var(--bg-secondary);
  padding: 3rem;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  margin-bottom: 3rem;
}

.benefits-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background: var(--bg-primary);
  border: 2px solid var(--border-color);
  border-radius: 50%;
  color: var(--text-primary);
}

.benefits-content h2 {
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0 0 1rem;
  color: var(--text-primary);
}

.benefits-content p {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
}

.btn {
  padding: 1rem 3rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  background: var(--text-primary);
  color: var(--bg-primary);
  text-decoration: none;
  display: inline-block;
  transition: all var(--transition-base);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25);
}

@media (max-width: 968px) {
  .intro-grid {
    grid-template-columns: 1fr;
    margin-top: -2rem;
  }

  .app-grid {
    grid-template-columns: 1fr;
  }

  .benefits-card {
    flex-direction: column;
    text-align: center;
  }

  .benefits-icon {
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 1.5rem 4rem;
  }

  .container {
    padding: 0 1.5rem;
  }

  .intro-card,
  .benefits-card{
    padding: 2rem 1.5rem;
  }
}
</style>
