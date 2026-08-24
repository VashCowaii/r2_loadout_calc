const configAbility = {
  "fileName": "4012024_Monster_W4_Scholar_Ability02_Part01_FateRin",
  "childAbilityList": [
    "4012024_Monster_W4_Scholar_Ability02_Part01_FateRin",
    "4012024_Monster_W4_Scholar_Ability02_Part02_FateRin"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-921940889\">Enemy_W4_Scholar_Ability02_Part01_Mark</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Battle Event List}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Battle Event ID",
        "ID": 200000,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        }
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"304348849\">Enemy_W4_Scholar_Ability02_Part01_AddAbility</a>",
          "casterAssign": "TargetSelf"
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W4_Scholar_Ability02_Part02_FateRin",
      "isTrigger": true
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Battle Event List}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Battle Event ID",
        "ID": 200000,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        }
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__304348849\">Enemy_W4_Scholar_Ability02_Part01_AddAbility</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "Activity_FateRin_RuleBreaker_Effect"
            },
            {
              "name": "Add Ability",
              "abilityName": "Activity_FateRin_RuleBreaker_Camera"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-921940889\">Enemy_W4_Scholar_Ability02_Part01_Mark</a>"
              },
              "ifTargetFound": [
                "Deleted bullshit",
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Activity_FateRin_RuleBreaker_Effect",
                  "isTrigger": true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-921940889\">Enemy_W4_Scholar_Ability02_Part01_Mark</a>"
    }
  ]
}