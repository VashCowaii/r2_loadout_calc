const configAbility = {
  "fileName": "4032061_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1656056004\">Enemy_W4_IronTombCorePart_Ability02_Mark</a>",
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
      "latentQueue": [
        "MDF_CharacterCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-681994307\">Enemy_W4_IronTombCorePart_Ability02_ChargeOnPart</a>[<span class=\"descriptionNumberColor\">Deliverance of Relief</span>]",
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
                  "popUpText": "\"Anti-Creator\" will use \"The Spirit's Prison Shall Burn\" in the next action. This state can be dispelled after receiving a killing blow."
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
      "latentQueue": [
        "MDF_CharacterCount"
      ],
      "description": "\"Anti-Creator\" will use \"Mire Not Within Caves\" in the next action. This state can be dispelled after receiving a killing blow.",
      "type": "Other",
      "statusName": "Deliverance of Relief"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-699052579\">Enemy_W4_IronTombCorePart_Ability02_Charge</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Detach Parent Mapping Point",
              "point": "Weapon1_00_JNT",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 1}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-681994307\">Enemy_W4_IronTombCorePart_Ability02_ChargeOnPart</a>[<span class=\"descriptionNumberColor\">Deliverance of Relief</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MDF_CharacterCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1766795751\">Enemy_W4_IronTombCorePart_PartBreak_05</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 1}}"
              },
              "variableName": "_Break05Odds",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 2}}"
              },
              "variableName": "_Break05Odds",
              "value": 0
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "InsertCheck",
        "_ChangePhaseEnd"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1750018132\">Enemy_W4_IronTombCorePart_PartBreak_04</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 1}}"
              },
              "variableName": "_Break04Odds",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 2}}"
              },
              "variableName": "_Break04Odds",
              "value": 0
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "InsertCheck",
        "_ChangePhaseEnd"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1733240513\">Enemy_W4_IronTombCorePart_PartBreak_03</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 1}}"
              },
              "variableName": "_Break03Odds",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 2}}"
              },
              "variableName": "_Break03Odds",
              "value": 0
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "InsertCheck",
        "_ChangePhaseEnd"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1716462894\">Enemy_W4_IronTombCorePart_PartBreak_02</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 1}}"
              },
              "variableName": "_Break02Odds",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 2}}"
              },
              "variableName": "_Break02Odds",
              "value": 0
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "InsertCheck",
        "_ChangePhaseEnd"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1699685275\">Enemy_W4_IronTombCorePart_PartBreak_01</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 1}}"
              },
              "variableName": "_Break01Odds",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 2}}"
              },
              "variableName": "_Break01Odds",
              "value": 0
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "InsertCheck",
        "_ChangePhaseEnd"
      ]
    }
  ],
  "references": []
}