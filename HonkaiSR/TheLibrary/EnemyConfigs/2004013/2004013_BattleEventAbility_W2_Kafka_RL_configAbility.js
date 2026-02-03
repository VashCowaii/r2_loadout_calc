const configAbility = {
  "fileName": "2004013_BattleEventAbility_W2_Kafka_RL",
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
      "modifier": "Modifier_W2_Kafka_RL_BattleEvent"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Modifier_W2_Kafka_RL_BattleEvent_BaseSpeed"
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "advanceType": "Set",
      "multiAdd": "MDF_W2_Kafka_00_RL_BattleEvent_ActionDelay"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Modifier_W2_Kafka_RL_BattleEvent_BaseSpeed",
      "execute": [
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
                "operator": "Variables[0] (MDF_W2_Kafka_00_RL_BattleEvent_BaseSpeed) || RETURN",
                "displayLines": "MDF_W2_Kafka_00_RL_BattleEvent_BaseSpeed",
                "constants": [],
                "variables": [
                  "MDF_W2_Kafka_00_RL_BattleEvent_BaseSpeed"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_W2_Kafka_RL_BattleEvent",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "BattleEventAbility_W2_Kafka_RL_Insert",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Battle Event's Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "priorityTag": "MonsterInsertAttackSelf",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
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