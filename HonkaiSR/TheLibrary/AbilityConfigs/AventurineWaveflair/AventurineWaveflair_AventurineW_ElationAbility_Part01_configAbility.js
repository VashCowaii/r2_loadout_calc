const configAbility = {
  "fileName": "AventurineWaveflair_AventurineW_ElationAbility_Part01",
  "childAbilityList": [
    "AventurineWaveflair_AventurineW_ElationAbility_Part01",
    "AventurineWaveflair_AventurineW_ElationAbility_Part02",
    "AventurineWaveflair_AventurineW_Ability04_Camera"
  ],
  "skillTrigger": "Skill04",
  "tag": "InfiniteRefresh",
  "abilityType": "Elation",
  "energy": 5,
  "toughnessList": [
    3.3333333333333335,
    10,
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
      "ability": "AventurineW_ElationAbility_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}