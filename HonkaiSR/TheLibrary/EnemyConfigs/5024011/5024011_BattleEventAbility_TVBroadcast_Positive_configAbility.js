const configAbility = {
  "fileName": "5024011_BattleEventAbility_TVBroadcast_Positive",
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
        "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
        "displayLines": "#BattleEvent_P3_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P3_ADF"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1938760859\">Modifier_BattleEventAbility_TVBroadcast_Positive</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "BattleEvent_P1_ADF",
      "value": {
        "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
        "displayLines": "#BattleEvent_P1_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P1_ADF"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "BattleEvent_P2_ADF",
      "value": {
        "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
        "displayLines": "#BattleEvent_P2_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P2_ADF"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "BattleEvent_P4_ADF",
      "value": {
        "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
        "displayLines": "#BattleEvent_P4_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P4_ADF"
        ]
      }
    },
    {
      "name": "Assign Unique Name",
      "uniqueName": "TVBroadcast_Positive",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1938760859\">Modifier_BattleEventAbility_TVBroadcast_Positive</a>",
      "execute": [
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
              "abilityName": "BattleEventAbility_TVBroadcast_Positive_Effect",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "STAGE_Character",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "BattleEventAbility_TVBroadcast_Positive_Effect"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}