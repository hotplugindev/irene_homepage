<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <h1>{{ t('impressum.title') }}</h1>
      </div>
    </section>

    <div class="container">
      <div class="content-wrapper">
        <section class="content-section">
          <h2>{{ t('impressum.provider_title') }}</h2>
          <div class="info-box">
            <p><strong>Dr. Irene Berti</strong></p>
            <p>{{ t('impressum.profession') }}</p>
            <p>Corsico, Milano, Italia</p>
          </div>
        </section>

        <section class="content-section">
          <h2>{{ t('impressum.contact_title') }}</h2>
          <div class="info-box">
            <p>{{ t('impressum.phone') }}: <a href="tel:+393395846754" class="inline-link">+39 339 584 6754</a></p>
            <p>{{ t('impressum.email') }}: <a href="mailto:info@ireneurofeedback.com" class="inline-link">info@ireneurofeedback.com</a></p>
          </div>
        </section>

        <section class="content-section">
          <h2>{{ t('impressum.vat_title') }}</h2>
          <p>{{ t('impressum.vat_text') }}</p>
        </section>

        <section class="content-section">
          <h2>{{ t('impressum.professional_title') }}</h2>
          <p>{{ t('impressum.professional_text') }}</p>
          <ul>
            <li>{{ t('impressum.prof_item1') }}</li>
            <li>{{ t('impressum.prof_item2') }}</li>
            <li>{{ t('impressum.prof_item3') }}</li>
          </ul>
        </section>

        <section class="content-section">
          <h2>{{ t('impressum.liability_content_title') }}</h2>
          <p>{{ t('impressum.liability_content_text') }}</p>
        </section>

        <section class="content-section">
          <h2>{{ t('impressum.liability_links_title') }}</h2>
          <p>{{ t('impressum.liability_links_text') }}</p>
        </section>

        <section class="content-section">
          <h2>{{ t('impressum.copyright_title') }}</h2>
          <p>{{ t('impressum.copyright_text') }}</p>
        </section>

        <section class="content-section">
          <h2>{{ t('impressum.dispute_title') }}</h2>
          <p>{{ t('impressum.dispute_text') }}</p>
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
  color: var(--text-secondary);
}

.info-box p:last-child {
  margin-bottom: 0;
}

.info-box strong {
  font-weight: 600;
  color: var(--text-primary);
}

.inline-link {
  color: var(--text-primary);
  font-weight: 500;
  text-decoration: none;
  transition: all var(--transition-base);
}

.inline-link:hover {
  opacity: 0.7;
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
