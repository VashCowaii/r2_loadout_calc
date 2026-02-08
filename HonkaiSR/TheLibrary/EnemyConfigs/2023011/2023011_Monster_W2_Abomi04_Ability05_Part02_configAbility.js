const configAbility = {
  "fileName": "2023011_Monster_W2_Abomi04_Ability05_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"125847833\">Monster_W2_Abomi04_Command</a>"
    },
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-488885736\">Monster_W2_Abomi04_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 3
          },
          {
            "name": "Compare: Target Count SUM",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
            }
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
          "modifier": "<a class=\"gModGreen\" id=\"-98608309\">Enemy_W2_Abomi04_HitToHeal_Effect</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{All Team Members(Exclude Self)}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": "<=",
        "value2": 3
      },
      "passed": [
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
            "displayLines": "{[Skill05[0]]}",
            "constants": [],
            "variables": [
              "{[Skill05[0]]}"
            ]
          },
          "consumeFloor": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                "displayLines": "{[Skill05[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[1]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "W2_Abomi04_00_SummonID",
                  "summonLocation": "First"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                "displayLines": "{[Skill05[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[1]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "W2_Abomi04_00_SummonID",
                  "summonLocation": "Last"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{All Team Members(Exclude Self)}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": "<=",
        "value2": 3
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Right"
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                "displayLines": "{[Skill05[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[2]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "W2_Abomi04_00_SummonID",
                  "summonLocation": "Last"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                "displayLines": "{[Skill05[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[2]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "W2_Abomi04_00_SummonID",
                  "summonLocation": "First"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{All Team Members(Exclude Self)}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": "<=",
        "value2": 3
      },
      "passed": [
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
            "displayLines": "{[Skill04[0]]}",
            "constants": [],
            "variables": [
              "{[Skill04[0]]}"
            ]
          },
          "consumeFloor": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                "displayLines": "{[Skill05[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[3]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "W2_Abomi04_00_SummonID2",
                  "summonLocation": "First"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                "displayLines": "{[Skill05[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[3]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "W2_Abomi04_00_SummonID2",
                  "summonLocation": "Last"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{All Team Members(Exclude Self)}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": "<=",
        "value2": 3
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Right"
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill05[4]]}) || RETURN",
                "displayLines": "{[Skill05[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[4]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "W2_Abomi04_00_SummonID2",
                  "summonLocation": "Last"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill05[4]]}) || RETURN",
                "displayLines": "{[Skill05[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[4]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "W2_Abomi04_00_SummonID2",
                  "summonLocation": "First"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count SUM",
        "target": {
          "name": "Target Name",
          "target": "{{All Team Members(Exclude Self)}}"
        },
        "conditions": {
          "name": "Has Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-301445203\">Enemy_W2_Abomi04_HitToHeal</a>[<span class=\"descriptionNumberColor\">Draining Hit</span>]"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-453804030\">Enemy_W2_Abomi04_SummonedMinions</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-488885736\">Monster_W2_Abomi04_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
      "duration": 2
    },
    "Trigger: Ability End"
  ],
  "references": []
}