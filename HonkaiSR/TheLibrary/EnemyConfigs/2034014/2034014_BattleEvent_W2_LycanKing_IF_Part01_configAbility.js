const configAbility = {
  "fileName": "2034014_BattleEvent_W2_LycanKing_IF_Part01",
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
          "target": "{{Ability Target(ST)}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"848754639\">Enemy_W2_LycanKing_IF_ChampionMark</a>[<span class=\"descriptionNumberColor\">Blood Surge</span>]"
      },
      "passed": [
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "popUpText": "\"Blood Surge\" in effect",
          "living": true
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "compareType": "=",
        "value2": 4
      }
    },
    {
      "name": "Skill Points Modification",
      "adjustmentValue": {
        "operator": "Variables[0] (Ability03_BPRecover) || RETURN",
        "displayLines": "Ability03_BPRecover",
        "constants": [],
        "variables": [
          "Ability03_BPRecover"
        ]
      },
      "adjustmentType": "+"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"833181750\">Enemy_W2_LycanKing_IF_MuteUltra</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value": "ENEMIES_OBJECT_UNUSED__169"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1565088528\">Enemy_W2_LycanKing_IF_PickUpMarkLycanKing</a>[<span class=\"descriptionNumberColor\">Going Solo</span>]",
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Join Targets",
            "TargetList": [
              {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[addBattleEvents]]"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "AND",
                      "conditionList": [
                        {
                          "name": "Compare: Target",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "target2": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "invertCondition": true
                        },
                        {
                          "name": "Is Related Summoned Entity",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "target2": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "invertCondition": true
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Compare: Monster Rank",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "compareType": "<",
                      "value2": 4
                    }
                  }
                ]
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"-480380135\">Enemy_W2_LycanKing_IF_DisableAction</a>[<span class=\"descriptionNumberColor\">Departed</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity Type",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "type": "Memosprite"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}.[[getSummoner]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"659682696\">Enemy_W2_LycanKing_IF_PickUpMark</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}.[[getSummoner]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"84881984\">Enemy_W2_LycanKing_IF_ChampionHPEnhance</a>[<span class=\"descriptionNumberColor\">Last Stand</span>]"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}.[[getSummoner]]"
              },
              "ability": "Monster_W2_LycanKing_IF_Ability01_Part01",
              "isTrigger": true
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"659682696\">Enemy_W2_LycanKing_IF_PickUpMark</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"84881984\">Enemy_W2_LycanKing_IF_ChampionHPEnhance</a>[<span class=\"descriptionNumberColor\">Last Stand</span>]"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "ability": "Monster_W2_LycanKing_IF_Ability01_Part01",
              "isTrigger": true
            }
          ]
        }
      ]
    },
    "Wait for Pending Ability Completions",
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}