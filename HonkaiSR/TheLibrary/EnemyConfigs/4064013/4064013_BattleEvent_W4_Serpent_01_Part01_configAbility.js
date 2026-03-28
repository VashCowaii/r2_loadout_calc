const configAbility = {
  "fileName": "4064013_BattleEvent_W4_Serpent_01_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "W4_Serpent_01"
      },
      "revertDefault": true
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1584375052\">Enemy_W4_Serpent_01_Locking</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"986864876\">Enemy_W4_Serpent_01_MuteUltra</a>"
    },
    "Deleted bullshit",
    {
      "name": "Animation Event",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "W4_Serpent_01"
      },
      "state": "Skill06_3",
      "passed": [
        {
          "name": "Animation Task"
        },
        {
          "name": "Animation Task"
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Enemy ID",
                "ID": 4064012,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isBaseCompare": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1733522141\">Enemy_W4_Serpent_01_IF_Charge02_Target</a>",
                  "casterAssign": "TargetSelf"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]",
                  "casterAssign": "TargetSelf"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Add Target by Unique Identifier",
                  "identifier": "W4_Serpent_01"
                },
                "value": "RLBoss"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"968355900\">Monster_W4_Serpent_01_RLBoss_Ability06Choose</a>[<span class=\"descriptionNumberColor\">Hemotort Drench</span>]"
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
                "name": "Enemy ID",
                "ID": 4064012,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isBaseCompare": true
              },
              "ifTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]]"
                  },
                  "includeDyingTargets": true,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1733522141\">Enemy_W4_Serpent_01_IF_Charge02_Target</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Character"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1649628252\">Enemy_W4_Serpent_01_IF_Charge02_Target_Sub</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]]"
                  },
                  "includeDyingTargets": true,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Character"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"839686414\">Enemy_W4_Serpent_01_Charge02_Target_Sub</a>[<span class=\"descriptionNumberColor\">Accomplice</span>]",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
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