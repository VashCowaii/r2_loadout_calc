const configAbility = {
  "fileName": "Huohuov0_Huohuo_Ability03_Part01",
  "childAbilityList": [
    "Huohuov0_Huohuo_Ability03_Camera",
    "Huohuov0_Huohuo_Ability03_EnterReady",
    "Huohuov0_Huohuo_Ability03_Part01",
    "Huohuov0_Huohuo_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
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
      "ability": "Huohuo_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{All Team Members}}"
  }
}