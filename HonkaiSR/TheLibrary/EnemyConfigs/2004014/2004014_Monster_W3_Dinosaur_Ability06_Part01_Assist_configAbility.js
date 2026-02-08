const configAbility = {
  "fileName": "2004014_Monster_W3_Dinosaur_Ability06_Part01_Assist",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"680214868\">Monster_W3_Dinosaur_MonsterAssistBonus</a>"
    },
    {
      "name": "Remove Modifier Behavior Flag(s)",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "flagNames": []
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "scope": "TargetEntity",
      "variableName": "Crazy_Flag",
      "value": 1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1287806639\">MModifier_Monster_W3_Dinosaur_Fury</a>[<span class=\"descriptionNumberColor\">Boil</span>]"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Vibrate_Count",
          "context": "TargetEntity",
          "value": {
            "operator": "Variables[0] (UnusedUnderThisBase_19) || INVERT || RETURN",
            "displayLines": "-UnusedUnderThisBase_19",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_19"
            ]
          },
          "max": {
            "operator": "Variables[0] (UnusedUnderThisBase_20) || RETURN",
            "displayLines": "UnusedUnderThisBase_20",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_20"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"237937646\">MModifier_Monster_W3_Dinosaur_MonsterEnergyBar</a>",
          "valuePerStack": {
            "MDF_MaxCount": {
              "operator": "Variables[0] (UnusedUnderThisBase_20) || RETURN",
              "displayLines": "UnusedUnderThisBase_20",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_20"
              ]
            },
            "MDF_PartFlag": 1
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "variableName": "Vibrate_Count",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"308728299\">MModifier_Monster_W3_Dinosaur_AttackUpRatio</a>[<span class=\"descriptionNumberColor\">Stove Heating</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"237937646\">MModifier_Monster_W3_Dinosaur_MonsterEnergyBar</a>",
          "valuePerStack": {
            "MDF_MaxCount": {
              "operator": "Variables[0] (UnusedUnderThisBase_20) || RETURN",
              "displayLines": "UnusedUnderThisBase_20",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_20"
              ]
            },
            "MDF_PartFlag": 1
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1583693402\">MModifier_Monster_W3_Dinosaur_Calm</a>[<span class=\"descriptionNumberColor\">Simmer</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1287806639\">MModifier_Monster_W3_Dinosaur_Fury</a>[<span class=\"descriptionNumberColor\">Boil</span>]"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": {
            "operator": "Variables[0] (UnusedUnderThisBase_21) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(UnusedUnderThisBase_21 - 1)",
            "constants": [
              1
            ],
            "variables": [
              "UnusedUnderThisBase_21"
            ]
          }
        }
      ]
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "scope": "TargetEntity",
      "variableName": "AIFlag",
      "value": 8
    }
  ],
  "references": []
}