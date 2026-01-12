const configAbility = {
  "fileName": "Hook_Hook_PassiveAbility01_2",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Update Energy",
      "on": "Caster",
      "value": {
        "operator": "Variables[0] (5) || RETURN",
        "displayLines": "5",
        "constants": [],
        "variables": [
          5
        ]
      },
      "isFixed": "* ERR"
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Additional DMG"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Blast (Adjacent)",
          "modifier": "Standard_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
          "duration": {
            "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
            "displayLines": "(2 + 1)",
            "constants": [],
            "variables": [
              2,
              1
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "valuePerStack": {
            "Modifier_Burn_DamagePercentage": {
              "operator": "Variables[0] (0.65) || RETURN",
              "displayLines": "0.65",
              "constants": [],
              "variables": [
                0.65
              ]
            }
          },
          "stackFlag": "CharacterSkill"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Innocence"
      },
      "passed": [
        {
          "name": "Heal",
          "target": "Caster",
          "healPercent": {
            "operator": "Variables[0] (0.05) || RETURN",
            "displayLines": "0.05",
            "constants": [],
            "variables": [
              0.05
            ]
          },
          "formula": "Heal from Healer's MaxHP"
        }
      ]
    }
  ],
  "references": []
}