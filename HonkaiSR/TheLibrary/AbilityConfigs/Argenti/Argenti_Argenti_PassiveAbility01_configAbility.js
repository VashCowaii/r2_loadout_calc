const configAbility = {
  "fileName": "Argenti_Argenti_PassiveAbility01",
  "childAbilityList": [
    "Argenti_Argenti_PassiveAbility01"
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
      "name": "Define Custom Variable",
      "variableName": "MDF_CritChanceBase",
      "value": {
        "operator": "Variables[0] (0.025) || RETURN",
        "displayLines": "0.025",
        "constants": [],
        "variables": [
          0.025
        ]
      }
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "Base_MaxSP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1628831638\">Argenti_UltraAbilityPrepare</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"886693794\">Argenti_Eidolon2_TargetNumberListen</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_MaxCount",
          "value": {
            "operator": "Variables[0] (10) || Variables[1] (2) || ADD || RETURN",
            "displayLines": "(10 + 2)",
            "constants": [],
            "variables": [
              10,
              2
            ]
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "Event": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"68075206\">Argenti_Passive_Charge</a>[<span class=\"descriptionNumberColor\">Apotheosis</span>]",
              "stackLimit": {
                "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                "displayLines": "MDF_MaxCount",
                "constants": [],
                "variables": [
                  "MDF_MaxCount"
                ]
              }
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_MaxCount",
          "value": {
            "operator": "Variables[0] (10) || RETURN",
            "displayLines": "10",
            "constants": [],
            "variables": [
              10
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Piety"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"53398910\">Argenti_PointB1_AutoBonusLayerModifier</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Generosity"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-143251630\">Argenti_PointB2_SummonSpModifier</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Courage"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1414453443\">Argenti_PointB3_DamageUpModifier</a>"
        }
      ]
    }
  ],
  "references": []
}