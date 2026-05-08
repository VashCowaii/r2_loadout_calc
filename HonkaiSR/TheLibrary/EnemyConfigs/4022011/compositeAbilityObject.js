const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4022011,
  "trimCharacterName": 4022011,
  "abilityList": [
    "4022011_Monster_W4_Harpy_LocalLegend_PassiveAbility",
    "4022011_Monster_W4_Harpy_Ability02_Part02",
    "4022011_Monster_W4_Harpy_Ability02_Part01",
    "4022011_Monster_W4_Harpy_Ability01_Part02",
    "4022011_Monster_W4_Harpy_Ability01_Part01",
    "4022011_Modifiers"
  ],
  "abilityObject": {
    "4022011_Monster_W4_Harpy_LocalLegend_PassiveAbility": {
      "fileName": "4022011_Monster_W4_Harpy_LocalLegend_PassiveAbility",
      "skillTrigger": "PassiveSkill02",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"871785754\">Monster_W4_Harpy_Status</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Stage ID",
            "ID": 426007,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_GlobalDelay",
              "value": {
                "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                "displayLines": "{[Skill02[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[0]]}"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_GlobalDelay",
              "value": {
                "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                "displayLines": "{[Skill02[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[1]]}"
                ]
              }
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__871785754\">Monster_W4_Harpy_Status</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "Team_Row_Count",
                    "compareType": "=",
                    "value2": 1,
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Assign Target Battle-Location",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "row": 1
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "4022011_Monster_W4_Harpy_Ability02_Part02": {
      "fileName": "4022011_Monster_W4_Harpy_Ability02_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"35393434\">Standard_FastAction</a>[<span class=\"descriptionNumberColor\">Stormride</span>]"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4022011_Monster_W4_Harpy_Ability02_Part01": {
      "fileName": "4022011_Monster_W4_Harpy_Ability02_Part01",
      "childAbilityList": [
        "4022011_Monster_W4_Harpy_Ability02_Part01",
        "4022011_Monster_W4_Harpy_Ability02_Part02",
        "4022011_Monster_W4_Harpy_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Harpy_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Ally Target"
      },
      "references": []
    },
    "4022011_Monster_W4_Harpy_Ability01_Part02": {
      "fileName": "4022011_Monster_W4_Harpy_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
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
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4022011_Monster_W4_Harpy_Ability01_Part01": {
      "fileName": "4022011_Monster_W4_Harpy_Ability01_Part01",
      "childAbilityList": [
        "4022011_Monster_W4_Harpy_Ability01_Part01",
        "4022011_Monster_W4_Harpy_Ability01_Part02",
        "4022011_Monster_W4_Harpy_Ability01_Camera"
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
          "ability": "Monster_W4_Harpy_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "4022011_Modifiers": {
      "fileName": "4022011_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1157837417\">Monster_W4_Harpy_Ability02_Mark</a>"
        }
      ],
      "references": []
    }
  }
}