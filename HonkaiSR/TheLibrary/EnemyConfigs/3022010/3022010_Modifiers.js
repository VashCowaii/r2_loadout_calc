const configAbility = {
  "fileName": "3022010_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1222159240\">Enemy_W3_SundayPart_Part1Camera</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Set Mapping Point",
              "point": "CameraRoot",
              "mapTo": "HighCameraRoot"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1396454665\">Enemy_W3_SundayPart_EntityFollowController</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1257223640\">Monster_W3_SundayPart_LittleChorus</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "Monster_W3_SundayPart_Ability01_Assist_Part02_01"
            },
            {
              "name": "Add Ability",
              "abilityName": "Monster_W3_SundayPart_Ability01_Assist_Part02_02"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "AssistSkill02_DamagePercentage",
              "value": {
                "operator": "Variables[0] (MDF_Assist_DamagePercentage) || RETURN",
                "displayLines": "MDF_Assist_DamagePercentage",
                "constants": [],
                "variables": [
                  "MDF_Assist_DamagePercentage"
                ]
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