<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <svg ref="logoSvg" class="hero-logo" viewBox="0 0 297 210" xmlns="http://www.w3.org/2000/svg">
          <g>
            <g transform="matrix(0.26458333,0,0,0.26458333,100.616,37.841289)">
              <ellipse
                ref="circleFill"
                style="fill:#008080;fill-opacity:0.988235;stroke:none;"
                cx="249.87296"
                cy="238.13197"
                rx="206.95241"
                ry="206.96748" />
              <ellipse
                ref="circle"
                style="fill:none;stroke:#ffffff;stroke-width:15.185;stroke-linecap:round;stroke-opacity:1;"
                cx="249.87296"
                cy="238.13197"
                rx="206.95241"
                ry="206.96748" />
            </g>
            <g transform="matrix(0.26458333,0,0,0.26458333,99.495061,38.505015)">
              <path
                ref="brainwave"
                style="fill:#008080;fill-opacity:0.0;stroke:#ffffff;stroke-width:10.258;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke"
                d="m 702.6279,241.64377 -287.2913,0.16718 c -39.19956,0.0228 -51.76748,-5.86402 -57.34199,-14.98854 -9.80951,-16.0565 -23.40145,-15.80296 -24.19273,18.63634 -2.62916,45.90948 -28.55609,37.00874 -29.84373,-0.53437 -26.94812,-305.051586 -35.0414,-104.45787 -49.0289,-3.03626 -15.19962,158.20843 -23.82362,168.40537 -43.1372,4.71882 -11.1683,-113.51269 -37.76568,-28.81872 -44.41418,-1.85243 -18.6934,80.29546 -27.79033,-2.79285 -47.93761,-2.81873 l -461.66086,-0.59302" />
            </g>
            <text
              ref="text1"
              xml:space="preserve"
              :style="`font-style:normal;font-variant:normal;font-weight:500;font-stretch:normal;font-size:12.7px;font-family:Ubuntu;fill:${isDark ? '#ffffff' : '#1c1c1a'};fill-opacity:0.988235;stroke:none;`"
              x="9.8382921"
              y="97.522865">
              <tspan
                style="font-style:normal;font-variant:normal;font-weight:500;font-stretch:normal;font-size:12.7px;font-family:Ubuntu;"
                x="9.8382921"
                y="97.522865">neurofeedback</tspan>
            </text>
            <text
              ref="text2"
              xml:space="preserve"
              :style="`font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:9.87778px;font-family:Ubuntu;fill:${isDark ? '#ffffff' : '#1c1c1a'};fill-opacity:0.988235;stroke:none;`"
              x="237.57349"
              y="115.6083">
              <tspan
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:9.87778px;font-family:Ubuntu;"
                x="237.57349"
                y="115.6083">irene berti</tspan>
            </text>
          </g>
        </svg>
        <h1>{{ t('home.title') }}</h1>
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
            <IconEiCheck width="45" height="45" style="color: var(--text-primary)" />
          </div>
          <h2>{{ t('home.welcome_title') }}</h2>
          <p class="intro-lead">{{ t('home.welcome_text') }}</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card featured">
            <div class="feature-icon">
              <IconWpfPast width="32" height="32" style="color: var(--text-primary)" />
            </div>
            <h3>{{ t('home.section3_title') }}</h3>
            <p>{{ t('home.section3_text') }}</p>
            <router-link :to="`/${locale}/neurofeedback`" class="feature-link">
              {{ t('home.learn_more') }}
              <IconArrowRightFill width="16" height="16" style="color: var(--text-primary)" />
            </router-link>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <IconRadixPeople width="28" height="28" style="color: var(--text-primary)" />
            </div>
            <h3>{{ t('home.section1_title') }}</h3>
            <p>{{ t('home.section1_text') }}</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <IconMdiClock width="28" height="28" style="color: var(--text-primary)" />
            </div>
            <h3>{{ t('home.section3_title') }}</h3>
            <p>{{ t('home.section3_text') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from '../composables/useTheme'
import IconEiCheck from '~icons/ei/check'
import IconWpfPast from '~icons/wpf/past'
import IconArrowRightFill from '~icons/mingcute/arrow-right-fill'
import IconRadixPeople from '~icons/radix-icons/people'
import IconMdiClock from '~icons/mdi/clock-outline'
import gsap from 'gsap'

const { t, locale } = useI18n()
const { isDark } = useTheme()

const logoSvg = ref(null)
const circle = ref(null)
const circleFill = ref(null)
const brainwave = ref(null)
const text1 = ref(null)
const text2 = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } })
  
  // Get the path lengths
  const brainwavePath = brainwave.value
  const circlePath = circle.value
  const circleFillPath = circleFill.value
  const pathLength = brainwavePath.getTotalLength()
  
  // Calculate circle circumference
  const rx = 206.95241
  const ry = 206.96748
  const circleCircumference = Math.PI * (3 * (rx + ry) - Math.sqrt((3 * rx + ry) * (rx + 3 * ry)))
  
  // Set initial state - hide everything
  gsap.set(circlePath, {
    strokeDasharray: circleCircumference,
    strokeDashoffset: circleCircumference,
    rotation: 90, // Start from right side where brainwave connects
    transformOrigin: "center"
  })
  gsap.set(circleFillPath, {
    opacity: 0
  })
  gsap.set(brainwavePath, {
    strokeDasharray: pathLength,
    strokeDashoffset: pathLength
  })
  //gsap.set([text1.value, text2.value], { opacity: 0, y: -20 })
  gsap.set(text2.value, { opacity: 0, y: 20 })
  gsap.set(text1.value, { opacity: 0, y: -20 })
  
  // Animation sequence
  tl.to(circlePath, {
    strokeDashoffset: 0,
    duration: 3,
    ease: "power1.inOut"
  })
  .to(brainwavePath, {
    strokeDashoffset: 0,
    duration: 3,
    ease: "power1.inOut"
  }, 0) // Start at same time
  .to(circleFillPath, {
    opacity: 1,
    duration: 0.8,
    ease: "power2.inOut"
  }, "-=0.8")
  .to(text1.value, {
    opacity: 1,
    y: 0,
    duration: 0.8
  }, "-=0.6")
  .to(text2.value, {
    opacity: 1,
    y: 0,
    duration: 0.8
  }, "-=0.6")
  
  // Add subtle floating animation after everything loads
  gsap.to(logoSvg.value, {
    y: -10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 3.5
  })
})
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
  /*background-color: var(--opacity-medium); /* 0.5 = 50% opacity */
  background: linear-gradient(180deg, transparent, var(--opacity-full));
  z-index: 1;
}

.hero-content {
  z-index: 2;
  max-width: 1000px;
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
  margin-top: 3rem;
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
  box-shadow: var(--shadow-lg);
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
}
</style>
