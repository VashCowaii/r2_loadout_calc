const configAbility = {
  "fileName": "5013071_Monster_W5_Ranger_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "SWITCH",
      "switchValue": {
        "displayLines": "CurrentRanger"
      },
      "caseTasks": [
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 0
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 2
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 3
        }
      ]
    },
    "Ability Start",
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"134483810\">Monster_W5_Ranger_Ability04_Attack</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"134483810\">Monster_W5_Ranger_Ability04_Attack</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"134483810\">Monster_W5_Ranger_Ability04_Attack</a>"
    },
    {
      "name": "SWITCH",
      "switchValue": {
        "displayLines": "CurrentRanger"
      },
      "caseTasks": [
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 0
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 2
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 3
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"134483810\">Monster_W5_Ranger_Ability04_Attack</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"134483810\">Monster_W5_Ranger_Ability04_Attack</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"134483810\">Monster_W5_Ranger_Ability04_Attack</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"134483810\">Monster_W5_Ranger_Ability04_Attack</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"134483810\">Monster_W5_Ranger_Ability04_Attack</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"134483810\">Monster_W5_Ranger_Ability04_Attack</a>"
    },
    {
      "name": "SWITCH",
      "switchValue": {
        "displayLines": "CurrentRanger"
      },
      "caseTasks": [
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 0,
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "displayLines": "{[Skill04[0]]}"
                },
                "HitSplit": 0.55,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1,
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "{[Skill04[0]]}"
                },
                "HitSplit": 0.55,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 2,
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
                  "displayLines": "{[Skill04[0]]}"
                },
                "HitSplit": 0.55,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 3,
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "displayLines": "{[Skill04[0]]}"
                },
                "HitSplit": 0.55,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__134483810\">Monster_W5_Ranger_Ability04_Attack</a>",
      "parse": [
        {
          "name": "SWITCH",
          "switchValue": {
            "displayLines": "CurrentRanger"
          },
          "caseTasks": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 0,
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "displayLines": "{[Skill04[0]]}"
                    },
                    "HitSplit": 0.05,
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "displayLines": "{[Skill04[0]]}"
                    },
                    "HitSplit": 0.05,
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
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
                      "displayLines": "{[Skill04[0]]}"
                    },
                    "HitSplit": 0.05,
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "displayLines": "{[Skill04[0]]}"
                    },
                    "HitSplit": 0.05,
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
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
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}