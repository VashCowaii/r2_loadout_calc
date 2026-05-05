const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4033031,
  "trimCharacterName": 4033031,
  "abilityList": [
    "4033031_Monster_W4_Griffin_01_LocalLegend_PassiveAbilityInitiate",
    "4033031_Monster_W4_Griffin_01_LocalLegend_Ability01_Part02",
    "4033031_Monster_W4_Griffin_01_LocalLegend_Ability01_Part01"
  ],
  "abilityObject": {
    "4033031_Monster_W4_Griffin_01_LocalLegend_PassiveAbilityInitiate": {
      "fileName": "4033031_Monster_W4_Griffin_01_LocalLegend_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkillInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4033031_Monster_W4_Griffin_01_LocalLegend_Ability01_Part02": {
      "fileName": "4033031_Monster_W4_Griffin_01_LocalLegend_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}.[[removeMemosprite]]"
          },
          "variableName": "PosCount",
          "livingTargets": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 4
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 3
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 2
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 1
          }
        },
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 4
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
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
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
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
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
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
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 4}}.[[addMemosprite]].[[removeUnselectable]]"
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
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
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
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
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
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
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
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
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
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
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
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
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
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "4033031_Monster_W4_Griffin_01_LocalLegend_Ability01_Part01": {
      "fileName": "4033031_Monster_W4_Griffin_01_LocalLegend_Ability01_Part01",
      "childAbilityList": [
        "4033031_Monster_W4_Griffin_01_Ability01_Camera",
        "4033031_Monster_W4_Griffin_01_LocalLegend_Ability01_Part01",
        "4033031_Monster_W4_Griffin_01_LocalLegend_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Player Team All(Left to Right)}}"
          },
          "ability": "Monster_W4_Griffin_01_LocalLegend_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    }
  }
}