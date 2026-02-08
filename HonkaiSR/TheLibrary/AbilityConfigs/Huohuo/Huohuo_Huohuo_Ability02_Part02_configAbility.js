const configAbility = {
  "fileName": "Huohuo_Huohuo_Ability02_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "healPercent": {
        "operator": "Variables[0] (0.21) || RETURN",
        "displayLines": "0.21",
        "constants": [],
        "variables": [
          0.21
        ]
      },
      "healFlat": {
        "operator": "Variables[0] (560) || RETURN",
        "displayLines": "560",
        "constants": [],
        "variables": [
          560
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
        "operator": "Variables[0] (0.168) || RETURN",
        "displayLines": "0.168",
        "constants": [],
        "variables": [
          0.168
        ]
      },
      "healFlat": {
        "operator": "Variables[0] (448) || RETURN",
        "displayLines": "448",
        "constants": [],
        "variables": [
          448
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
      "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
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
  "references": []
}