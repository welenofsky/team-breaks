<script setup>
import teams from '@/team-templates/nfl';
import TeamPicker from "@/components/TeamPicker.vue";
</script>

<template>
  <TeamPicker :teams="teams" break="NFL" />
</template>

<style scoped>

</style>