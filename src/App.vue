<script setup>
import { ref } from 'vue';

import cardinals from './assets/nfl-logos/cardinals.gif';
import falcons from './assets/nfl-logos/falcons.gif';
import ravens from './assets/nfl-logos/ravens.gif';
import bills from './assets/nfl-logos/bills.gif';
import panthers from './assets/nfl-logos/panthers.gif';
import bears from './assets/nfl-logos/bears.gif';
import bengals from './assets/nfl-logos/bengals.gif';
import browns from './assets/nfl-logos/browns.gif';
import cowboys from './assets/nfl-logos/cowboys.gif';
import broncos from './assets/nfl-logos/broncos.gif';
import lions from './assets/nfl-logos/lions.gif';
import packers from './assets/nfl-logos/packers.gif';
import texans from './assets/nfl-logos/texans.gif';
import colts from './assets/nfl-logos/colts.gif';
import jaguars from './assets/nfl-logos/jaguars.gif';
import chiefs from './assets/nfl-logos/chiefs.gif';
import rams from './assets/nfl-logos/rams.gif';
import chargers from './assets/nfl-logos/chargers.gif';
import dolphins from './assets/nfl-logos/dolphins.gif';
import vikings from './assets/nfl-logos/vikings.gif';
import patriots from './assets/nfl-logos/patriots.gif';
import saints from './assets/nfl-logos/saints.gif';
import giants from './assets/nfl-logos/giants.gif';
import jets from './assets/nfl-logos/jets.gif';
import raiders from './assets/nfl-logos/raiders.gif';
import eagles from './assets/nfl-logos/eagles.gif';
import steelers from './assets/nfl-logos/steelers.gif';
import fourtyNiners from './assets/nfl-logos/49ers.gif';
import seahawks from './assets/nfl-logos/seahawks.gif';
import buccaneers from './assets/nfl-logos/buccaneers.gif';
import titans from './assets/nfl-logos/titans.gif';
import commanders from './assets/nfl-logos/commanders.gif';


const nflTeams = [
  {
    'label': 'Arizona Cardinals',
    'logo': cardinals,
    'slug': 'arizona-cardinals'
  },
  {
    'label': 'Atlanta Falcons',
    'logo': falcons,
    'slug': 'atlanta-falcons'
  },
  {
    'label': 'Baltimore Ravens',
    'logo': ravens,
    'slug': 'baltimore-ravens'
  },
  {
    'label': 'Buffalo Bills',
    'logo': bills,
    'slug': 'buffalo-bills'
  },
  {
    'label': 'Carolina Panthers',
    'logo': panthers,
    'slug': 'carolina-panthers'
  },
  {
    'label': 'Chicago Bears',
    'logo': bears,
    'slug': 'chicago-bears'
  },
  {
    'label': 'Cincinnati Bengals',
    'logo': bengals,
    'slug': 'cincinnati-bengals'
  },
  {
    'label': 'Cleveland Browns',
    'logo': browns,
    'slug': 'cleveland-browns'
  },
  {
    'label': 'Dallas Cowboys',
    'logo': cowboys,
    'slug': 'dallas-cowboys'
  },
  {
    'label': 'Denver Broncos',
    'logo': broncos,
    'slug': 'denver-broncos'
  },
  {
    'label': 'Detroit Lions',
    'logo': lions,
    'slug': 'detroit-lions'
  },
  {
    'label': 'Green Bay Packers',
    'logo': packers,
    'slug': 'green-bay-packers'
  },
  {
    'label': 'Houston Texans',
    'logo': texans,
    'slug': 'houston-texans'
  },
  {
    'label': 'Indianapolis Colts',
    'logo': colts,
    'slug': 'indianapolis-colts'
  },
  {
    'label': 'Jacksonville Jaguars',
    'logo': jaguars,
    'slug': 'jacksonville-jaguars'
  },
  {
    'label': 'Kansas City Chiefs',
    'logo': chiefs,
    'slug': 'kansas-city-chiefs'
  },
  {
    'label': 'Los Angeles Rams',
    'logo': rams,
    'slug': 'los-angeles-rams'
  },
  {
    'label': 'Los Angeles Chargers',
    'logo': chargers,
    'slug': 'los-angeles-chargers'
  },
  {
    'label': 'Miami Dolphins',
    'logo': dolphins,
    'slug': 'miami-dolphins'
  },
  {
    'label': 'Minnesota Vikings',
    'logo': vikings,
    'slug': 'minnesota-vikings'
  },
  {
    'label': 'New England Patriots',
    'logo': patriots,
    'slug': 'new-england-patriots'
  },
  {
    'label': 'New Orleans Saints',
    'logo': saints,
    'slug': 'new-orleans-saints'
  },
  {
    'label': 'New York Giants',
    'logo': giants,
    'slug': 'new-york-giants'
  },
  {
    'label': 'New York Jets',
    'logo': jets,
    'slug': 'new-york-jets'
  },
  {
    'label': 'Las Vegas Raiders',
    'logo': raiders,
    'slug': 'las-vegas-raiders'
  },
  {
    'label': 'Philadelphia Eagles',
    'logo': eagles,
    'slug': 'philadelphia-eagles'
  },
  {
    'label': 'Pittsburgh Steelers',
    'logo': steelers,
    'slug': 'pittsburgh-steelers'
  },
  {
    'label': 'San Francisco 49ers',
    'logo': fourtyNiners,
    'slug': 'san-francisco-49ers'
  },
  {
    'label': 'Seattle Seahawks',
    'logo': seahawks,
    'slug': 'seattle-seahawks'
  },
  {
    'label': 'Tampa Bay Buccaneers',
    'logo': buccaneers,
    'slug': 'tampa-bay-buccaneers'
  },
  {
    'label': 'Tennessee Titans',
    'logo': titans,
    'slug': 'tennessee-titans'
  },
  {
    'label': 'Washington Commanders',
    'logo': commanders,
    'slug': 'washington-commanders'
  }
];
const selectedTeams = ref([]);

// Pull selected teams from local storage if they were set
if (localStorage.getItem('selectedTeams')) {
  selectedTeams.value = JSON.parse(localStorage.getItem('selectedTeams'));
}

const toggleTeam = (team) => {
  if (selectedTeams.value.includes(team.slug)) {
    // Confirm Removals
    if (confirm(`Are you sure you want to remove ${team.label}?`) === false) {
      return;
    }
    selectedTeams.value = selectedTeams.value.filter((slug) => slug !== team.slug);
  } else {
    selectedTeams.value.push(team.slug);
  }

  // Save to local storage
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
      <div @click="() => toggleTeam(team)" v-for="team in nflTeams" class="nfl-team" :key="team.slug">
        <img class="logo" :src="team.logo" alt="">
        <img v-if="selectedTeams.includes(team.slug)" class="x" src="./assets/red-x.svg" alt="">
      </div>
    </div>
    <div class="stat-box">
      <h2>Teams Remaining:</h2>
      <p class="remaining">{{ 32 - selectedTeams.length }}</p>
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
  /** 8x4 grid */
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  .nfl-team {
    position: relative;
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
  p.remaining {
    font-size: 2rem;
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
