const configAbility = {
  "fileName": "2004014_Monster_W2_Kafka_AbilityIF01_Part01",
  "childAbilityList": [
    "2004014_Monster_W2_Kafka_AbilityIF01_Part01",
    "2004014_Monster_W2_Kafka_AbilityIF01_Part02",
    "2004014_Monster_W2_Kafka_AbilityIF01_Camera",
    "2004014_Monster_W2_Kafka_AbilityIF01_L_Camera",
    "2004014_Monster_W2_Kafka_AbilityIF01_R_Camera"
  ],
  "skillTrigger": "SkillIF01",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 1
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1162350754\">Enemy_W2_Kafka_IF_EX04_Boss</a>"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__19) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__19",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__19"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": null
              },
              "passed": [
                "Deleted bullshit"
              ],
              "failed": [
                "Deleted bullshit"
              ]
            }
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__19) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__19",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__19"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": null
              },
              {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__20) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__20",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__20"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": null
              }
            ]
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ]
    },
    {
      "name": "UI Display Event",
      "popUpText": "Puppet Understudy"
    },
    {
      "name": "Trigger Joint-Attack Ability",
      "abilityList": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W2_Kafka_AbilityIF01_Part02"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__19) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__19",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__19"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": null
          },
          "ability": "Monster_XP_Elite01_Ability03_Part01_Assist"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__21) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__21",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__21"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": null
          },
          "ability": "Monster_XP_Elite01_01_Ability02_Part01_Assist"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__20) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__20",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__20"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": null
          },
          "ability": "Monster_W3_Dinosaur_Ability06_Part01_Assist"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__22) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__22",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__22"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": null
          },
          "ability": "Monster_W3_Dinosaur_01_Ability04_Part01_Assist"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Add Target by Enemy ID",
            "ID": 301301201,
            "characterName": "Memory Zone Meme \"Shell of Faded Rage\""
          },
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__20) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__20",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__20"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": null
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1162350754\">Enemy_W2_Kafka_IF_EX04_Boss</a>"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Add Target by Enemy ID",
                  "ID": 301301201,
                  "characterName": "Memory Zone Meme \"Shell of Faded Rage\""
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Add Target by Enemy ID",
                  "ID": 301301201,
                  "characterName": "Memory Zone Meme \"Shell of Faded Rage\""
                },
                "flagName": "DisableAction",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Add Target by Enemy ID",
                  "ID": 301301201,
                  "characterName": "Memory Zone Meme \"Shell of Faded Rage\""
                },
                "flagName": "Break",
                "invertCondition": true
              }
            ]
          },
          "ability": "Monster_W3_Dinosaur_01_Ability04_Part01_Assist"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Add Target by Enemy ID",
            "ID": 300301401,
            "characterName": "Dreamjolt Troupe's Beyond Overcooked"
          },
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__22) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__22",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__22"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": null
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1162350754\">Enemy_W2_Kafka_IF_EX04_Boss</a>"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Add Target by Enemy ID",
                  "ID": 300301401,
                  "characterName": "Dreamjolt Troupe's Beyond Overcooked"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Add Target by Enemy ID",
                  "ID": 300301401,
                  "characterName": "Dreamjolt Troupe's Beyond Overcooked"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Add Target by Enemy ID",
                  "ID": 300301401,
                  "characterName": "Dreamjolt Troupe's Beyond Overcooked"
                },
                "flagName": "Break",
                "invertCondition": true
              }
            ]
          },
          "ability": "Monster_W3_Dinosaur_Ability06_Part01_Assist"
        }
      ]
    }
  ],
  "references": []
}