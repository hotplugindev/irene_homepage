<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <h1>{{ t('privacy.title') }}</h1>
      </div>
    </section>

    <div class="container">
      <div class="content-wrapper">
        <section class="content-section">
          <h2>{{ t('privacy.intro_title') }}</h2>
          <p>{{ t('privacy.intro_text') }}</p>
        </section>

        <section class="content-section">
          <h2>{{ t('privacy.data_controller_title') }}</h2>
          <div class="info-box">
            <p><strong>Dr. Irene Berti</strong></p>
            <p>Corsico, Milano, Italia</p>
            <p>Email: info@ireneurofeedback.com</p>
            <p>Tel: +39 339 584 6754</p>
          </div>
        </section>

        <section class="content-section">
          <h2>{{ t('privacy.data_collected_title') }}</h2>
          <p>{{ t('privacy.data_collected_text') }}</p>
          <ul>
            <li>{{ t('privacy.data_item1') }}</li>
            <li>{{ t('privacy.data_item2') }}</li>
            <li>{{ t('privacy.data_item3') }}</li>
            <li>{{ t('privacy.data_item4') }}</li>
          </ul>
        </section>

        <section class="content-section">
          <h2>{{ t('privacy.data_purpose_title') }}</h2>
          <p>{{ t('privacy.data_purpose_text') }}</p>
        </section>

        <section class="content-section">
          <h2>{{ t('privacy.data_storage_title') }}</h2>
          <p>{{ t('privacy.data_storage_text') }}</p>
        </section>

        <section class="content-section">
          <h2>{{ t('privacy.user_rights_title') }}</h2>
          <p>{{ t('privacy.user_rights_text') }}</p>
          <ul>
            <li>{{ t('privacy.right1') }}</li>
            <li>{{ t('privacy.right2') }}</li>
            <li>{{ t('privacy.right3') }}</li>
            <li>{{ t('privacy.right4') }}</li>
            <li>{{ t('privacy.right5') }}</li>
          </ul>
        </section>

        <section class="content-section">
          <h2>{{ t('privacy.cookies_title') }}</h2>
          <p>{{ t('privacy.cookies_text') }}</p>
        </section>

        <section class="content-section">
          <h2>{{ t('privacy.contact_title') }}</h2>
          <p>{{ t('privacy.contact_text') }}</p>
          <div class="contact-box">
            <a href="mailto:info@ireneurofeedback.com" class="contact-link">info@ireneurofeedback.com</a>
          </div>
        </section>

        <section class="content-section">
          <p class="last-updated">{{ t('privacy.last_updated') }}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.page {
  padding-bottom: 3rem;
}

.page-hero {
  background: var(--bg-secondary);
  padding: 4rem 2rem 3rem;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 3rem;
}

.page-hero h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin: 0;
  font-weight: 700;
  text-align: center;
  color: var(--text-primary);
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content-wrapper {
  background: var(--bg-secondary);
  padding: 3rem;
  border-radius: 16px;
  border: 1px solid var(--border-color);
}

.content-section {
  margin-bottom: 2.5rem;
}

.content-section:last-child {
  margin-bottom: 0;
}

.content-section h2 {
  font-size: 1.5rem;
  margin: 0 0 1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.content-section p {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.content-section p:last-child {
  margin-bottom: 0;
}

.content-section ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.content-section li {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.info-box {
  background: var(--bg-primary);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  margin-top: 1rem;
}

.info-box p {
  margin: 0 0 0.5rem;
  font-size: 0.95rem;
}

.info-box p:last-child {
  margin-bottom: 0;
}

.info-box strong {
  font-weight: 600;
  color: var(--text-primary);
}

.contact-box {
  margin-top: 1rem;
}

.contact-link {
  display: inline-block;
  color: var(--text-primary);
  font-size: 1.05rem;
  font-weight: 600;
  text-decoration: none;
  transition: all var(--transition-base);
}

.contact-link:hover {
  opacity: 0.7;
}

.last-updated {
  font-size: 0.9rem;
  font-style: italic;
  color: var(--text-secondary);
  opacity: 0.8;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .page-hero {
    padding: 3rem 1.5rem 2rem;
  }

  .container {
    padding: 0 1.5rem;
  }

  .content-wrapper {
    padding: 2rem 1.5rem;
  }
}
</style>
