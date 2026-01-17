const configAbility = {
  "fileName": "Xueyi_Xueyi_Ability03_Part01",
  "childAbilityList": [
    "Xueyi_Xueyi_Ability03_Camera",
    "Xueyi_Xueyi_Ability03_Part01",
    "Xueyi_Xueyi_Ability03_Part02",
    "Xueyi_Xueyi_Ability03_EnterReady"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    40,
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
      "ability": "Xueyi_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}