const configAbility = {
  "fileName": "Firefly_Sam_PassiveAbility01_BattleEvent",
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
      "modifier": "Sam_PassiveAbility01_BattleEvent"
    },
    {
      "name": "Block Advance/Delay Effects",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "whitelist": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "whitelistTag": "Mask_TurnBasedAdvance"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Sam_PassiveAbility01_BattleEvent",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Sam_PassiveAbility01_BattleEvent_Insert",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Battle Event's Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Battle Event's Caster}}"
              },
              "priorityTag": "AvatarBuffOthers",
              "ownerState": "Anyone",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "ignoreHPLossTriggers": true,
              "ignoreDeathTriggers": true
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
                "operator": "Variables[0] (BattleEvent_Sam_BaseSpeed) || RETURN",
                "displayLines": "BattleEvent_Sam_BaseSpeed",
                "constants": [],
                "variables": [
                  "BattleEvent_Sam_BaseSpeed"
                ]
              }
            },
            {
              "name": "Update Action Bar Display",
              "triggerName": "Status_Status2",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
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