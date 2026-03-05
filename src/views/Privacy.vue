<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <h1>{{ t('privacy.title') }}</h1>
        <p class="hero-sub">{{ t('privacy.last_updated_label') }}: {{ t('privacy.last_updated_date') }}</p>
      </div>
    </section>

    <div class="container">
      <div class="content-wrapper">

        <!-- 1. Übersicht -->
        <section class="content-section">
          <h2>1. {{ t('privacy.overview_title') }}</h2>
          <p>{{ t('privacy.overview_text') }}</p>
        </section>

        <!-- 2. Verantwortlicher -->
        <section class="content-section">
          <h2>2. {{ t('privacy.controller_title') }}</h2>
          <p>{{ t('privacy.controller_intro') }}</p>
          <div class="info-box">
            <p><strong>Dr. med. univ. Irene Berti</strong></p>
            <p>{{ t('privacy.controller_profession') }}</p>
            <p>Domplatz 20, IT-39042 Brixen / Bressanone (BZ)</p>
            <p>{{ t('privacy.controller_email_label') }}: <a href="mailto:info@ireneberti.eu" class="inline-link">info@ireneberti.eu</a></p>
            <p>{{ t('privacy.controller_phone_label') }}: <a href="tel:+393792011123" class="inline-link">+39 379 20 11 123</a></p>
          </div>
        </section>

        <!-- 3. Hosting -->
        <section class="content-section">
          <h2>3. {{ t('privacy.hosting_title') }}</h2>
          <p>{{ t('privacy.hosting_intro') }}</p>
          <div class="info-box">
            <p><strong>Cloudflare, Inc.</strong></p>
            <p>101 Townsend St, San Francisco, CA 94107, USA</p>
            <p><a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" class="inline-link">cloudflare.com/privacypolicy</a></p>
          </div>
          <div class="warning-box">
            <p><strong>{{ t('privacy.hosting_transfer_title') }}:</strong> {{ t('privacy.hosting_transfer_text') }}</p>
          </div>
          <p>{{ t('privacy.hosting_basis_text') }}</p>
        </section>

        <!-- 4. Kontaktaufnahme per E-Mail -->
        <section class="content-section">
          <h2>4. {{ t('privacy.email_title') }}</h2>
          <p>{{ t('privacy.email_text') }}</p>
          <ul>
            <li><strong>{{ t('privacy.email_basis_label') }}:</strong> {{ t('privacy.email_basis_text') }}</li>
            <li><strong>{{ t('privacy.email_delete_label') }}:</strong> {{ t('privacy.email_delete_text') }}</li>
          </ul>
        </section>

        <!-- 5. Terminanfrage -->
        <section class="content-section">
          <h2>5. {{ t('privacy.booking_title') }}</h2>
          <p>{{ t('privacy.booking_text') }}</p>
          <ul>
            <li><strong>{{ t('privacy.booking_calendar_label') }}:</strong> {{ t('privacy.booking_calendar_text') }}</li>
            <li><strong>{{ t('privacy.booking_form_label') }}:</strong> {{ t('privacy.booking_form_text') }}</li>
          </ul>
        </section>

        <!-- 6. Google Maps -->
        <section class="content-section">
          <h2>6. {{ t('privacy.maps_title') }}</h2>
          <p>{{ t('privacy.maps_text') }}</p>
          <ul>
            <li><strong>{{ t('privacy.maps_consent_label') }}:</strong> {{ t('privacy.maps_consent_text') }}</li>
            <li><strong>{{ t('privacy.maps_provider_label') }}:</strong> {{ t('privacy.maps_provider_text') }}</li>
          </ul>
          <div class="info-box">
            <p><strong>Google Ireland Limited</strong></p>
            <p>Gordon House, Barrow Street, Dublin 4, Ireland</p>
            <p><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="inline-link">policies.google.com/privacy</a></p>
          </div>
        </section>

        <!-- 7. Lokale Browserspeicherung -->
        <section class="content-section">
          <h2>7. {{ t('privacy.storage_title') }}</h2>
          <p>{{ t('privacy.storage_text') }}</p>
          <ul>
            <li><strong>{{ t('privacy.storage_item1_title') }}:</strong> {{ t('privacy.storage_item1_text') }}</li>
            <li><strong>{{ t('privacy.storage_item2_title') }}:</strong> {{ t('privacy.storage_item2_text') }}</li>
          </ul>
          <p>{{ t('privacy.storage_basis_text') }}</p>
        </section>

        <!-- 8. Keine Tracking-Dienste -->
        <section class="content-section">
          <h2>8. {{ t('privacy.no_tracking_title') }}</h2>
          <p>{{ t('privacy.no_tracking_text') }}</p>
        </section>

        <!-- 9. Gesundheitsdaten (Art. 9 DSGVO) -->
        <section class="content-section">
          <h2>9. {{ t('privacy.health_title') }}</h2>
          <div class="warning-box">
            <p>{{ t('privacy.health_text') }}</p>
          </div>
        </section>

        <!-- 10. Betroffenenrechte -->
        <section class="content-section">
          <h2>10. {{ t('privacy.rights_title') }}</h2>
          <p>{{ t('privacy.rights_intro') }}</p>
          <div class="rights-grid">
            <div class="right-item">
              <span class="right-badge">Art. 15</span>
              <div>
                <strong>{{ t('privacy.right1_title') }}</strong>
                <p>{{ t('privacy.right1_text') }}</p>
              </div>
            </div>
            <div class="right-item">
              <span class="right-badge">Art. 16</span>
              <div>
                <strong>{{ t('privacy.right2_title') }}</strong>
                <p>{{ t('privacy.right2_text') }}</p>
              </div>
            </div>
            <div class="right-item">
              <span class="right-badge">Art. 17</span>
              <div>
                <strong>{{ t('privacy.right3_title') }}</strong>
                <p>{{ t('privacy.right3_text') }}</p>
              </div>
            </div>
            <div class="right-item">
              <span class="right-badge">Art. 18</span>
              <div>
                <strong>{{ t('privacy.right4_title') }}</strong>
                <p>{{ t('privacy.right4_text') }}</p>
              </div>
            </div>
            <div class="right-item">
              <span class="right-badge">Art. 20</span>
              <div>
                <strong>{{ t('privacy.right5_title') }}</strong>
                <p>{{ t('privacy.right5_text') }}</p>
              </div>
            </div>
            <div class="right-item">
              <span class="right-badge">Art. 21</span>
              <div>
                <strong>{{ t('privacy.right6_title') }}</strong>
                <p>{{ t('privacy.right6_text') }}</p>
              </div>
            </div>
            <div class="right-item">
              <span class="right-badge">Art. 7 III</span>
              <div>
                <strong>{{ t('privacy.right7_title') }}</strong>
                <p>{{ t('privacy.right7_text') }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 11. Aufsichtsbehörde -->
        <section class="content-section">
          <h2>11. {{ t('privacy.authority_title') }}</h2>
          <p>{{ t('privacy.authority_text') }}</p>
          <div class="info-box">
            <p><strong>{{ t('privacy.authority_name') }}</strong></p>
            <p>{{ t('privacy.authority_address') }}</p>
            <p><a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" class="inline-link">{{ t('privacy.authority_website') }}</a></p>
          </div>
        </section>

        <!-- 12. Datensicherheit -->
        <section class="content-section">
          <h2>12. {{ t('privacy.security_title') }}</h2>
          <p>{{ t('privacy.security_text') }}</p>
        </section>

        <!-- 13. Änderungen -->
        <section class="content-section">
          <h2>13. {{ t('privacy.changes_title') }}</h2>
          <p>{{ t('privacy.changes_text') }}</p>
          <p class="last-updated">{{ t('privacy.last_updated_label') }}: {{ t('privacy.last_updated_date') }}</p>
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
  margin: 0 0 0.75rem;
  font-weight: 700;
  text-align: center;
  color: var(--text-primary);
}

