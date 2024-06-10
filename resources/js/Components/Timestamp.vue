<template>
  <div class="flex">
    <p class="mr-4">{{ formattedDate }}</p>
    <p>{{ formattedTime }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: '',
      currentTime: '',
    };
  },
  computed: {
    formattedDate() {
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      return new Date(this.currentDate).toLocaleDateString('en-GB', options); // en-GB locale để có định dạng dd/mm/yyyy
    },
    formattedTime() {
      return this.currentTime;
    },
  },
  mounted() {
    this.getCurrentDateTime();
    setInterval(this.getCurrentDateTime, 1000);
  },
  methods: {
    getCurrentDateTime() {
      const now = new Date();
      this.currentDate = now;
      this.currentTime = now.toLocaleTimeString();
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  align-items: center;
}
.mr-4 {
  margin-right: 1rem;
}
</style>
