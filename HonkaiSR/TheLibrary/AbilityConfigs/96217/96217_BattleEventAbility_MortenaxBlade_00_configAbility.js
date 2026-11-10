const configAbility = {
  "fileName": "96217_BattleEventAbility_MortenaxBlade_00",
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
      "modifier": "<a class=\"gModGreen\" id=\"-146321629\">MortenaxBlade_PassiveAbility01_BattleEvent</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1508029303\">MortenaxBlade_PassiveAbility01_BattleEvent_BaseSpeed</a>",
      "valuePerStack": {
        "BattleEvent_BaseSpeed": {
          "displayLines": "BattleEvent_00_BaseSpeed"
        }
      }
    },
    {
      "name": "Block Advance/Delay Effects",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "whitelist": {
        "name": "Target Name",
        "target": "{{Caster}} + {{Battle Event's Caster}}"
      },
      "whitelistTag": "Mask_TurnBasedAdvance"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1508029303\">MortenaxBlade_PassiveAbility01_BattleEvent_BaseSpeed</a>",
      "stackData": [
        "BattleEvent_00_BaseSpeed"
      ],
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "statValue": {
                "displayLines": "BattleEvent_00_BaseSpeed"
              }
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}