const configAbility = {
  "fileName": "4023021_Monster_W4_Unicorn_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "searchRandom": true,
      "maxTargets": 2,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-777597987\">Enemy_W4_Unicorn_Ability03_Mark</a>"
        }
      ]
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Moonlit Pegasus: Skill03 Target}}"
      },
      "variableName": "_TargetCount",
      "livingTargets": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_TargetCount",
        "compareType": "<",
        "value2": 2
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": {
            "operator": "Constants[0] (2) || Variables[0] (_TargetCount) || SUB || RETURN",
            "displayLines": "(2 - _TargetCount)",
            "constants": [
              2
            ],
            "variables": [
              "_TargetCount"
            ]
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-777597987\">Enemy_W4_Unicorn_Ability03_Mark</a>",
            "invertCondition": true,
            "casterFilter": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-777597987\">Enemy_W4_Unicorn_Ability03_Mark</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1995047428\">Enemy_W4_Unicorn_UltraReady</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1402132221\">Enemy_W4_Unicorn_UltraReady_02</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Moonlit Pegasus: Skill03 Target}}"
          },
          {
            "name": "Sort by Physical Positioning"
          }
        ]
      },
      "maxTargets": 1,
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-820453556\">Enemy_W4_Unicorn_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Moonlit Pegasus: Skill03 Target}}"
        },
        "compareType": ">",
        "value2": 1,
        "livingTargets": true
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Moonlit Pegasus: Skill03 Target}}"
              },
              {
                "name": "Sort by Physical Positioning",
                "byHighest": true
              }
            ]
          },
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2111319206\">Enemy_W4_Unicorn_SignOnAvatar2</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}