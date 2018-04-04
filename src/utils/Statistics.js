export default {

  // BATTLES STATISTICS

  roundsCount (battle) {
    return battle.brackets.first_stage.length +
           battle.brackets.quarter_final.length +
           battle.brackets.semi_final.length +
           battle.brackets.finale.length

  },

  usersCount (battle) {
    var count = 0

    for (let round of battle.stages[0]) {
      if (round.first  != null) count++
      if (round.second != null) count++
      if (round.third  != null) count++
    }

    return count
  }
}
