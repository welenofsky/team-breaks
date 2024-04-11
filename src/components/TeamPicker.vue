<script setup lang="ts">
import {onMounted, ref} from "vue";
import JSConfetti from "js-confetti";

interface Team {
  label: string,
  slug: string,
  logo: string,
}

defineProps<{
  teams: Team[],
}>()

const selectedTeams = ref([]);
const confetti = ref(null);

onMounted(() => {
  confetti.value = new JSConfetti();
});

// Pull selected teams from local storage if they were set
if (localStorage.getItem('selectedTeams')) {
  selectedTeams.value = JSON.parse(localStorage.getItem('selectedTeams'));
}

const toggleTeam = (team) => {
  if (selectedTeams.value.includes(team.slug)) {
    if (confirm(`Are you sure you want to remove ${team.label}?`) === false) {
      return;
    }
    selectedTeams.value = selectedTeams.value.filter((slug) => slug !== team.slug);
  } else {
    selectedTeams.value.push(team.slug);
  }

  if (selectedTeams.value.length === 32) {
    let celebrations = 0;
    let interval = setInterval(() => {
      if (celebrations === 5) {
        clearInterval(interval);
        return;
      }
      confetti.value.addConfetti({
        confettiNumber: 1000,
      });
      celebrations++;
    }, 1000);
  }

  localStorage.setItem('selectedTeams', JSON.stringify(selectedTeams.value));
};

const clearSelection = () => {
  if (confirm('Are you sure you want to clear all selections?') === false) {
    return;
  }
  selectedTeams.value = [];
  localStorage.removeItem('selectedTeams');
};
</script>

<template>
  <div id="team-picker">
    <div class="grid">
      <div @click="() => toggleTeam(team)" v-for="team in teams" class="team" :key="team.slug">
        <img class="logo" :src="team.logo":alt="team.label" draggable="false">
        <img v-if="selectedTeams.includes(team.slug)" class="x" src="./assets/red-x.svg" alt="" draggable="false">
      </div>
    </div>
    <div class="stat-box">
      <h2>Teams Remaining:</h2>
      <p class="remaining">{{ Math.max(0, 32 - selectedTeams.length) }}</p>
    </div>

    <div class="actions">
      <button @click="clearSelection">Reset</button>
    </div>
  </div>
</template>

<style scoped>
#team-picker {
  max-width: 500px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.team {
  position: relative;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.x {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}
.logo {
  position: relative;
  width: 100%;
  height: auto;
}
.stat-box {
  text-align: center;
  margin: 2rem 0;
}
h2 {
  font-size: 2rem;
  line-height: 1;
}
p.remaining {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
}
button {
  display: block;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  background-color: #f00;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>