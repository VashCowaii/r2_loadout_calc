const configAbility = {
  "fileName": "Natasha_Natasha_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Soothe"
      },
      "passed": [
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
        }
      ]
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "healPercent": {
        "operator": "Variables[0] (0.105) || RETURN",
        "displayLines": "0.105",
        "constants": [],
        "variables": [
          0.105
        ]
      },
      "healFlat": {
        "operator": "Variables[0] (280) || RETURN",
        "displayLines": "280",
        "constants": [],
        "variables": [
          280
        ]
      },
      "formula": "Heal from Healer's MaxHP"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Recuperation"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "SkillTree_LifeTime",
          "value": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "SkillTree_LifeTime",
          "value": 0
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Natasha_HOT_HPByMaxHP[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
      "duration": {
        "operator": "Variables[0] (2) || Variables[1] (SkillTree_LifeTime) || ADD || RETURN",
        "displayLines": "(2 + SkillTree_LifeTime)",
        "constants": [],
        "variables": [
          2,
          "SkillTree_LifeTime"
        ]
      },
      "valuePerStack": {
        "MDF_ShowValue1": {
          "operator": "Variables[0] (0.072) || RETURN",
          "displayLines": "0.072",
          "constants": [],
          "variables": [
            0.072
          ]
        },
        "MDF_ShowValue2": {
          "operator": "Variables[0] (192) || RETURN",
          "displayLines": "192",
          "constants": [],
          "variables": [
            192
          ]
        }
      }
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
    "Trigger: Ability End"
  ],
  "references": []
}