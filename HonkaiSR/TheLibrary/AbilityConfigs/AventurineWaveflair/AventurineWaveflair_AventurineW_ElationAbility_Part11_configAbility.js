const configAbility = {
  "fileName": "AventurineWaveflair_AventurineW_ElationAbility_Part11",
  "childAbilityList": [
    "AventurineWaveflair_AventurineW_ElationAbility_Part11",
    "AventurineWaveflair_AventurineW_ElationAbility_Part12",
    "AventurineWaveflair_AventurineW_Ability41_Camera"
  ],
  "skillTrigger": "Skill41",
  "abilityType": "Elation",
  "energy": 5,
  "toughnessList": [
    5,
    20,
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
      "ability": "AventurineW_ElationAbility_Part12",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}