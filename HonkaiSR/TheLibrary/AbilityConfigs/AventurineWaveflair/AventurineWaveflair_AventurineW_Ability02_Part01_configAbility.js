const configAbility = {
  "fileName": "AventurineWaveflair_AventurineW_Ability02_Part01",
  "childAbilityList": [
    "AventurineWaveflair_AventurineW_Ability02_Camera",
    "AventurineWaveflair_AventurineW_Ability02_Camera_Other",
    "AventurineWaveflair_AventurineW_Ability02_Part01",
    "AventurineWaveflair_AventurineW_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    0,
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
      "ability": "AventurineW_Ability02_Part02",
      "isTrigger": true
    }
  ],
  "onAbort": [],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}