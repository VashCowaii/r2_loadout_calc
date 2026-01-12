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
          "to": "Caster",
          "modifier": "Moze_Ability03_DamageAddModifier[<span class=\"descriptionNumberColor\">Heathprowler</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_DamageAddRatio": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            }
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (2.7) || RETURN",
          "displayLines": "2.7",
          "constants": [],
          "variables": [
            2.7
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
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
        "state": "Mask_AliveOnly",
        "target": "Single Target (Primary)"
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
          "abilitySource": "Caster",
          "abilityTarget": "Single Target (Primary)",
          "priorityTag": "AvatarInsertAttackSelf",
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
          "from": "All Enemies (AOE)",
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Living State",
            "state": "Mask_AliveOnly",
            "target": "Use Prior Target(s) Defined"
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
              "abilitySource": "Caster",
              "abilityTarget": "Use Prior Target(s) Defined",
              "priorityTag": "AvatarInsertAttackSelf",
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
      "from": "All Enemies (AOE)",
      "searchRandom": true,
      "includeDyingTargets": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": "Use Prior Target(s) Defined",
        "modifier": "Moze_Ability02_ShadowTargetModifier[<span class=\"descriptionNumberColor\">Prey</span>]"
      }
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Moze_Ability03_DamageAddModifier[<span class=\"descriptionNumberColor\">Heathprowler</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageAddRatio) || RETURN",
                "displayLines": "MDF_DamageAddRatio",
                "constants": [],
                "variables": [
                  "MDF_DamageAddRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageAddRatio"
      ],
      "latentQueue": [],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageAddRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Heathprowler"
    },
    {
      "name": "Modifier Construction",
      "for": "M_Moze_Ultimate_AddRegardAsAttackType",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Attack-Type Extension",
              "target": "Owner of this Modifier",
              "typeToExtend": "Ultimate",
              "isRemove": true
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Attack-Type Extension",
              "target": "Owner of this Modifier",
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
              "to": "Owner of this Modifier",
              "modifier": "M_Moze_Ultimate_AddRegardAsAttackType"
            }
          ]
        }
      ],
      "duration": 1
    }
  ]
}