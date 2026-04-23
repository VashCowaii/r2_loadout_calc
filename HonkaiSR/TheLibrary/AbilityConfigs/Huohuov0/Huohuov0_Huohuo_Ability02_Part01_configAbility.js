const configAbility = {
  "fileName": "Huohuov0_Huohuo_Ability02_Part01",
  "childAbilityList": [
    "Huohuov0_Huohuo_Ability02_Camera",
    "Huohuov0_Huohuo_Ability02_Part01",
    "Huohuov0_Huohuo_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    0,
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
      "ability": "Huohuo_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Ally Target",
    "subTarget": "Blast Targets"
  }
}