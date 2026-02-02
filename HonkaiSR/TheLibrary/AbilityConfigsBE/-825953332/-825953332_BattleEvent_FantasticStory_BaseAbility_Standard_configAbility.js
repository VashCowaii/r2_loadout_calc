const configAbility = {
  "fileName": "-825953332_BattleEvent_FantasticStory_BaseAbility_Standard",
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
      "modifier": "MBattleEvent_FantasticStory_BaseAbility_Standard_sub"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "MBattleEvent_FantasticStory_BaseAbility_Standard_BaseSpeed"
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
      "for": "MBattleEvent_FantasticStory_BaseAbility_Standard_sub",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Battle Event's Caster}}"
              },
              "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura"
            },
            {
              "name": "Force Entity Death",
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
    },
    {
      "name": "Modifier Construction",
      "for": "MBattleEvent_FantasticStory_BaseAbility_Standard_BaseSpeed",
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
                "operator": "Variables[0] (DV_BE_BaseSpeed) || RETURN",
                "displayLines": "DV_BE_BaseSpeed",
                "constants": [],
                "variables": [
                  "DV_BE_BaseSpeed"
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