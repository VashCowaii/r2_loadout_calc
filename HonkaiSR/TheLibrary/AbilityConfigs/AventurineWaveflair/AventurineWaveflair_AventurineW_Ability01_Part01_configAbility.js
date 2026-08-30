const configAbility = {
  "fileName": "AventurineWaveflair_AventurineW_Ability01_Part01",
  "childAbilityList": [
    "AventurineWaveflair_AventurineW_Ability01_Camera",
    "AventurineWaveflair_AventurineW_Ability01_Part01",
    "AventurineWaveflair_AventurineW_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": 20,
  "toughnessList": [
    10,
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
      "ability": "AventurineW_Ability01_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}