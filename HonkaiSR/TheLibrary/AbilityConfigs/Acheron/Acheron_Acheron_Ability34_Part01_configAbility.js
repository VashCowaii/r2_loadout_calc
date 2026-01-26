const configAbility = {
  "fileName": "Acheron_Acheron_Ability34_Part01",
  "childAbilityList": [
    "Acheron_Acheron_Ability34_Camera",
    "Acheron_Acheron_Ability34_Part01",
    "Acheron_Acheron_Ability34_Part02"
  ],
  "skillTrigger": "Skill34",
  "abilityType": "Ultimate",
  "energy": null,
  "toughnessList": [
    0,
    5,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Acheron_Ability34_Part02",
      "isTrigger": true
    },
    {
      "name": "Update Character Panel Visibility"
    },
    {
      "name": "Set Render/Load State",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members with Unselectables}}"
      },
      "showOrLoad": false
    },
    "Deleted bullshit"
  ],
  "references": []
}