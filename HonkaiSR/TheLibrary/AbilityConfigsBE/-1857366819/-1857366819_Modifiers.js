const configAbility = {
  "fileName": "-1857366819_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-934258987\">TrialPlayer_DanHengIL_20231052_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "BPExChange",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": 3
            },
            {
              "name": "Modify Skill-Point Extras",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "function": "Set",
              "value": {
                "operator": "Variables[0] (BPExChange) || RETURN",
                "displayLines": "BPExChange",
                "constants": [],
                "variables": [
                  "BPExChange"
                ]
              },
              "silentChange": true
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": 3,
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": 3
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1738340073\">DanHengIL_BPCost_3_Special</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Switch to Action/Ability Context",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Update Energy Value",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": 0,
              "adjustment": "Set",
              "ignoreBlock": true
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1597361272\">TrialPlayer_Standard_Disable_Ultimate_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTypes": [
                "Ultimate"
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}