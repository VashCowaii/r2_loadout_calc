const configAbility = {
  "fileName": "4032071_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-151375815\">Enemy_W4_IronTombCorePart_01_Ability02_Mark</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "AttackSign"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1309969172\">Enemy_W4_IronTombCorePart_01_Ability02_ChargeOnPart</a>[<span class=\"descriptionNumberColor\">Rebellious</span>]",
      "modifierFlags": [
        "MuteHitH"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase0"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Core}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "failed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "\"Anti-Creator\" will use \"The Crown of Divinity Shall Shatter\" in the next action. This state can be dispelled after receiving a killing blow."
                }
              ]
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase2"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "\"Anti-Creator\" will use \"Yield Not to Tyranny\" in the next action. This state can be dispelled after receiving a killing blow.",
      "type": "Other",
      "statusName": "Rebellious"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1868461228\">Enemy_W4_IronTombCorePart_01_Ability02_Charge</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Detach Parent Mapping Point",
              "point": "Weapon2_00_JNT",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1309969172\">Enemy_W4_IronTombCorePart_01_Ability02_ChargeOnPart</a>[<span class=\"descriptionNumberColor\">Rebellious</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Core}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}