const configAbility = {
  "fileName": "3021032_Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "Monster_W2_Argenti_IF_Summon01"
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W2_Argenti_Ability15_IF_Taunt01_MarkModifier"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Standard_CTRL_Taunt_ArgentiTotem_02_IF[<span class=\"descriptionNumberColor\">Taunt</span>]",
              "duration": -1
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "Monster_W2_Argenti_IF_Summon02"
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W2_Argenti_Ability15_IF_Taunt02_MarkModifier"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Standard_CTRL_Taunt_ArgentiTotem_02_IF[<span class=\"descriptionNumberColor\">Taunt</span>]",
              "duration": -1
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "Monster_W2_Argenti_IF_Summon03"
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W2_Argenti_Ability15_IF_Taunt03_MarkModifier"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Standard_CTRL_Taunt_ArgentiTotem_02_IF[<span class=\"descriptionNumberColor\">Taunt</span>]",
              "duration": -1
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "Monster_W2_Argenti_IF_Summon04"
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W2_Argenti_Ability15_IF_Taunt04_MarkModifier"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Standard_CTRL_Taunt_ArgentiTotem_02_IF[<span class=\"descriptionNumberColor\">Taunt</span>]",
              "duration": -1
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_MaxHP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Enemy_W2_Argenti_IF_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_ArgentiTotem_02_IF_Shield_Modifier[<span class=\"descriptionNumberColor\">Shield</span>]",
          "duration": -1,
          "valuePerStack": {
            "MDF_ShowValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_9) || Variables[1] (_MaxHP) || MUL || RETURN",
              "displayLines": "(UnusedUnderThisBase_9 * _MaxHP)",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_9",
                "_MaxHP"
              ]
            }
          },
          "casterAssign": "TargetSelf"
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_ArgentiTotem_02_IF_Shield_Modifier[<span class=\"descriptionNumberColor\">Shield</span>]",
          "duration": -1,
          "valuePerStack": {
            "MDF_ShowValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_10) || Variables[1] (_MaxHP) || MUL || RETURN",
              "displayLines": "(UnusedUnderThisBase_10 * _MaxHP)",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_10",
                "_MaxHP"
              ]
            }
          },
          "casterAssign": "TargetSelf"
        }
      ]
    }
  ],
  "references": []
}