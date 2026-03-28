const configAbility = {
  "fileName": "3003011_Monster_W3_Dinosaur_ActivityTelevision_PassiveAbilityInitiate",
  "skillTrigger": "PassiveSkillInitiate2",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2072820088\">MModifier_Monster_W3_Dinosaur_AllDamageTypeResistance</a>",
      "valuePerStack": {
        "MDF_DamageTypeResistance": {
          "operator": "Variables[0] ({[PassiveSkillInitiate[4]]}) || RETURN",
          "displayLines": "{[PassiveSkillInitiate[4]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkillInitiate[4]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-23950311\">MModifier_Monster_W3_Dinosaur_ATMark</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"781775856\">MModifier_Monster_W3_Dinosaur_AllDamageTypeResistanceListener</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-802972910\">MModifier_Monster_W3_Dinosaur_AllDamageTypeResistanceFromDog</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2072820088\">MModifier_Monster_W3_Dinosaur_AllDamageTypeResistance</a>",
      "modifierFlags": [
        "MuteBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageTypeResistance) || RETURN",
                "displayLines": "MDF_DamageTypeResistance",
                "constants": [],
                "variables": [
                  "MDF_DamageTypeResistance"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageTypeResistance"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__781775856\">MModifier_Monster_W3_Dinosaur_AllDamageTypeResistanceListener</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1583693402\">MModifier_Monster_W3_Dinosaur_Calm</a>[<span class=\"descriptionNumberColor\">Simmer</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2072820088\">MModifier_Monster_W3_Dinosaur_AllDamageTypeResistance</a>",
                  "valuePerStack": {
                    "MDF_DamageTypeResistance": {
                      "operator": "Variables[0] ({[PassiveSkillInitiate[4]]}) || RETURN",
                      "displayLines": "{[PassiveSkillInitiate[4]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkillInitiate[4]]}"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1287806639\">MModifier_Monster_W3_Dinosaur_Fury</a>[<span class=\"descriptionNumberColor\">Boil</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2072820088\">MModifier_Monster_W3_Dinosaur_AllDamageTypeResistance</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-802972910\">MModifier_Monster_W3_Dinosaur_AllDamageTypeResistanceFromDog</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1066196333\">Monster_W2_Beast01_03_Bleed</a>[<span class=\"descriptionNumberColor\">Bleed</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Modifier-Specific Variable",
                      "modifierName": "<a class=\"gModGreen\" id=\"-1066196333\">Monster_W2_Beast01_03_Bleed</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                      "variableName": "Modifier_Bleed_DamagePercentage",
                      "value": 0.01
                    }
                  ]
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
      "for": "<a class=\"gModGreen\" id=\"mod__-23950311\">MModifier_Monster_W3_Dinosaur_ATMark</a>",
      "stackData": [],
      "latentQueue": []
    }
  ]
}