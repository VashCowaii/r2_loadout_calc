const configAbility = {
  "fileName": "70001_BattleEventAbility_Elation_Ability41_Part1",
  "childAbilityList": [
    "70001_BattleEventAbility_Elation_Ability41_Part1",
    "70001_BattleEventAbility_Elation_Ability41_Camera",
    "70001_BattleEventAbility_Elation_Ability41_Part2"
  ],
  "skillTrigger": "Skill41",
  "abilityType": "Elation",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "BattleEventAbility_Elation_Ability41_Part2",
      "isTrigger": true
    }
  ],
  "references": []
}