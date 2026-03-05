<template>
  <div class="page">
    <section class="hero">
      <div class="hero-content">
        <div class="hero-badge">
          <IconCalendar width="40" height="40" style="color: var(--text-primary)" />
        </div>
        <h1>{{ t('booking.title') }}</h1>
        <p class="hero-lead">{{ t('booking.subtitle') }}</p>
      </div>
    </section>

    <div class="container">
      <!-- Calendar Section -->
      <div class="calendar-section">
        <div class="section-header">
          <h2>{{ t('booking.calendar_title') }}</h2>
          <p>{{ t('booking.calendar_subtitle') }}</p>
        </div>

        <div class="calendar-container">
          <div class="calendar-header">
            <button @click="previousWeek" class="nav-btn" :disabled="currentWeekIndex === 0">
              <IconArrowLeft width="24" height="24" style="color: var(--text-primary)" />
            </button>
            <div class="calendar-title">
              <h3>{{ t('booking.select_date') }}</h3>
              <p class="week-indicator">{{ t('booking.week_of') }} {{ currentPeriodLabel }}</p>
            </div>
            <button @click="nextWeek" class="nav-btn" :disabled="currentWeekIndex >= availableWeeks.length - 1">
              <IconArrowRight width="24" height="24" style="color: var(--text-primary)" />
            </button>
          </div>

          <div v-if="loading" class="calendar-loading">
            <div class="spinner"></div>
            <p>{{ t('booking.loading') }}</p>
          </div>

          <div v-else-if="currentWeek && currentWeek.length > 0" class="calendar-content">
            <div class="calendar-days">
              <div v-for="day in currentWeek" :key="day.date" class="day-card">
                <div class="day-header">
                  <div class="day-name">{{ day.dayName }}</div>
                  <div class="day-date">{{ day.dateLabel }}</div>
                </div>
                <div class="day-slots">
                  <div class="time-grid">
                    <button
                      v-for="slot in day.slots.slice(0, 8)"
                      :key="slot.time"
                      @click="selectTimeSlot(day.date, slot.time)"
                      :class="['time-btn', { 
                        'selected': isSelected(day.date, slot.time), 
                        'blocked': slot.blocked,
                        'available': !slot.blocked
                      }]"
                      :disabled="slot.blocked"
                    >
                      <span class="time-text">{{ slot.time }}</span>
                    </button>
                  </div>
                  <button 
                    v-if="day.slots.length > 8" 
                    class="show-more-btn"
                    @click="showMoreSlots(day.date)"
                  >
                    +{{ day.slots.length - 8 }} {{ t('booking.more_times') }}
                  </button>
                  <div v-if="day.slots.length === 0" class="no-slots">
                    {{ t('booking.no_slots') }}
                  </div>
                </div>
              </div>
            </div>

            <div class="calendar-info">
              <div class="info-badge available">
                <div class="badge-dot"></div>
                <span>{{ t('booking.available') }}</span>
              </div>
              <div class="info-badge blocked">
                <div class="badge-dot"></div>
                <span>{{ t('booking.blocked') }}</span>
              </div>
            </div>
          </div>

          <div v-else class="calendar-empty">
            <IconCalendar width="48" height="48" style="color: var(--text-primary)" />
            <p>{{ t('booking.no_dates_available') }}</p>
          </div>
        </div>
      </div>

      <!-- Booking Form Section -->
      <div class="form-section">
        <div class="section-header">
          <h2>{{ t('booking.form_title') }}</h2>
          <p v-if="selectedSlot">
            {{ t('booking.selected_time') }}: <strong>{{ formatSelectedSlot() }}</strong>
          </p>
        </div>

        <form @submit.prevent="handleSubmit" class="booking-form">
          <div class="form-row">
            <div class="form-group">
              <label for="name">{{ t('booking.name_label') }} *</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                :placeholder="t('booking.name_placeholder')"
                required
              />
            </div>

            <div class="form-group">
              <label for="phone">{{ t('booking.phone_label') }}</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="formData.phone" 
                :placeholder="t('booking.phone_placeholder')"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="email">{{ t('booking.email_label') }} *</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              :placeholder="t('booking.email_placeholder')"
              required
            />
          </div>

          <div class="form-group">
            <label for="message">{{ t('booking.message_label') }}</label>
            <textarea 
              id="message" 
              v-model="formData.message" 
              :placeholder="t('booking.message_placeholder')"
              rows="5"
            ></textarea>
          </div>

          <button type="submit" class="btn-submit">
            <span>{{ t('booking.submit_button') }}</span>
              <IconArrowRightFill width="16" height="16" style="color: currentColor" />
          </button>
        </form>

        <div class="contact-info-box">
          <p>{{ t('booking.contact_alternative') }}</p>
          <div class="contact-links">
            <a :href="`tel:${t('contact_info.phone')}`" class="contact-link">
              <IconPhone width="16" height="16" style="color: currentColor" />
              {{ t('contact_info.phone') }}
            </a>
            <a :href="`mailto:${t('contact_info.email')}`" class="contact-link">
              <IconMail width="16" height="16" style="color: currentColor" />
              {{ t('contact_info.email') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import IconCalendar from '~icons/uil/calendar'
import IconArrowLeft from '~icons/iconamoon/arrow-left-2-bold'
import IconArrowRight from '~icons/iconamoon/arrow-right-2-bold'
import IconArrowRightFill from '~icons/mingcute/arrow-right-fill'
import IconPhone from '~icons/mdi-light/phone'
import IconMail from '~icons/material-symbols/mail-outline'

const { t, locale } = useI18n()

const loading = ref(true)
const calendarData = ref(null)
const currentWeekIndex = ref(0)
const selectedSlot = ref(null)

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

// Real calendar data
const availableDays = ref([])

const availableWeeks = computed(() => {
  // Group days into weeks (showing 3-5 days per view)
  if (availableDays.value.length === 0) return []
  
  const weeks = []
  const daysPerView = 3
  
  for (let i = 0; i < availableDays.value.length; i += daysPerView) {
    weeks.push(availableDays.value.slice(i, i + daysPerView))
  }
  
  return weeks
})

const currentWeek = computed(() => {
  if (availableWeeks.value.length === 0) return null
  return availableWeeks.value[currentWeekIndex.value]?.map(day => ({
    ...day,
    dateLabel: formatDate(day.date)
  }))
})

const currentPeriodLabel = computed(() => {
  if (!currentWeek.value || currentWeek.value.length === 0) return ''
  const firstDay = currentWeek.value[0]
  const lastDay = currentWeek.value[currentWeek.value.length - 1]
  if (currentWeek.value.length === 1) {
    return formatDate(firstDay.date)
  }
  return `${formatDate(firstDay.date)} - ${formatDate(lastDay.date)}`
})

function formatDate(dateStr) {
  // Append local midnight to avoid UTC-parsing shifting the date back one day
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString(locale.value === 'de' ? 'de-DE' : 'it-IT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

function getDayName(date) {
  return date.toLocaleDateString(locale.value === 'de' ? 'de-DE' : 'it-IT', { weekday: 'long' })
}

function formatSelectedSlot() {
  if (!selectedSlot.value) return ''
  return `${formatDate(selectedSlot.value.date)} - ${selectedSlot.value.time}`
}

function isSelected(date, time) {
  return selectedSlot.value?.date === date && selectedSlot.value?.time === time
}

function selectTimeSlot(date, time) {
  selectedSlot.value = { date, time }
}

function previousWeek() {
  if (currentWeekIndex.value > 0) {
    currentWeekIndex.value--
  }
}

function nextWeek() {
  if (currentWeekIndex.value < availableWeeks.value.length - 1) {
    currentWeekIndex.value++
  }
}

function showMoreSlots(date) {
  // Could open a modal with all time slots for this day
  console.log('Show more slots for', date)
}

async function fetchCalendarData() {
  loading.value = true
  try {
    // Fetch via our own Cloudflare Pages Function proxy.
    // This keeps the user's IP private — the request to calendarapp.de
    // is made server-side by Cloudflare, never from the visitor's browser.
    const response = await fetch('/api/calendar')
    const imageData = await response.blob()
    
    // Since the API returns an image, we'll use mock data for now
    // In a real implementation, you would have a proper JSON endpoint
    // For demonstration, create realistic available slots
    const today = new Date()
    const days = []
    
    // Generate next 3 Fridays with time slots
    for (let weekOffset = 0; weekOffset < 6; weekOffset++) {
      const date = new Date(today)
      date.setDate(date.getDate() + (5 - date.getDay() + 7) % 7 + (weekOffset * 7))
      
      const dayName = getDayName(date)
      const slots = []
      
      // Morning slots (8:00 - 12:30)
      for (let hour = 8; hour <= 12; hour++) {
        for (let min = 0; min < 60; min += 30) {
          if (hour === 12 && min === 30) continue // skip 12:30, end at 12:00
          const time = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`
          slots.push({ time, blocked: false })
        }
      }

      // Afternoon slots (14:00 - 17:00)
      for (let hour = 14; hour <= 17; hour++) {
        for (let min = 0; min < 60; min += 30) {
          if (hour === 17 && min === 30) continue // skip 17:30, end at 17:00
          const time = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`
          slots.push({ time, blocked: false })
        }
      }

      // Build local YYYY-MM-DD string without UTC conversion
      const y = date.getFullYear()
      const m = String(date.getMonth() + 1).padStart(2, '0')
      const d = String(date.getDate()).padStart(2, '0')

      days.push({
        date: `${y}-${m}-${d}`,
        dayName,
        slots
      })
    }
    
    availableDays.value = days
    loading.value = false
  } catch (error) {
    console.error('Error fetching calendar data:', error)
    // Fallback to basic mock data on error
    availableDays.value = []
    loading.value = false
  }
}

const handleSubmit = () => {
  const subject = encodeURIComponent(`Terminanfrage - ${formData.value.name}`)
  let body = `Name: ${formData.value.name}\n`
  body += `Email: ${formData.value.email}\n`
  if (formData.value.phone) body += `Telefon: ${formData.value.phone}\n`
  if (selectedSlot.value) {
    body += `Gewünschter Termin: ${formatSelectedSlot()}\n`
  }
  if (formData.value.message) body += `\nNachricht:\n${formData.value.message}`
  
  window.location.href = `mailto:${t('contact_info.email')}?subject=${subject}&body=${encodeURIComponent(body)}`
}

onMounted(() => {
  fetchCalendarData()
})
</script>

<style scoped>
.page {
  padding-bottom: 3rem;
}

.hero {
  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
  padding: 8rem 2rem 6rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
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
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.hero h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin: 0 0 1rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.hero-lead {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Calendar Section */
.calendar-section {
  margin-top: -3rem;
  margin-bottom: 4rem;
}

.section-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-header h2 {
  font-size: 2rem;
  margin: 0 0 0.5rem;
  color: var(--text-primary);
}

.section-header p {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.section-header strong {
  color: var(--text-primary);
  font-weight: 600;
}

.calendar-container {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  gap: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid var(--border-color);
}

.calendar-title {
  flex: 1;
  text-align: center;
}

.calendar-title h3 {
  font-size: 1.5rem;
  margin: 0 0 0.25rem;
  color: var(--text-primary);
  font-weight: 600;
}

.week-indicator {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0;
}

.nav-btn {
  background: var(--bg-primary);
  border: 2px solid var(--border-color);
  border-radius: 12px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition-base);
  color: var(--text-primary);
}

.nav-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  border-color: var(--text-secondary);
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.calendar-content {
  margin-bottom: 0;
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.day-card {
  background: var(--bg-primary);
  border: 2px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  transition: var(--transition-base);
}

.day-card:hover {
  border-color: var(--text-secondary);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.day-header {
  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
  padding: 1.25rem;
  text-align: center;
  border-bottom: 2px solid var(--border-color);
}

.day-name {
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.day-date {
  font-size: 0.95rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.day-slots {
  padding: 1.25rem;
}

.time-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.time-btn {
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: 10px;
  padding: 0.875rem;
  text-align: center;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--text-primary);
  position: relative;
  overflow: hidden;
}

.time-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.time-btn:hover:not(:disabled)::before {
  left: 100%;
}

.time-btn.available:hover:not(:disabled) {
  transform: scale(1.05);
  border-color: var(--text-primary);
  background: var(--bg-primary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.time-btn.selected {
  background: var(--text-primary);
  color: var(--bg-primary);
  border-color: var(--text-primary);
  transform: scale(1.05);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.time-btn.blocked {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  opacity: 0.4;
  cursor: not-allowed;
  border-style: dashed;
}

.time-text {
  display: block;
  font-variant-numeric: tabular-nums;
}

.show-more-btn {
  width: 100%;
  padding: 0.75rem;
  background: transparent;
  border: 2px dashed var(--border-color);
  border-radius: 8px;
  color: var(--text-secondary);
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: var(--transition-base);
}

.show-more-btn:hover {
  border-color: var(--text-primary);
  color: var(--text-primary);
  background: var(--bg-secondary);
}

.calendar-loading {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-secondary);
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid var(--border-color);
  border-top-color: var(--text-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.calendar-empty {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-secondary);
}

.calendar-empty svg {
  margin: 0 auto 1rem;
  opacity: 0.5;
}

.calendar-empty p {
  font-size: 1.1rem;
  margin: 0;
}

.calendar-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}

.info-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.badge-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid var(--border-color);
}

.info-badge.available .badge-dot {
  background: var(--bg-secondary);
  border-color: var(--text-primary);
}

.info-badge.blocked .badge-dot {
  background: var(--bg-secondary);
  opacity: 0.4;
  border-style: dashed;
}

.no-slots {
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.95rem;
  padding: 2rem 1rem;
  font-style: italic;
}

/* Form Section */
.form-section {
  max-width: 700px;
  margin: 0 auto;
}

.booking-form {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: var(--transition-base);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--text-primary);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
}

.btn-submit {
  width: 100%;
  padding: 1rem 2rem;
  background: var(--text-primary);
  color: var(--bg-primary);
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: var(--transition-base);
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  gap: 1rem;
}

.btn-submit svg {
  transition: var(--transition-base);
}

.contact-info-box {
  margin-top: 2rem;
  padding: 1.5rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  text-align: center;
}

.contact-info-box p {
  margin: 0 0 1rem;
  color: var(--text-secondary);
}

.contact-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition-base);
}

.contact-link:hover {
  gap: 0.75rem;
  opacity: 0.7;
}

/* Responsive */
@media (max-width: 968px) {
  .hero {
    padding: 6rem 2rem 4rem;
  }

  .calendar-days {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .calendar-info {
    flex-direction: column;
    gap: 1rem;
  }

  .contact-links {
    flex-direction: column;
    gap: 1rem;
  }

  .calendar-header {
    flex-direction: column;
    gap: 1rem;
  }

  .calendar-title h3 {
    font-size: 1.25rem;
  }
}

@media (max-width: 640px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero-badge {
    width: 60px;
    height: 60px;
  }

  .hero-badge svg {
    width: 30px;
    height: 30px;
  }

  .calendar-container {
    padding: 1.25rem;
  }

  .booking-form {
    padding: 1.5rem;
  }

  .nav-btn {
    width: 40px;
    height: 40px;
  }

  .time-grid {
    grid-template-columns: 1fr;
  }

  .calendar-header {
    padding-bottom: 1rem;
  }
}
</style>