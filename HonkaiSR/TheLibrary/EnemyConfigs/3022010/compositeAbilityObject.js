const compositeAbilityObject = {
  "fullCharacterName": 3022010,
  "trimCharacterName": 3022010,
  "abilityList": [
    "3022010_Monster_W3_SundayPart_Ability01_Assist_Part02_02",
    "3022010_Monster_W3_SundayPart_Ability01_Assist_Part02_01",
    "3022010_Monster_W3_SundayPart_AbilityP01",
    "3022010_Monster_W3_SundayPart_Ability06_Part01",
    "3022010_Monster_W3_SundayPart_Ability04_Part01",
    "3022010_Monster_W3_SundayPart_Ability01_Part02",
    "3022010_Monster_W3_SundayPart_Ability01_Part01",
    "3022010_Modifiers"
  ],
  "abilityObject": {
    "3022010_Monster_W3_SundayPart_Ability01_Assist_Part02_02": {
      "fileName": "3022010_Monster_W3_SundayPart_Ability01_Assist_Part02_02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "HitSplit": 0.5,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "3022010_Monster_W3_SundayPart_Ability01_Assist_Part02_01": {
      "fileName": "3022010_Monster_W3_SundayPart_Ability01_Assist_Part02_01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "HitSplit": 0.5,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "3022010_Monster_W3_SundayPart_AbilityP01": {
      "fileName": "3022010_Monster_W3_SundayPart_AbilityP01",
      "childAbilityList": [
        "3022010_Monster_W3_SundayPart_AbilityP01"
      ],
      "skillTrigger": "SkillP01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1257223640\">Monster_W3_SundayPart_LittleChorus</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1222159240\">Enemy_W3_SundayPart_Part1Camera</a>"
        }
      ],
      "references": []
    },
    "3022010_Monster_W3_SundayPart_Ability06_Part01": {
      "fileName": "3022010_Monster_W3_SundayPart_Ability06_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Right",
                "invertCondition": true
              }
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left",
                "invertCondition": true
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Medium"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Right"
              }
            ]
          }
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
            "location": "Max"
          }
        }
      ],
      "references": []
    },
    "3022010_Monster_W3_SundayPart_Ability04_Part01": {
      "fileName": "3022010_Monster_W3_SundayPart_Ability04_Part01",
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
            "modifier": "<a class=\"gModGreen\" id=\"259206088\">Enemy_W3_Sunday_Ability042_PartSpecialAnimation</a>"
          }
        }
      ],
      "references": []
    },
    "3022010_Monster_W3_SundayPart_Ability01_Part02": {
      "fileName": "3022010_Monster_W3_SundayPart_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
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
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "popUpText": "Action Delayed"
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Set",
          "multiAdd": "{[Skill01[1]]}"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3022010_Monster_W3_SundayPart_Ability01_Part01": {
      "fileName": "3022010_Monster_W3_SundayPart_Ability01_Part01",
      "childAbilityList": [
        "3022010_Monster_W3_SundayPart_Ability01_Camera",
        "3022010_Monster_W3_SundayPart_Ability01_Part01",
        "3022010_Monster_W3_SundayPart_Ability01_Part02"
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
          "ability": "Monster_W3_SundayPart_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3022010_Modifiers": {
      "fileName": "3022010_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1222159240\">Enemy_W3_SundayPart_Part1Camera</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Mapping Point",
                  "point": "CameraRoot",
                  "mapTo": "HighCameraRoot"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1396454665\">Enemy_W3_SundayPart_EntityFollowController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1257223640\">Monster_W3_SundayPart_LittleChorus</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W3_SundayPart_Ability01_Assist_Part02_01"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W3_SundayPart_Ability01_Assist_Part02_02"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AssistSkill02_DamagePercentage",
                  "value": {
                    "operator": "Variables[0] (MDF_Assist_DamagePercentage) || RETURN",
                    "displayLines": "MDF_Assist_DamagePercentage",
                    "constants": [],
                    "variables": [
                      "MDF_Assist_DamagePercentage"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}