const configAbility = {
  "fileName": "Huohuo_Huohuo_Ability03_Part01",
  "childAbilityList": [
    "Huohuo_Huohuo_Ability03_Camera",
    "Huohuo_Huohuo_Ability03_EnterReady",
    "Huohuo_Huohuo_Ability03_Part01",
    "Huohuo_Huohuo_Ability03_Part02"
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
  "references": []
}