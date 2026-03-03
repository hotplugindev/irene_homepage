<template>
  <div class="page">
    <div class="container">
      <div class="profile-hero">
        <div class="profile-image-container">
          <img src="/Irene_Berti.jpeg" alt="Dr. Irene Berti" class="profile-image" />
        </div>
        <div class="profile-info">
          <h1>{{ t('about.name') }}</h1>
          <p class="title">{{ t('about.profession') }}</p>
          <p class="bio">{{ t('about.intro') }}</p>
        </div>
      </div>

      <div class="content-grid">
        <div class="info-card">
          <h2>{{ t('about.experience_title') }}</h2>
          <p>{{ t('about.experience_text') }}</p>
        </div>

        <div class="info-card">
          <h2>{{ t('about.specializations_title') }}</h2>
          <p>{{ t('about.specializations_text') }}</p>
        </div>
      </div>

      <div class="education-section">
        <h2>{{ t('about.education_title') }}</h2>
        <div class="education-grid">
          <div class="education-card">
            <div class="number">01</div>
            <p>{{ t('about.education1') }}</p>
          </div>
          <div class="education-card">
            <div class="number">02</div>
            <p>{{ t('about.education2') }}</p>
          </div>
          <div class="education-card">
            <div class="number">03</div>
            <p>{{ t('about.education3') }}</p>
          </div>
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
  padding: 6rem 2rem 4rem;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.profile-hero {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 4rem;
}

.profile-image-container {
  position: relative;
}

.profile-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--border-color);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.profile-info h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: var(--text-primary);
  line-height: 1.2;
}

.title {
  font-size: 1.25rem;
  color: var(--text-secondary);
  font-weight: 500;
  margin: 0 0 1.5rem;
}

.bio {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
}

.info-card {
  background: var(--bg-secondary);
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  transition: all var(--transition-base);
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
}

.info-card h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem;
  color: var(--text-primary);
}

.info-card p {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
}

.education-section {
  margin-bottom: 4rem;
}

.education-section h2 {
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0 0 2rem;
  color: var(--text-primary);
  text-align: center;
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.education-card {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: all var(--transition-base);
  text-align: center;
}

.education-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.number {
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
  margin: 0 auto 1.25rem;
}

.education-card p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

.btn {
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  background: var(--text-primary);
  color: var(--bg-primary);
  text-decoration: none;
  display: inline-block;
  transition: all var(--transition-base);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

@media (max-width: 968px) {
  .profile-hero {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .profile-image {
    margin: 0 auto;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }

  .education-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page {
    padding: 5rem 1.5rem 3rem;
  }

  .profile-info h1 {
    font-size: 2rem;
  }

  .info-card {
    padding: 2rem 1.5rem;
  }
}
</style>
