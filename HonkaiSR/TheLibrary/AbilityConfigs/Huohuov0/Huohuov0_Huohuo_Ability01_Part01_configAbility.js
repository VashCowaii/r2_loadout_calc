const configAbility = {
  "fileName": "Huohuov0_Huohuo_Ability01_Part01",
  "childAbilityList": [
    "Huohuov0_Huohuo_Ability01_Camera",
    "Huohuov0_Huohuo_Ability01_Part01",
    "Huohuov0_Huohuo_Ability01_Part02"
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
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Huohuo_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}