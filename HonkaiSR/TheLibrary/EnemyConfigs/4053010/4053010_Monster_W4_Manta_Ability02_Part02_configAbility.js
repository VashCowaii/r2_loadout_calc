const configAbility = {
  "fileName": "4053010_Monster_W4_Manta_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1670308834\">Enemy_W4_Manta_TimeSlow</a>"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
          "displayLines": "{[Skill02[0]]}",
          "constants": [],
          "variables": [
            "{[Skill02[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1240691682\">Enemy_W4_Manta_DefenseDown</a>[<span class=\"descriptionNumberColor\">Inebriated Daze</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
        "displayLines": "{[Skill02[3]]}",
        "constants": [],
        "variables": [
          "{[Skill02[3]]}"
        ]
      },
      "baseChance": {
        "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
        "displayLines": "{[Skill02[1]]}",
        "constants": [],
        "variables": [
          "{[Skill02[1]]}"
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
          "displayLines": "{[Skill02[2]]}",
          "constants": [],
          "variables": [
            "{[Skill02[2]]}"
          ]
        },
        "MDF_PropertyValue2": {
          "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
          "displayLines": "{[Skill02[4]]}",
          "constants": [],
          "variables": [
            "{[Skill02[4]]}"
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1240691682\">Enemy_W4_Manta_DefenseDown</a>[<span class=\"descriptionNumberColor\">Inebriated Daze</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "STAT_DefenceDown"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || INVERT || RETURN",
                "displayLines": "-MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue2) || INVERT || RETURN",
                "displayLines": "-MDF_PropertyValue2",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue2"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue",
        "MDF_PropertyValue2"
      ],
      "latentQueue": [],
      "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and All-Type RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
      "type": "Debuff",
      "effectName": "Inebriated Daze",
      "statusName": "Inebriated Daze"
    }
  ]
}