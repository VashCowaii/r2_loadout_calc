const configAbility = {
  "fileName": "Moze_Moze_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1395014383\">Moze_Ability03_DamageAddModifier</a>[<span class=\"descriptionNumberColor\">Heathprowler</span>]",
          "duration": {
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_DamageAddRatio": {
              "displayLines": "0.3"
            }
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "2.7"
        },
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Living State",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "livingState": "Mask_AliveOnly"
      },
      "passed": [
        {
          "name": "Inject Ability Use",
          "condition": {
            "name": "Insert Ability Condition",
            "type": "AbilityOwnerInsertUnusedCount",
            "typeValue": 1
          },
          "abilityName": "Moze_Insert_Part01_Eidolon6Extra",
          "abilitySource": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "priorityTag": "CharacterAttackFromSelf",
          "canHitNonTargets": true,
          "showInActionOrder": true,
          "abortFlags": [
            "STAT_CTRL",
            "DisableAction"
          ],
          "allowAbilityTriggers": false
        }
      ],
      "failed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Living State",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "livingState": "Mask_AliveOnly"
          },
          "ifTargetFound": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Moze_Insert_Part01_Eidolon6Extra",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "priorityTag": "CharacterAttackFromSelf",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction"
              ],
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "includeDyingTargets": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1612096231\">Moze_Ability02_ShadowTargetModifier</a>[<span class=\"descriptionNumberColor\">Prey</span>]"
      }
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1395014383\">Moze_Ability03_DamageAddModifier</a>[<span class=\"descriptionNumberColor\">Heathprowler</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "MDF_DamageAddRatio"
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageAddRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Heathprowler",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_DamageAddRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1536415722\">M_Moze_Ultimate_AddRegardAsAttackType</a>",
      "duration": 1,
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Attack-Type Extension",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "typeToExtend": "Ultimate"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Attack-Type Extension",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "typeToExtend": "Ultimate",
              "extendTypeTo": "Follow-up"
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1536415722\">M_Moze_Ultimate_AddRegardAsAttackType</a>"
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}