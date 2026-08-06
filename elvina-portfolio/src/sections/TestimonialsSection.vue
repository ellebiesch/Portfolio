<template>
  <section class="testimonial">
    <div class="container">
      <div class="testimonial-label">Testimonials</div>
      <p class="testimonial-intro">
        Trusted by founders and product teams building products that people rely on every day.
      </p>
      <div class="carousel">
        <div class="carousel-track">
          <div
            v-for="(slide, i) in slides"
            :key="i"
            class="carousel-slide"
            :class="{ active: i === current }"
          >
            <blockquote class="quote" :class="{ 'is-long': slide.long }">
              <template v-if="slide.highlight">
                {{ slide.before }}<span class="quote-highlight">{{ slide.highlight }}</span
                >{{ slide.after }}
              </template>
              <span v-else class="quote-placeholder">{{ slide.placeholder }}</span>
            </blockquote>
            <div class="quote-author">
              <div class="author-avatar">{{ slide.initial }}</div>
              <div class="author-info">
                <span class="author-name">{{ slide.name }}</span>
                <span class="author-role">{{ slide.role }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-controls">
          <button class="carousel-arrow" aria-label="Previous testimonial" @click="prev">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <div class="carousel-dots">
            <button
              v-for="(_, i) in slides"
              :key="i"
              class="dot"
              :class="{ active: i === current }"
              :aria-label="`Slide ${i + 1}`"
              @click="goTo(i)"
            ></button>
          </div>
          <button class="carousel-arrow" aria-label="Next testimonial" @click="next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <div class="carousel-counter">
            <span>{{ counter }}</span><span style="opacity: 0.4"> / {{ total }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  data() {
    return {
      current: 0,
      slides: [
        {
          before: 'Elvina brought creativity, thoughtfulness, and a strong user-centric mindset to every project. ',
          highlight: 'Her contributions made a meaningful impact',
          after: ' on our product experience and internal workflows.',
          initial: 'J',
          name: 'Justin Lu',
          role: 'CEO & Co-founder, Truckpedia',
        },
        {
          before:
            "Elvina has been an incredible design partner on Primoro. She doesn't just deliver screens, she thinks through the product with you.",
            highlight: 'The quality of work has consistently exceeded expectations.',
          initial: 'H',
          name: 'Harry Leak',
          role: 'Business Director, Primoro / Foxbury Dental',
        },
        {
          before:
            'Elvina consistently stays on top of requirements and makes sure nothing important slips through the cracks. She asks thoughtful questions early, clarifies ambiguities before they become problems, and ',
          highlight:
            "isn't afraid to push back when something could negatively impact the product or user experience",
          after:
            '. Her communication with both stakeholders and developers makes collaboration smooth and efficient.',
          long: true,
          initial: 'J',
          name: 'Judy Abunda',
          role: 'Manager, CPS',
        },
      ],
    };
  },
  computed: {
    total() {
      return String(this.slides.length).padStart(2, '0');
    },
    counter() {
      return String(this.current + 1).padStart(2, '0');
    },
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  },
  methods: {
    goTo(index) {
      const len = this.slides.length;
      this.current = (index + len) % len;
    },
    next() {
      this.goTo(this.current + 1);
    },
    prev() {
      this.goTo(this.current - 1);
    },
    handleKeydown(e) {
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    },
  },
};
</script>

<style scoped>
.testimonial {
  padding: 180px 0;
  background: var(--ink);
  color: white;
  position: relative;
  overflow: hidden;
}
.testimonial::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 50%, rgba(216, 118, 87, 0.15) 0%, transparent 50%);
  pointer-events: none;
}
.testimonial .container {
  position: relative;
  z-index: 1;
}
.testimonial-label {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent-soft);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.testimonial-intro {
  font-size: 19px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  max-width: 680px;
  margin-bottom: 56px;
}
.quote {
  font-family: var(--display);
  font-size: clamp(32px, 4.5vw, 56px);
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.02em;
  max-width: 1100px;
  font-style: normal;
  color: white;
  font-variation-settings: 'opsz' 96, 'wdth' 95, 'wght' 400;
}
/* Longer quotes step down a size so they don't overrun the slide. */
.quote.is-long {
  font-size: clamp(24px, 2.9vw, 38px);
  line-height: 1.3;
  max-width: 1000px;
}
.quote-highlight {
  background: linear-gradient(180deg, transparent 60%, rgba(216, 118, 87, 0.35) 60%);
  padding: 0 4px;
}
.quote-placeholder {
  opacity: 0.4;
  font-style: normal;
  font-family: var(--mono);
  font-size: 0.45em;
  letter-spacing: 0.05em;
}
.quote-author {
  margin-top: 56px;
  display: flex;
  align-items: center;
  gap: 16px;
}
.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--display);
  font-weight: 600;
  font-size: 20px;
  color: white;
}
.author-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.author-name {
  font-size: 15px;
  font-weight: 500;
  color: white;
}
.author-role {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.6);
}
.carousel {
  position: relative;
}
.carousel-track {
  display: grid;
  min-height: 360px;
}
.carousel-slide {
  grid-column: 1;
  grid-row: 1;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transition: opacity 0.6s ease, visibility 0s linear 0.6s;
}
.carousel-slide.active {
  opacity: 1;
  pointer-events: auto;
  visibility: visible;
  transition: opacity 0.6s ease, visibility 0s linear;
}
.carousel-controls {
  margin-top: 64px;
  display: flex;
  align-items: center;
  gap: 24px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}
.carousel-arrow {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  color: white;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
.carousel-arrow:hover {
  background: var(--accent);
  border-color: var(--accent);
  transform: translateY(-1px);
  box-shadow: 0 10px 24px -8px rgba(139, 58, 47, 0.6);
}
.carousel-dots {
  display: flex;
  gap: 10px;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}
.dot:hover {
  background: rgba(255, 255, 255, 0.5);
}
.dot.active {
  background: var(--accent-soft);
  width: 32px;
  border-radius: 999px;
  box-shadow: 0 0 0 4px rgba(216, 118, 87, 0.15);
}
.carousel-counter {
  margin-left: auto;
  font-family: var(--mono);
  font-size: 13px;
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 900px) {
  .testimonial {
    padding: 100px 0;
  }
}
</style>
