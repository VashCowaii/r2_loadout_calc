const configAbility = {
  "fileName": "60042_BattleEventAbility_TVBroadcast_Neutral",
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
        "displayLines": "#BattleEvent_P2_ADF"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"200611719\">Modifier_BattleEventAbility_TVBroadcast_Neutral</a>"
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
      "name": "Assign Unique Name",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "identifier": "TVBroadcast_Neutral"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__200611719\">Modifier_BattleEventAbility_TVBroadcast_Neutral</a>",
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
              "abilityName": "BattleEventAbility_TVBroadcast_Neutral_Effect",
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
              "abilityName": "BattleEventAbility_TVBroadcast_Neutral_Effect"
            }
          ]
        }
      ]
    }
  ]
}