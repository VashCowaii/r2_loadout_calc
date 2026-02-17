const configAbility = {
  "fileName": "3013011_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__224426614\">W3_Dinosaur_01_BattleScore2</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Dinosaur_BreakCount"
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "Dinosaur_BreakCount",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Fight Fire With Fire",
                      "desc": "In a single battle, defeat Memory Zone Meme \"Shell of Faded Rage\" without causing Weakness Break",
                      "rarity": "Low"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Dinosaur_BreakCount",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__207648995\">W3_Dinosaur_01_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Dinosaur_BreakModifierMaxCount"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "MaxLayer",
              "variableName": "Dinosaur_BreakModifierMaxCount",
              "modifierName": "<a class=\"gModGreen\" id=\"-1395319081\">Enemy_W3_Dinosaur_01_Standard_Growth</a>[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-1395319081\">Enemy_W3_Dinosaur_01_Standard_Growth</a>[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
                "compareType": "=",
                "value2": {
                  "operator": "Variables[0] (Dinosaur_BreakModifierMaxCount) || RETURN",
                  "displayLines": "Dinosaur_BreakModifierMaxCount",
                  "constants": [],
                  "variables": [
                    "Dinosaur_BreakModifierMaxCount"
                  ]
                },
                "valueType": "Layer"
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Purging Heatiness",
                      "desc": "Clear the full stacks of Obscure Blaze on the Memory Zone Meme \"Shell of Faded Rage\" during a Weakness Break",
                      "rarity": "Low"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-340009422\">Enemy_W3_Dinosaur_01_Standard_Growth_Enhance</a>[<span class=\"descriptionNumberColor\">Scorchbone Inferno</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself",
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "AIFlag",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [
        "MDF_MaxLayer"
      ],
      "latentQueue": [],
      "description": "Each stack causes \"Bonepiercing Odium\" to additionally deal DMG 1 time, stacking up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s). Weaken is dispelled when Broken.",
      "type": "Buff",
      "effectName": "Scorchbone Inferno",
      "statusName": "Scorchbone Inferno"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1395319081\">Enemy_W3_Dinosaur_01_Standard_Growth</a>[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself",
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "AIFlag",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Each stack causes Bonepiercing Odium to deal DMG 1 additional time, up to 5 times. This state will be dispelled after being Weakness Broken.",
      "type": "Buff",
      "effectName": "Obscure Blaze",
      "statusName": "Obscure Blaze",
      "stackLimit": 5
    }
  ],
  "references": []
}