const configAbility = {
  "fileName": "Acheron_Acheron_Ability03_Part01",
  "childAbilityList": [
    "Acheron_Acheron_Ability03_Camera",
    "Acheron_Acheron_Ability03_EnterReady",
    "Acheron_Acheron_Ability03_Part01",
    "Acheron_Acheron_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Update Character Panel Visibility",
      "show": "CasterOnly",
      "forceDisplayUltButton": true
    },
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Acheron_Ability03_Part02",
      "isTrigger": true
    },
    {
      "name": "Automatically use Ultimate",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "enable": false
    }
  ],
  "references": []
}