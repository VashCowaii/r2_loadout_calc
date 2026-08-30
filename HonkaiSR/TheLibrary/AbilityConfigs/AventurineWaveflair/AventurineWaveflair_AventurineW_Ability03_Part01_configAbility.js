const configAbility = {
  "fileName": "AventurineWaveflair_AventurineW_Ability03_Part01",
  "childAbilityList": [
    "AventurineWaveflair_AventurineW_Ability03_Camera",
    "AventurineWaveflair_AventurineW_Ability03_EnterReady",
    "AventurineWaveflair_AventurineW_Ability03_Part01",
    "AventurineWaveflair_AventurineW_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    0,
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
      "ability": "AventurineW_Ability03_Part02",
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