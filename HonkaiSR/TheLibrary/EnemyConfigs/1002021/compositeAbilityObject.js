const compositeAbilityObject = {
  "fullCharacterName": 1002021,
  "trimCharacterName": 1002021,
  "abilityList": [
    "1002021_Monster_W1_Soldier01_03_Ability02_Part02",
    "1002021_Monster_W1_Soldier01_03_Ability02_Part01",
    "1002021_Monster_W1_Soldier01_03_Ability01_Part02",
    "1002021_Monster_W1_Soldier01_03_Ability01_Part01",
    "1002021_Modifiers"
  ],
  "abilityObject": {
    "1002021_Monster_W1_Soldier01_03_Ability02_Part02": {
      "fileName": "1002021_Monster_W1_Soldier01_03_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1281886828\">Monster_W1_Soldier01_03_Bonus</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
            "displayLines": "{[Skill02[2]]}",
            "constants": [],
            "variables": [
              "{[Skill02[2]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_AttackAddedRatio": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Modifier_SpeedDelta": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 100202104,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          },
          "failed": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "set": 0
            },
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "popUpText": "Action Advanced"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1002021_Monster_W1_Soldier01_03_Ability02_Part01": {
      "fileName": "1002021_Monster_W1_Soldier01_03_Ability02_Part01",
      "childAbilityList": [
        "1002021_Monster_W1_Soldier01_03_Ability02_Camera",
        "1002021_Monster_W1_Soldier01_03_Ability02_Part01",
        "1002021_Monster_W1_Soldier01_03_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_Soldier01_03_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1002021_Monster_W1_Soldier01_03_Ability01_Part02": {
      "fileName": "1002021_Monster_W1_Soldier01_03_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "from": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "to": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "Distance_Between_Entities",
            "compareType": ">",
            "value2": 7
          },
          "passed": [
            "Ability Start"
          ],
          "failed": [
            "Ability Start"
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1002021_Monster_W1_Soldier01_03_Ability01_Part01": {
      "fileName": "1002021_Monster_W1_Soldier01_03_Ability01_Part01",
      "childAbilityList": [
        "1002021_Monster_W1_Soldier01_03_Ability01_Camera",
        "1002021_Monster_W1_Soldier01_03_Ability01_Part01",
        "1002021_Monster_W1_Soldier01_03_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_Soldier01_03_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "from": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "to": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "Distance_Between_Entities",
            "compareType": ">",
            "value2": 7
          }
        }
      ],
      "references": []
    },
    "1002021_Modifiers": {
      "fileName": "1002021_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1281886828\">Monster_W1_Soldier01_03_Bonus</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (Modifier_AttackAddedRatio) || RETURN",
                    "displayLines": "Modifier_AttackAddedRatio",
                    "constants": [],
                    "variables": [
                      "Modifier_AttackAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] ('Modifier_SpeedDelta) || RETURN",
                    "displayLines": "'Modifier_SpeedDelta",
                    "constants": [],
                    "variables": [
                      "'Modifier_SpeedDelta"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "Modifier_AttackAddedRatio",
            "Modifier_SpeedDelta"
          ],
          "latentQueue": [],
          "description": "ATK +<span class=\"descriptionNumberColor\">Modifier_AttackAddedRatio</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "ATK Boost"
        }
      ],
      "references": []
    }
  }
}