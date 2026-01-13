const configAbility = {
  "fileName": "Argenti_Argenti_Ability31_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Argenti_Eidolon6_DefPentModifier"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": "All Hostile Entities (AOE)",
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "Update Energy",
          "on": "Caster",
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "isFixed": "* ERR"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_Layer",
            "compareType": "<",
            "value2": {
              "operator": "Variables[0] (MDF_MaxCount) || RETURN",
              "displayLines": "MDF_MaxCount",
              "constants": [],
              "variables": [
                "MDF_MaxCount"
              ]
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Argenti_Passive_Charge[<span class=\"descriptionNumberColor\">Apotheosis</span>]",
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
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": "All Hostile Entities (AOE)",
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (2.8) || RETURN",
          "displayLines": "2.8",
          "constants": [],
          "variables": [
            2.8
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Ultimate",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (6) || Constants[0] (1) || SUB || RETURN",
        "displayLines": "(6 - 1)",
        "constants": [
          1
        ],
        "variables": [
          6
        ]
      },
      "Event": [
        {
          "name": "Find New Target",
          "from": "All Hostile Entities (AOE)",
          "searchRandom": true,
          "includeDyingTargets": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": "Use Prior Target(s) Defined",
                "modifier": "Argenti_Bonus_Modifier01",
                "invertCondition": true
              },
              {
                "name": "Compare: Variable",
                "target": "Use Prior Target(s) Defined",
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": "Use Prior Target(s) Defined",
              "modifier": "Argenti_Bonus_Modifier01"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": "All Hostile Entities (AOE)",
              "searchRandom": true,
              "includeDyingTargets": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": "Use Prior Target(s) Defined",
                "modifier": "Argenti_Bonus_Modifier01",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Argenti_Bonus_Modifier01"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (6) || RETURN",
        "displayLines": "6",
        "constants": [],
        "variables": [
          6
        ]
      },
      "Event": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Bounce_SelectTarget",
          "target": "All Hostile Entities (AOE)",
          "paramSequence": []
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": "All Hostile Entities (AOE)",
      "modifier": "Argenti_Bonus_Modifier01"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "EnhancedUltra",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Argenti_Eidolon6_DefPentModifier"
        }
      ]
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": []
}