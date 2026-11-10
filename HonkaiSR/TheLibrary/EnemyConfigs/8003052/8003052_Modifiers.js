const configAbility = {
  "fileName": "8003052_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1859460834\">Enemy_AML_Elite01_01_AttackAdd</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "stackType": "Replace",
      "description": "Increases ATK by <span class=\"descriptionNumberColor\">ModifierAttackAddedRatio</span>, stacking up to <span class=\"descriptionNumberColor\">ModifierMaxLayer</span> time(s).",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "ATK Boost",
      "stackLimit": 10,
      "addStacksPerTrigger": {
        "displayLines": "ModifierStackLayer"
      },
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
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(PassiveSkillInitiate_P1_AttackAddedRatio * ModifierLayers)"
              },
              "variableName": "ModifierAttackAddedRatio"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "displayLines": "ModifierAttackAddedRatio"
              }
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkillInitiate[2]]}"
              },
              "variableName": "ModifierMaxLayer"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-940158065\">Enemy_AML_Elite01_01_DOTAim</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
      "stackType": "Multiple",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "AttackSign"
      ],
      "description": "%CasterName will focus attacks on this target.",
      "type": "Other",
      "effectName": "Lock On",
      "statusName": "Lock On",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]"
              },
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-940158065\">Enemy_AML_Elite01_01_DOTAim</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__60428755\">Monster_AML_Elite01_01_PoisonCount</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Targets Adjacent to Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
              "duration": {
                "displayLines": "MDF_LifeTime"
              },
              "baseChance": 1,
              "stackLimit": {
                "displayLines": "MDF_MaxLayer"
              },
              "valuePerStack": {
                "Modifier_Poison_DamagePercentage": {
                  "displayLines": "MDF_DamagePercentage"
                }
              },
              "stackFlag": "CharacterSkill"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Count",
              "multiplier": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1517316347\">Monster_AML_Elite01_01_DieChargeEffHide</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ]
    }
  ],
  "references": []
}