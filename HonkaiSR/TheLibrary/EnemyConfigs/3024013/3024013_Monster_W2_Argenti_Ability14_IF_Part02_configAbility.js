const configAbility = {
  "fileName": "3024013_Monster_W2_Argenti_Ability14_IF_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Sword_FirstFlag",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-169910900\">Enemy_W2_Argenti_IF_EX_PowerAdd</a>"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Sword_FirstFlag",
          "value": 0
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": 4,
      "Event": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              {
                "name": "Sort by Physical Positioning",
                "byHighest": true
              }
            ]
          },
          "includeDyingTargets": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1818644627\">Monster_W2_Argenti_Ability14_IF_MarkModifier</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1818644627\">Monster_W2_Argenti_Ability14_IF_MarkModifier</a>"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "Monster_W2_ArgentiTotem_IF_AssistAbility01_Part01",
              "isTrigger": true
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "variableName": "_TargetNum"
    },
    {
      "name": "Looped Event",
      "maxLoops": 4,
      "Event": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1818644627\">Monster_W2_Argenti_Ability14_IF_MarkModifier</a>"
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (_TargetNum) || RETURN",
            "displayLines": "_TargetNum",
            "constants": [],
            "variables": [
              "_TargetNum"
            ]
          },
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1818644627\">Monster_W2_Argenti_Ability14_IF_MarkModifier</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1818644627\">Monster_W2_Argenti_Ability14_IF_MarkModifier</a>"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill14[0]]}) || Constants[0] (16) || DIV || RETURN",
                      "displayLines": "({[Skill14[0]]} / 16)",
                      "constants": [
                        16
                      ],
                      "variables": [
                        "{[Skill14[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "ToughnessDMGType": {
                      "DamageType": "Physical"
                    },
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "6.25%"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1818644627\">Monster_W2_Argenti_Ability14_IF_MarkModifier</a>"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1818644627\">Monster_W2_Argenti_Ability14_IF_MarkModifier</a>",
      "stackData": [],
      "latentQueue": []
    }
  ]
}