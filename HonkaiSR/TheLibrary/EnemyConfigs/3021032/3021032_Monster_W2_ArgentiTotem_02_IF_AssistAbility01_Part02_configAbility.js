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
        "modifier": "<a class=\"gModGreen\" id=\"1783897766\">Monster_W2_Argenti_IF_Summon01</a>"
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
            "modifier": "<a class=\"gModGreen\" id=\"-1502513574\">Monster_W2_Argenti_Ability15_IF_Taunt01_MarkModifier</a>"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1008150215\">Standard_CTRL_Taunt_ArgentiTotem_02_IF</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
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
        "modifier": "<a class=\"gModGreen\" id=\"1767120147\">Monster_W2_Argenti_IF_Summon02</a>"
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
            "modifier": "<a class=\"gModGreen\" id=\"-1084859487\">Monster_W2_Argenti_Ability15_IF_Taunt02_MarkModifier</a>"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1008150215\">Standard_CTRL_Taunt_ArgentiTotem_02_IF</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
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
        "modifier": "<a class=\"gModGreen\" id=\"1750342528\">Monster_W2_Argenti_IF_Summon03</a>"
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
            "modifier": "<a class=\"gModGreen\" id=\"-518883080\">Monster_W2_Argenti_Ability15_IF_Taunt03_MarkModifier</a>"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1008150215\">Standard_CTRL_Taunt_ArgentiTotem_02_IF</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
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
        "modifier": "<a class=\"gModGreen\" id=\"1867785861\">Monster_W2_Argenti_IF_Summon04</a>"
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
            "modifier": "<a class=\"gModGreen\" id=\"1407152047\">Monster_W2_Argenti_Ability15_IF_Taunt04_MarkModifier</a>"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1008150215\">Standard_CTRL_Taunt_ArgentiTotem_02_IF</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
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
            "modifier": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1104059334\">Monster_W2_ArgentiTotem_02_IF_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1104059334\">Monster_W2_ArgentiTotem_02_IF_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
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