.hero-sub {
  text-align: center;
  color: var(--text-tertiary);
  font-size: 0.9rem;
  margin: 0;
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
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--border-color);
}

.content-section:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.content-section h2 {
  font-size: 1.35rem;
  margin: 0 0 1rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.01em;
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
  margin-bottom: 0.75rem;
}

.info-box {
  background: var(--bg-primary);
  padding: 1.25rem 1.5rem;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  margin: 1rem 0;
}

.info-box p {
  margin: 0 0 0.4rem;
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

.warning-box {
  background: color-mix(in srgb, var(--accent) 6%, var(--bg-primary));
  border-left: 3px solid var(--accent);
  padding: 1rem 1.25rem;
  border-radius: 0 8px 8px 0;
  margin: 1rem 0;
}

.warning-box p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.inline-link {
  color: var(--text-primary);
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: opacity 0.2s;
}

.inline-link:hover {
  opacity: 0.65;
}

.rights-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.25rem;
}

.right-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1rem 1.25rem;
  background: var(--bg-primary);
  border-radius: 10px;
  border: 1px solid var(--border-color);
}

.right-badge {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 0.25rem 0.5rem;
  white-space: nowrap;
  margin-top: 0.1rem;
}

.right-item strong {
  display: block;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
  font-size: 1rem;
}

.right-item p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
}

.last-updated {
  font-size: 0.875rem;
  font-style: italic;
  color: var(--text-tertiary);
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  .page-hero {
    padding: 3rem 1.5rem 2rem;
  }

  .container {
    padding: 0 1rem;
  }

  .content-wrapper {
    padding: 2rem 1.25rem;
  }

  .right-item {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
