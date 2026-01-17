const configAbility = {
  "fileName": "Jingliu_Advanced_Jingliu_PassiveAbility01",
  "childAbilityList": [
    "Jingliu_Advanced_Jingliu_PassiveAbility01",
    "Jingliu_Jingliu_Passive_Camera",
    "Jingliu_Advanced_Jingliu_PassiveAtkReady_Part01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Advanced_Jingliu_LoseHPPreShow"
    },
    {
      "name": "Read Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "Jingliu_MoonFlag",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Read Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "Jingliu_FullMoonFlag",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Jingliu_FullMoonFlagMax",
          "value": {
            "operator": "Variables[0] (Jingliu_FullMoonFlagMax) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Jingliu_FullMoonFlagMax + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Jingliu_FullMoonFlagMax"
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Jingliu_FullMoonFlagMax",
          "value": {
            "operator": "Variables[0] (Jingliu_FullMoonFlagMax) || RETURN",
            "displayLines": "Jingliu_FullMoonFlagMax",
            "constants": [],
            "variables": [
              "Jingliu_FullMoonFlagMax"
            ]
          }
        }
      ]
    },
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Overwrite Value",
      "variableName": "Jingliu_MoonFlag",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Jingliu_MoonFlagMax",
      "value": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (Jingliu_MoonFlag) || RETURN",
        "displayLines": "Jingliu_MoonFlag",
        "constants": [],
        "variables": [
          "Jingliu_MoonFlag"
        ]
      },
      "maximum": {
        "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
        "displayLines": "Jingliu_MoonFlagMax",
        "constants": [],
        "variables": [
          "Jingliu_MoonFlagMax"
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Advanced_Jingliu_Passive"
    }
  ],
  "references": []
}