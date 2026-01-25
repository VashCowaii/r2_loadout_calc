const configAbility = {
  "fileName": "Yunli_Yunli_Ability03_Part01",
  "childAbilityList": [
    "Yunli_Yunli_Ability03_Camera",
    "Yunli_Yunli_Ability03_EnterReady",
    "Yunli_Yunli_Ability03_Part01",
    "Yunli_Yunli_Ability03_Part02",
    "Yunli_Yunli_Ability03_Counter_Camera",
    "Yunli_Yunli_Ability03_SuperCounter_Camera",
    "Yunli_Yunli_Ability03_NormalCounter_Camera"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    20,
    0,
    10
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Yunli_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}