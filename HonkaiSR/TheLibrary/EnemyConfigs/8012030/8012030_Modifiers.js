const configAbility = {
  "fileName": "8012030_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1102385587\">Enemy_AML_Minion04_Mark</a>[<span class=\"descriptionNumberColor\">Detonated</span>]",
      "counter": 4,
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Take Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (Skill01_P2_MarkDamagePercentage) || RETURN",
                  "displayLines": "Skill01_P2_MarkDamagePercentage",
                  "constants": [],
                  "variables": [
                    "Skill01_P2_MarkDamagePercentage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "Define Modifier Variable",
              "modifierName": null,
              "function": "Add"
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "Skill01_P2_MarkDamagePercentage"
      ],
      "latentQueue": [],
      "description": "Has been attached a detonator by Voidranger: Eliminator. Takes Additional DMG after being attacked.",
      "type": "Debuff",
      "effectName": "Detonated",
      "statusName": "Detonated",
      "duration": 2
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1138460548\">Enemy_AML_Minion04_Overheat_Effect</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1434034112\">Enemy_AML_Minion04_Overheat</a>[<span class=\"descriptionNumberColor\">Overloaded</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1138460548\">Enemy_AML_Minion04_Overheat_Effect</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Temporarily unable to attack due to Energy overload.",
      "type": "Debuff",
      "effectName": "Overloaded",
      "statusName": "Overloaded"
    }
  ],
  "references": []
}