const configAbility = {
  "fileName": "Jingliu_Advanced_Jingliu_TechniqueInLevel",
  "childAbilityList": [
    "Jingliu_Advanced_Jingliu_TechniqueInLevel"
  ],
  "skillTrigger": "SkillMaze",
  "abilityType": "Technique",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1289509358\">Technique_Jingliu_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1060785735\">Technique_Jingliu_Modifier_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "DisableAction",
        "STAT_CTRL_Frozen_Effect",
        "STAT_CTRL_Frozen",
        "STAT_CTRL"
      ],
      "useEntitySnapshot": true,
      "description": "Cannot take action for a certain number of turns and takes Ice Additional DMG at the beginning of each turn.",
      "type": "Debuff",
      "effectName": "Frozen",
      "statusName": "Frozen",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": "Is NOT in Auto-Battle State"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target Exists",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "living": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_CTRL_Frozen_Effect",
                    "invertCondition": true
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "displayLines": "Modifier_Frozen_DamagePercentage"
                },
                "DamageFlat": {
                  "displayLines": "Modifier_Frozen_DamageValue"
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "compareType": "=",
                "value2": 1,
                "valueType": "LifeTime"
              },
              "failed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "popUpText": "Frozen"
                }
              ]
            },
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": {
                "displayLines": "STANDARDSPECIFIC_OBJECT_UNUSED_8[Freeze Delay, unassigned]"
              },
              "adjustmentType": "="
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Ultimate"
              ],
              "text": "Ability cannot be used"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1042369095\">Advanced_Jingliu_TechniqueUsage</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "Jingliu_MoonFlag",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "displayLines": "MDF_MazeMoonFlag"
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "Jingliu_MoonFlag"
              },
              "maximum": {
                "displayLines": "Jingliu_MoonFlagMax"
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3,
              "cooldown": 0
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1289509358\">Technique_Jingliu_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
          "execute": [
            {
              "name": "IF",
              "conditions": "Technique Modifies Current Wave",
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1060785735\">Technique_Jingliu_Modifier_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                  "duration": {
                    "displayLines": "1"
                  },
                  "baseChance": {
                    "displayLines": "1"
                  },
                  "valuePerStack": {
                    "Modifier_Frozen_DamagePercentage": {
                      "displayLines": "0.8"
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "displayLines": "15"
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1042369095\">Advanced_Jingliu_TechniqueUsage</a>",
                  "valuePerStack": {
                    "MDF_MazeMoonFlag": {
                      "displayLines": "1"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}