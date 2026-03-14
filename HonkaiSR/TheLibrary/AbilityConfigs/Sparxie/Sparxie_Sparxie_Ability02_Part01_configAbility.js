const configAbility = {
  "fileName": "Sparxie_Sparxie_Ability02_Part01",
  "childAbilityList": [
    "Sparxie_Sparxie_Ability02_Camera",
    "Sparxie_Sparxie_Ability02_Part01",
    "Sparxie_Sparxie_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
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
    {
      "name": "Toggle View Mode",
      "enable": false
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count SUM",
        "target": {
          "name": "Target Name",
          "target": "{{Hostile Entities(AOE, with Unselectables)}}"
        },
        "conditions": {
          "name": "Enemy ID",
          "ID": 100501,
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "characterName": null,
          "isCompareUniqueID": true
        }
      }
    },
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Sparxie_Ability02_Part02",
      "isTrigger": true
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"767923714\">Sparxie_Ability02_Effect</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_PKLineProgress",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_PKLineProgress",
      "value": 0.3
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": "STAT_ElationEchoPoint"
      }
    }
  ],
  "references": []
}