<template>
  <div class="lyrics-content">
    <p v-for="(line, index) in allLines" :key="index" :class="{ 'chorus': isChorusLine(index) }">
      {{ line }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'LyricsContent',
  props: {
    sections: {
      type: Array,
      required: true,
      validator: (sections) => {
        return sections.every(section => 
          ['verse', 'chorus', 'outro'].includes(section.type) &&
          Array.isArray(section.lines)
        )
      }
    }
  },
  computed: {
    allLines() {
      return this.sections.flatMap(section => section.lines)
    }
  },
  methods: {
    isChorusLine(index) {
      let currentIndex = 0
      for (const section of this.sections) {
        if (section.type === 'chorus') {
          if (index >= currentIndex && index < currentIndex + section.lines.length) {
            return true
          }
        }
        currentIndex += section.lines.length
      }
      return false
    }
  }
}
</script>

<style scoped>
.lyrics-section {
  margin-bottom: var(--space-8);
  width: 100%;
  box-sizing: border-box;
}

.lyrics-section:last-child {
  margin-bottom: 0;
}

.lyrics-section h4 {
  margin: 0 0 var(--space-4) 0;
  font-size: var(--font-size-lg);
  color: var(--color-gray-800);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
}

.lyrics-verse {
  margin-bottom: var(--space-4);
  color: var(--color-gray-700);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
}

.lyrics-verse:last-child {
  margin-bottom: 0;
}

.lyrics-chorus {
  margin: var(--space-6) 0;
  padding: var(--space-4);
  background: var(--color-gray-100);
  border-radius: var(--border-radius-lg);
  color: var(--color-gray-800);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  font-weight: var(--font-weight-medium);
}

@media (max-width: 768px) {
  .lyrics-section {
    margin-bottom: var(--space-6);
  }

  .lyrics-chorus {
    margin: var(--space-4) 0;
    padding: var(--space-3);
  }
}
</style> 