const compositeAbilityObject = {
  "fullCharacterName": 2002010,
  "trimCharacterName": 2002010,
  "abilityList": [
    "2002010_Monster_W2_Knight01_PassiveAbility_Insert_Part01",
    "2002010_Monster_W2_Knight01_Ability03_Part02",
    "2002010_Monster_W2_Knight01_Ability03_Part01",
    "2002010_Monster_W2_Knight01_Ability02_Part02",
    "2002010_Monster_W2_Knight01_Ability02_Part01",
    "2002010_Monster_W2_Knight01_Ability01_Part02",
    "2002010_Monster_W2_Knight01_Ability01_Part01",
    "2002010_Monster_W2_Knight01_Passive01",
    "2002010_Modifiers"
  ],
  "abilityObject": {
    "2002010_Monster_W2_Knight01_PassiveAbility_Insert_Part01": {
      "fileName": "2002010_Monster_W2_Knight01_PassiveAbility_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "FollowTrigger"
        }
      ],
      "references": []
    },
    "2002010_Monster_W2_Knight01_Ability03_Part02": {
      "fileName": "2002010_Monster_W2_Knight01_Ability03_Part02",
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
    "2002010_Monster_W2_Knight01_Ability03_Part01": {
      "fileName": "2002010_Monster_W2_Knight01_Ability03_Part01",
      "childAbilityList": [
        "2002010_Monster_W2_Knight01_Ability03_Part01",
        "2002010_Monster_W2_Knight01_Ability03_Part02",
        "2002010_Monster_W2_Knight01_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
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
          "ability": "Monster_W2_Knight01_Ability03_Part02",
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
            "value2": 0
          }
        }
      ],
      "references": []
    },
    "2002010_Monster_W2_Knight01_Ability02_Part02": {
      "fileName": "2002010_Monster_W2_Knight01_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "FollowTrigger"
        },
        {
          "name": "Looped Event",
          "maxLoops": 1,
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Enemy ID",
                "ID": 2002010,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Cloud Knights Patroller"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Knight01_Formation[<span class=\"descriptionNumberColor\">undefined</span>]",
                  "valuePerStack": {
                    "Modifier_DefenceAddedRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_65) || RETURN",
                      "displayLines": "UnusedUnderThisBase_65",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_65"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2002010_Monster_W2_Knight01_Ability02_Part01": {
      "fileName": "2002010_Monster_W2_Knight01_Ability02_Part01",
      "childAbilityList": [
        "2002010_Monster_W2_Knight01_Ability02_Part01",
        "2002010_Monster_W2_Knight01_Ability02_Part02",
        "2002010_Monster_W2_Knight01_Ability02_Camera"
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
          "ability": "Monster_W2_Knight01_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2002010_Monster_W2_Knight01_Ability01_Part02": {
      "fileName": "2002010_Monster_W2_Knight01_Ability01_Part02",
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
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Standard_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
            "displayLines": "{[Skill01[2]]}",
            "constants": [],
            "variables": [
              "{[Skill01[2]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
            "displayLines": "{[Skill01[1]]}",
            "constants": [],
            "variables": [
              "{[Skill01[1]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
              ]
            }
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2002010_Monster_W2_Knight01_Ability01_Part01": {
      "fileName": "2002010_Monster_W2_Knight01_Ability01_Part01",
      "childAbilityList": [
        "2002010_Monster_W2_Knight01_Ability01_Part01",
        "2002010_Monster_W2_Knight01_Ability01_Part02",
        "2002010_Monster_W2_Knight01_Ability01_Camera"
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
          "ability": "Monster_W2_Knight01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2002010_Monster_W2_Knight01_Passive01": {
      "fileName": "2002010_Monster_W2_Knight01_Passive01",
      "childAbilityList": [
        "2002010_Monster_W2_Knight01_PassiveAbility_Insert_Part01"
      ],
      "skillTrigger": "Monster_W2_Knight01_00_Passive01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "2002010_Modifiers": {
      "fileName": "2002010_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "references": []
    }
  }
}