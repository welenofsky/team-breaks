<script setup>
import teams from '@/team-templates/nba';
import TeamPicker from "@/components/TeamPicker.vue";
</script>

<template>
  <TeamPicker :teams="teams" break="NBA" />
</template>

<style scoped>

</style>