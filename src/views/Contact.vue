<template>
  <div class="page">
    <section class="hero">
      <div class="hero-content">
        <div class="hero-badge">
          <Icon icon="akar-icons:location" width="40" height="40"  style="color: currentColor" />
        </div>
        <h1>{{ t('contact.title') }}</h1>
        <p class="hero-lead">{{ t('contact.subtitle') }}</p>
      </div>
    </section>

    <div class="container">
      <div class="contact-cards">
        <a :href="`tel:${t('contact_info.phone')}`" class="contact-card phone-card">
          <div class="card-icon">
              <Icon icon="mdi-light:phone" width="32" height="32"  style="color: currentColor" />
          </div>
          <div class="card-content">
            <h3>{{ t('contact.phone_title') }}</h3>
            <p class="contact-value">{{ t('contact_info.phone') }}</p>
          </div>
          <div class="card-arrow">
              <Icon icon="mingcute:arrow-right-fill" width="20" height="20"  style="color: currentColor" />
          </div>
        </a>

        <a :href="`mailto:${t('contact_info.email')}`" class="contact-card email-card">
          <div class="card-icon">
              <Icon icon="material-symbols:mail-outline" width="32" height="32"  style="color: currentColor" />
          </div>
          <div class="card-content">
            <h3>{{ t('contact.email_title') }}</h3>
            <p class="contact-value">{{ t('contact_info.email') }}</p>
          </div>
          <div class="card-arrow">
              <Icon icon="mingcute:arrow-right-fill" width="20" height="20"  style="color: currentColor" />
          </div>
        </a>

        <div class="contact-card address-card">
          <div class="card-icon">
            <Icon icon="akar-icons:location" width="32" height="32"  style="color: currentColor" />
          </div>
          <div class="card-content">
            <h3>{{ t('contact.address_title') }}</h3>
            <p class="contact-value">{{ t('contact_info.address') }}<br>{{ t('contact_info.city') }}</p>
          </div>
        </div>
      </div>

      <div class="map-section">
        <div class="map-header">
          <h2>{{ t('contact.map_title') }}</h2>
          <p>{{ t('contact_info.address') }}, {{ t('contact_info.city') }}</p>
        </div>
        <div class="map-container">
          <div v-if="!mapLoaded" class="map-placeholder">
            <div class="map-placeholder-content">
              <div class="map-placeholder-icon">
                <Icon icon="akar-icons:location" width="48" height="48"  style="color: currentColor" />
              </div>
              <h3>{{ t('contact.map_load_title') }}</h3>
              <p>{{ t('contact.map_load_text') }}</p>
              <button @click="loadMap" class="map-load-btn">
                <Icon icon="mdi-light:map-marker" width="20" height="20"  style="color: currentColor" />
                {{ t('contact.map_load_button') }}
              </button>
            </div>
          </div>
          <iframe 
            v-else
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2749.2877!2d11.65582!3d46.71516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47783e5e7d1ed14b%3A0x4f0b68c99b51b3f0!2sDomplatz%2020%2C%2039042%20Brixen%20BZ%2C%20Italy!5e0!3m2!1sen!2s!4v1234567890"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="map"
          ></iframe>
        </div>
      </div>

      <div class="cta-card">
        <div class="cta-content">
          <h3>{{ t('contact.cta_title') }}</h3>
          <p>{{ t('contact.cta_text') }}</p>
        </div>
        <router-link :to="`/${locale}/booking`" class="btn">
          {{ t('contact.cta_button') }}
          <Icon icon="mingcute:arrow-right-fill" width="20" height="20"  style="color: currentColor" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from "@iconify/vue";

const { t, locale } = useI18n()
const mapLoaded = ref(false)

const loadMap = () => {
  mapLoaded.value = true
}
</script>

<style scoped>
.page {
  padding-bottom: 4rem;
}

.hero {
  position: relative;
  overflow: hidden;
  background-image: url('/kontakt.png');
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
  background: linear-gradient(180deg, var(--opacity-medium) 0%, var(--opacity-full) 100%);
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
}

.hero-lead {
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: -3rem auto 4rem;
  position: relative;
  z-index: 10;
}

.contact-card {
  background: var(--bg-primary);
  padding: 2.5rem 2rem;
  border-radius: 16px;
  border: 2px solid var(--border-color);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-decoration: none;
  color: inherit;
  position: relative;
}

.contact-card.phone-card,
.contact-card.email-card {
  cursor: pointer;
}

.contact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.18);
}

.card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: var(--bg-secondary);
  border-radius: 12px;
  border: 2px solid var(--border-color);
  color: var(--text-primary);
}

.card-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: var(--text-primary);
}

.contact-value {
  font-size: 1.05rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
  word-break: break-word;
}

.card-arrow {
  position: absolute;
  top: 2rem;
  right: 2rem;
  opacity: 0;
  transform: translateX(-10px);
  transition: all var(--transition-base);
  color: var(--text-primary);
}

.contact-card:hover .card-arrow {
  opacity: 1;
  transform: translateX(0);
}

.map-section {
  margin-bottom: 4rem;
}

.map-header {
  text-align: center;
  margin-bottom: 2rem;
}

.map-header h2 {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: var(--text-primary);
}

.map-header p {
  font-size: 1.05rem;
  color: var(--text-secondary);
  margin: 0;
}

.map-container {
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid var(--border-color);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
}

.map {
  width: 100%;
  height: 450px;
  border: none;
  display: block;
}

.map-placeholder {
  width: 100%;
  height: 450px;
  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.map-placeholder-content {
  text-align: center;
  max-width: 500px;
}

.map-placeholder-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: var(--bg-primary);
  border-radius: 50%;
  border: 2px solid var(--border-color);
  color: var(--text-primary);
  margin: 0 auto 1.5rem;
}

.map-placeholder-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1rem;
  color: var(--text-primary);
}

.map-placeholder-content p {
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0 0 2rem;
  line-height: 1.6;
}

.map-load-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--text-primary);
  color: var(--bg-primary);
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-base);
}

.map-load-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.cta-card {
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

.btn {
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

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25);
  gap: 1rem;
}

.btn svg {
  transition: transform var(--transition-base);
}

.btn:hover svg {
  transform: translateX(4px);
}

@media (max-width: 968px) {
  .contact-cards {
    grid-template-columns: 1fr;
    margin-top: -2rem;
  }

  .cta-card {
    flex-direction: column;
    text-align: center;
    padding: 2.5rem 2rem;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 1.5rem 4rem;
  }

  .container {
    padding: 0 1.5rem;
  }

  .map {
    height: 350px;
  }

  .contact-card {
    padding: 2rem 1.5rem;
  }
}
</style>