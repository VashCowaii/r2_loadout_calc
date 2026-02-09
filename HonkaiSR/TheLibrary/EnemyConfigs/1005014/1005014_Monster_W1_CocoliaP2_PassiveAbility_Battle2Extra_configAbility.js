const configAbility = {
  "fileName": "1005014_Monster_W1_CocoliaP2_PassiveAbility_Battle2Extra",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1500051709\">Enemy_W1_CocoliaP2_Battle2DamageTakenLimit</a>"
    }
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-280575711\">Enemy_W1_CocoliaP2_Battle2Invisible</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1500051709\">Enemy_W1_CocoliaP2_Battle2DamageTakenLimit</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Cocolia_MaxHPValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Cocolia_B2DMGLimit",
              "value": {
                "operator": "Variables[0] (Cocolia_MaxHPValue) || Constants[0] (0.05) || MUL || RETURN",
                "displayLines": "(Cocolia_MaxHPValue * 0.05)",
                "constants": [
                  0.05
                ],
                "variables": [
                  "Cocolia_MaxHPValue"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "AttackData",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DMGValueMax</span>&nbsp;",
                  "value": "Cocolia_B2DMGLimit"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-280575711\">Enemy_W1_CocoliaP2_Battle2Invisible</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}