const configAbility = {
  "fileName": "4044010_BattleEventAbility_Monster_W4_Theoroi_Summon",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "multiBase": {
        "operator": "Variables[0] (SummonInitDelay) || RETURN",
        "displayLines": "SummonInitDelay",
        "constants": [],
        "variables": [
          "SummonInitDelay"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"746359205\">Modifier_BattleEventAbility_SummonMonster</a>"
    },
    {
      "name": "Assign Unique Name",
      "uniqueName": "TheoroiSummon",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__746359205\">Modifier_BattleEventAbility_SummonMonster</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<",
                "value2": 6
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "BattleEventAbility_Monster_W4_Theoroi_SummonMonster",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Zandar: Self}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterBuffOthers",
                  "canHitNonTargets": true,
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