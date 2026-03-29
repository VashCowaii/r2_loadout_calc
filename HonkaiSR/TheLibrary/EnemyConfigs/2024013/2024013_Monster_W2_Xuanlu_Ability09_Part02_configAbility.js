const configAbility = {
  "fileName": "2024013_Monster_W2_Xuanlu_Ability09_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Back to Life"
    },
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "healPercent": 1,
      "formula": "Heal from Healer's MaxHP"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "HealHPCheck",
      "value": 1
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "HealHPTime",
      "context": "TargetEntity",
      "value": 1,
      "max": 2
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HealHPTime",
        "compareType": ">=",
        "value2": 2,
        "contextScope": "TargetEntity"
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}