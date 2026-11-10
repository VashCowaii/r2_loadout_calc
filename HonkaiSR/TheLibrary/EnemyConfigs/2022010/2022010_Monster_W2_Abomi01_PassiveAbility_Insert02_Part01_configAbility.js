const configAbility = {
  "fileName": "2022010_Monster_W2_Abomi01_PassiveAbility_Insert02_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Monster_W2_Abomi01_00_HitFlyFlag",
        "compareType": "=",
        "value2": 0,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "SkillP01",
          "passed": [
            "Deleted bullshit",
            "Deleted bullshit",
            {
              "name": "Animation Task",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 202201010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Mara-Struck Soldier"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 202201010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Mara-Struck Soldier"
                      }
                    ]
                  }
                }
              ]
            },
            "Deleted bullshit",
            {
              "name": "Animation Task",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 202201010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Mara-Struck Soldier"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 202201010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Mara-Struck Soldier"
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"345912758\">Monster_W2_Abomi01_Accelerate</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                      "valuePerStack": {
                        "MDF_SpeedRatio": {
                          "displayLines": "{[PassiveSkill01[2]]}"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 202201010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Mara-Struck Soldier"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 202201010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Mara-Struck Soldier"
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "Monster_W2_Abomi01_00_ReviveEff",
                      "scope": "TargetEntity"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MaxHPValue",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "healPercent": {
                    "displayLines": "{[PassiveSkill01[0]]}"
                  },
                  "formula": "Heal from Healer's MaxHP"
                },
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "SkillP04",
          "passed": [
            "Deleted bullshit",
            {
              "name": "Animation Task",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 202201010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Mara-Struck Soldier"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 202201010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Mara-Struck Soldier"
                      }
                    ]
                  }
                }
              ]
            },
            "Deleted bullshit",
            {
              "name": "Animation Task",
              "execute": [
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 202201010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Mara-Struck Soldier"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 202201010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Mara-Struck Soldier"
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "Monster_W2_Abomi01_00_ReviveEff",
                      "scope": "TargetEntity"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"345912758\">Monster_W2_Abomi01_Accelerate</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                      "valuePerStack": {
                        "MDF_SpeedRatio": {
                          "displayLines": "{[PassiveSkill01[2]]}"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MaxHPValue",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "healPercent": {
                    "displayLines": "{[PassiveSkill01[0]]}"
                  },
                  "formula": "Heal from Healer's MaxHP"
                },
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}