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
.lyrics-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.lyrics-content p {
  margin: 0;
  color: #444;
  line-height: 1.6;
}

.lyrics-content p.chorus {
  font-weight: 500;
  color: #2c3e50;
}
</style> 