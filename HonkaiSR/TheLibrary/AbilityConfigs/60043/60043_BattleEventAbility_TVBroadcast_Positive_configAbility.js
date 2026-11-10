const configAbility = {
  "fileName": "60043_BattleEventAbility_TVBroadcast_Positive",
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
        "displayLines": "#BattleEvent_P3_ADF"
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
      "variableName": "BattleEvent_P1_ADF",
      "resetValue": {
        "displayLines": "#BattleEvent_P1_ADF"
      },
      "scope": "TargetEntity"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "BattleEvent_P2_ADF",
      "resetValue": {
        "displayLines": "#BattleEvent_P2_ADF"
      },
      "scope": "TargetEntity"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "BattleEvent_P4_ADF",
      "resetValue": {
        "displayLines": "#BattleEvent_P4_ADF"
      },
      "scope": "TargetEntity"
    },
    {
      "name": "Assign Unique Name",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "identifier": "TVBroadcast_Positive"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1938760859\">Modifier_BattleEventAbility_TVBroadcast_Positive</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
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
      ]
    }
  ]
}