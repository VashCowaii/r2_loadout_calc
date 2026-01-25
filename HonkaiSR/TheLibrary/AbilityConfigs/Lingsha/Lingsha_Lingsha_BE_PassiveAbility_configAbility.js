const configAbility = {
  "fileName": "Lingsha_Lingsha_BE_PassiveAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Lingsha_BPAbility_BattleEvent",
      "counter": {
        "operator": "Variables[0] (BattleEvent_Lingsha_PointB3) || RETURN",
        "displayLines": "BattleEvent_Lingsha_PointB3",
        "constants": [],
        "variables": [
          "BattleEvent_Lingsha_PointB3"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Lingsha_BPAbility_BattleEvent_LifeTime",
      "counter": {
        "operator": "Variables[0] (BattleEvent_Lingsha_AttackTime) || RETURN",
        "displayLines": "BattleEvent_Lingsha_AttackTime",
        "constants": [],
        "variables": [
          "BattleEvent_Lingsha_AttackTime"
        ]
      },
      "valuePerStack": {
        "_AttackTime": {
          "operator": "Variables[0] (BattleEvent_Lingsha_AttackTime) || RETURN",
          "displayLines": "BattleEvent_Lingsha_AttackTime",
          "constants": [],
          "variables": [
            "BattleEvent_Lingsha_AttackTime"
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Lingsha_BPAbility_BattleEvent",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Battle Event's Caster}}"
              },
              "variableName": "Lingsha_BENum",
              "context": "TargetEntity",
              "value": -1,
              "max": 100
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Lingsha_BPAbility_BattleEvent_Part01",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "priorityTag": "AvatarInsertAttackSelf",
              "ownerState": "Mask_AliveOrRevivable",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (BattleEvent_Lingsha_BaseSpeed) || RETURN",
                "displayLines": "BattleEvent_Lingsha_BaseSpeed",
                "constants": [],
                "variables": [
                  "BattleEvent_Lingsha_BaseSpeed"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}