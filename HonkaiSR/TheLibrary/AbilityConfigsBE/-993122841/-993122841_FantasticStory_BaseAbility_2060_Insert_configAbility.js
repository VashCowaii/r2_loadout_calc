const configAbility = {
  "fileName": "-993122841_FantasticStory_BaseAbility_2060_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Battle Event List}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Battle Event ID",
        "ID": 30500,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        }
      },
      "noTargetFound": [
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "eventID": 30500,
          "variables": {
            "DV_BE_BaseSpeed": {
              "operator": "Variables[0] (DV_FeverBESpeed) || RETURN",
              "displayLines": "DV_FeverBESpeed",
              "constants": [],
              "variables": [
                "DV_FeverBESpeed"
              ]
            }
          },
          "whenCreated": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1327218064\">Modifier_FantasticStory_BaseAbility_2060_ListenBEDelay</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "DV_FantasticStory_BaseAbility_TriggerFlag",
      "value": 0
    },
    "Deleted bullshit",
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_BirdAttackCount) || RETURN",
        "displayLines": "DV_FantasticStory_BaseAbility_BirdAttackCount",
        "constants": [],
        "variables": [
          "DV_FantasticStory_BaseAbility_BirdAttackCount"
        ]
      },
      "Event": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (DV_BirdAtkDmgRatio) || MUL || RETURN",
                  "displayLines": "(BattleEvent_BaseHP * DV_BirdAtkDmgRatio)",
                  "constants": [],
                  "variables": [
                    "BattleEvent_BaseHP",
                    "DV_BirdAtkDmgRatio"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "True DMG"
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_2063",
            "compareType": "=",
            "value2": 1
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1478773776\">Modifier_FantasticStory_BaseAbility_2060_aura</a>",
            "invertCondition": true
          }
        ]
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Ability Value",
            "target": {
              "name": "Target Name",
              "target": "{{Far Left Player Entity(no Memosprite)}}"
            },
            "value1": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Far Left Player Entity(no Memosprite)}}"
              },
              "variableName": "_CurrentSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Far Left Player Entity(no Memosprite)}}"
              },
              "variableName": "_MaxSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Far Left Player Entity(no Memosprite)}}"
              },
              "value": {
                "operator": "Variables[0] (_MaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                "displayLines": "(_MaxSP - _CurrentSP)",
                "constants": [],
                "variables": [
                  "_MaxSP",
                  "_CurrentSP"
                ]
              },
              "isFixed": "(Fixed)",
              "ignoreBlock": true,
              "isSpecialEnergy": true
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Far Left Player Entity(no Memosprite)}}"
              },
              "variableName": "_CurrentSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Far Left Player Entity(no Memosprite)}}"
              },
              "variableName": "_MaxSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Far Left Player Entity(no Memosprite)}}"
              },
              "value": {
                "operator": "Variables[0] (_MaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                "displayLines": "(_MaxSP - _CurrentSP)",
                "constants": [],
                "variables": [
                  "_MaxSP",
                  "_CurrentSP"
                ]
              },
              "isFixed": "(Fixed)"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1478773776\">Modifier_FantasticStory_BaseAbility_2060_aura</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "DV_FantasticStory_BaseAbility_CountSum",
      "value": {
        "operator": "Constants[0] (0) || RETURN",
        "displayLines": "0",
        "constants": [
          0
        ],
        "variables": []
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "DV_FantasticStory_BaseAbility_BirdAttackCount",
      "value": {
        "operator": "Constants[0] (0) || RETURN",
        "displayLines": "0",
        "constants": [
          0
        ],
        "variables": []
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1883595095\">Modifier_FantasticStory_BaseAbility_2060_BeforeFever_BirdAtkCount</a>[<span class=\"descriptionNumberColor\">\"Resound\"</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_2062",
            "compareType": "=",
            "value2": 1
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1478773776\">Modifier_FantasticStory_BaseAbility_2060_aura</a>"
          }
        ]
      },
      "passed": [
        {
          "name": "Skill Points Modification",
          "adjustmentValue": 1,
          "adjustmentType": "+"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_2064",
            "compareType": "=",
            "value2": 1
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"906922784\">Modifier_FantasticStory_BaseAbility_2060_plus4_sub</a>[<span class=\"descriptionNumberColor\">Divine Score</span>]",
          "duration": {
            "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2064_ADF_2) || RETURN",
            "displayLines": "DV_FantasticStory_PlusAbility_2064_ADF_2",
            "constants": [],
            "variables": [
              "DV_FantasticStory_PlusAbility_2064_ADF_2"
            ]
          }
        }
      ]
    }
  ],
  "references": []
}