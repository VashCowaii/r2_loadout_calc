const configAbility = {
  "fileName": "Huohuo_Advanced_Huohuo_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "dispelCount": {
        "operator": "Variables[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [],
        "variables": [
          1
        ]
      },
      "dispelOrder": "LastAdded"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-93547702\">Advanced_Huohuo_DealHeal</a>"
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "healPercent": {
        "operator": "Variables[0] (0.24) || RETURN",
        "displayLines": "0.24",
        "constants": [],
        "variables": [
          0.24
        ]
      },
      "healFlat": {
        "operator": "Variables[0] (640) || RETURN",
        "displayLines": "640",
        "constants": [],
        "variables": [
          640
        ]
      },
      "formula": "Heal from Healer's MaxHP"
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "healPercent": {
        "operator": "Variables[0] (0.192) || RETURN",
        "displayLines": "0.192",
        "constants": [],
        "variables": [
          0.192
        ]
      },
      "healFlat": {
        "operator": "Variables[0] (512) || RETURN",
        "displayLines": "512",
        "constants": [],
        "variables": [
          512
        ]
      },
      "formula": "Heal from Healer's MaxHP"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Ability Target List}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "invertCondition": true
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-93547702\">Advanced_Huohuo_DealHeal</a>"
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}