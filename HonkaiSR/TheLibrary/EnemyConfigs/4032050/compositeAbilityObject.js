const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4032050,
  "trimCharacterName": 4032050,
  "abilityList": [
    "4032050_Monster_W4_Shooter_01_Ability01_Part02",
    "4032050_Monster_W4_Shooter_01_Ability01_Part01",
    "4032050_Monster_W4_Shooter_01_AbilityP01",
    "4032050_Modifiers"
  ],
  "abilityObject": {
    "4032050_Monster_W4_Shooter_01_Ability01_Part02": {
      "fileName": "4032050_Monster_W4_Shooter_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
              ]
            },
            "MDF_Rally_HealPercentage": {
              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
              "displayLines": "{[SkillP01[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[1]]}"
              ]
            },
            "MDF_Rally_HealUpRatio": {
              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
              "displayLines": "{[SkillP01[2]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[2]]}"
              ]
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
              "displayLines": "{[SkillP01[3]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[3]]}"
              ]
            }
          }
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
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
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4032050_Monster_W4_Shooter_01_Ability01_Part01": {
      "fileName": "4032050_Monster_W4_Shooter_01_Ability01_Part01",
      "childAbilityList": [
        "4032050_Monster_W4_Shooter_01_Ability01_Camera",
        "4032050_Monster_W4_Shooter_01_Ability01_Part01",
        "4032050_Monster_W4_Shooter_01_Ability01_Part02"
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
          "ability": "Monster_W4_Shooter_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4032050_Monster_W4_Shooter_01_AbilityP01": {
      "fileName": "4032050_Monster_W4_Shooter_01_AbilityP01",
      "skillTrigger": "SkillP01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"276019182\">Enemy_W4_Shooter_01_ConfineHit_Controller</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"783794549\">Enemy_W4_Shooter_01_Effect</a>"
        }
      ],
      "references": []
    },
    "4032050_Modifiers": {
      "fileName": "4032050_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__783794549\">Enemy_W4_Shooter_01_Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "STAT_CTRL_Frozen"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "STAT_CTRL_Frozen_Effect"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "STAT_CTRL"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "Break"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "DisableAction"
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "STAT_CTRL_Frozen"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "STAT_CTRL_Frozen_Effect"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "STAT_CTRL"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "Break"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "DisableAction"
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__276019182\">Enemy_W4_Shooter_01_ConfineHit_Controller</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "STAT_Confine"
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase0"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase1"
                    }
                  ]
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