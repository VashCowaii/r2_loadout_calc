const configAbility = {
  "fileName": "4052011_Monster_W2_Mecha02_02_LocalLegend_PassiveAbilityInitiate",
  "skillTrigger": "PassiveSkill01",
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
      "modifier": "<a class=\"gModGreen\" id=\"56832249\">Enemy_W2_Mecha02_02_DeathRattle</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "W2_Mecha02_02_DeathRattle"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Living State",
            "state": "Mask_AliveOnly",
            "target": {
              "name": "Target Name",
              "target": "{{Manta: Event Target 01}}"
            }
          },
          {
            "name": "Enemy ID",
            "ID": 4053013,
            "target": {
              "name": "Target Name",
              "target": "{{Manta: Event Target 01}}"
            },
            "characterName": "Elegy Siren: Insatiable Leviathan"
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{Manta: Event Target 01}}"
          },
          "variable": "_DotDamageRatio",
          "target2": null,
          "variable2": "_DotDamageRatio"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__56832249\">Enemy_W2_Mecha02_02_DeathRattle</a>",
      "modifierFlags": [
        "Deathrattle",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "silent": true
            },
            {
              "name": "Mark Entity For Immediate Death"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_ChangePhaseKill",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Mecha02_02_LocalLegend_DeathRattle_Insert",
                  "priorityTag": "LevelPerformMonster",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Mecha02_02_LocalLegend_DeathRattle_Insert",
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}