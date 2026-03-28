const configAbility = {
  "fileName": "5014012_Monster_W5_Vtuber_Ability06_Part01",
  "childAbilityList": [
    "5014012_Monster_W5_Vtuber_Ability06_Part01",
    "5014012_Monster_W5_Vtuber_Ability06_Win_Part02",
    "5014012_Monster_W5_Vtuber_Ability06_Win_ExtraElationTime",
    "5014012_Monster_W5_Vtuber_Ability06_Lose_Part02",
    "5014012_Monster_W5_Vtuber_Ability06_Win_Camera",
    "5014012_Monster_W5_Vtuber_Ability06_Lose_Camera"
  ],
  "skillTrigger": "Skill06",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true,
      "toRemove": [
        "DisableAction",
        "STAT_CTRL"
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1630041214\">Enemy_W5_Vtuber_MainStory_Ability06</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]]"
      },
      "includeDyingTargets": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"473072467\">Enemy_W5_Vtuber_InField_Mark</a>"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Win",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W5_Vtuber_Ability06_Win_Part02",
              "isTrigger": true
            },
            "Deleted bullshit",
            "Deleted bullshit"
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"123456163\">Standard_Departed</a>"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]]"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "ability": "Monster_W5_Vtuber_Ability06_Lose_Part02",
                      "isTrigger": true
                    },
                    "Deleted bullshit"
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W5_Vtuber_Ability06_Lose_Part02",
                  "isTrigger": true
                },
                "Deleted bullshit"
              ]
            },
            "Deleted bullshit"
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