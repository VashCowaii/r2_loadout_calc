const configAbility = {
  "fileName": "8003020_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Burn"
      ],
      "useEntitySnapshot": true,
      "description": "Takes Fire DMG at the beginning of each turn for a certain number of turns.",
      "type": "Debuff",
      "effectName": "Enkindle",
      "statusName": "Enkindle",
      "addStacksPerTrigger": {
        "displayLines": "ModifierStackLayer"
      },
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
              "variableName": "Burn_Layer",
              "scope": "TargetEntity"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Burn_Layer",
              "scope": "TargetEntity"
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
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "(MDF_DamagePercentage_Layer * ModifierLayers)"
                },
                "Toughness": null,
                "Tags": [
                  "Burn"
                ],
                "attackType": "DOT"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Burn_Layer",
              "resetValue": {
                "displayLines": "ModifierLayers"
              },
              "scope": "TargetEntity"
            }
          ]
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "(MDF_DamagePercentage_Layer * ModifierLayers)"
                },
                "Toughness": null,
                "Tags": [
                  "Burn"
                ],
                "attackType": "DOT"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1077360781\">XP_Elite_Fire_Ability07_AttackUp_Modifier</a>[<span class=\"descriptionNumberColor\">Molten</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases ATK by <span class=\"descriptionNumberColor\">Modifier_AttackAddedRatio</span>. This effect can stack.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Molten",
      "stackLimit": 3,
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "statValue": {
                "displayLines": "(Modifier_AttackAddedRatio * MDF_Layer)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1090456915\">XP_Fire_Elite_Burning_Modifier_2</a>[<span class=\"descriptionNumberColor\">Spontaneous Combustion</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Blaze Out of Space's attack mode is enhanced.",
      "type": "Other",
      "effectName": "Spontaneous Combustion",
      "statusName": "Spontaneous Combustion",
      "stackLimit": 3,
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Phase_Flag",
              "resetValue": 1,
              "scope": "TargetEntity"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "AIFlag",
              "resetValue": 1,
              "scope": "TargetEntity"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Phase_Flag",
              "resetValue": 2,
              "scope": "TargetEntity"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1713463550\">XP_Fire_Elite_Burning_Modifier</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "stackLimit": 3,
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">IceToughnessReductionRES</span>&nbsp;",
              "statValue": -1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ModifierLayers",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "XP_Fire_Elite_Burning_Insert",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(Skill07_Added_AttackRatio[?] * ModifierLayers)"
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(Modifier_SpeedDelta * ModifierLayers)"
                  }
                },
                "Modifier Deletes Itself"
              ],
              "failed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(Skill07_Added_AttackRatio[?] * ModifierLayers)"
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(Modifier_SpeedDelta * ModifierLayers)"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-829438264\">Monster_XP_Elite01_Ability08_FireBall</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2102762800\">Monster_XP_Elite01_Ability08_Mark</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}