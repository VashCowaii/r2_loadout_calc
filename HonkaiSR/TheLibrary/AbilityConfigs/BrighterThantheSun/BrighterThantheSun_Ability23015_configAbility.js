const configAbility = {
  "fileName": "BrighterThantheSun_Ability23015",
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
      "modifier": "<a class=\"gModGreen\" id=\"-731637436\">LC_23015_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__899015137\">LC_23015_Sub</a>[<span class=\"descriptionNumberColor\">Dragon's Call</span>]",
      "stackType": "ReplaceByCaster",
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
              "variableName": "_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.18) || Variables[1] (_Layer) || MUL || RETURN",
                "displayLines": "(0.18 * _Layer)",
                "constants": [],
                "variables": [
                  0.18,
                  "_Layer"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.06) || Variables[1] (_Layer) || MUL || RETURN",
                "displayLines": "(0.06 * _Layer)",
                "constants": [],
                "variables": [
                  0.06,
                  "_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">#SkillEquip_P4_AttackAddedRatio</span> and Energy Regeneration Rate by <span class=\"descriptionNumberColor\">#SkillEquip_P5_SPRatio</span>, stacking up to <span class=\"descriptionNumberColor\">#SkillEquip_P3_MaxLayer</span> time(s).",
      "type": "Buff",
      "statusName": "Dragon's Call",
      "stackLimit": 3,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-731637436\">LC_23015_Main</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Basic ATK"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"899015137\">LC_23015_Sub</a>[<span class=\"descriptionNumberColor\">Dragon's Call</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's CRIT Rate by #1[i]%. When the wearer uses their Basic ATK, they will gain 1 stack of Dragon's Call, lasting for #2[i] turns. Each stack of Dragon's Call increases the wearer's ATK by #4[i]% and Energy Regeneration Rate by #5[f1]%. Dragon's Call can be stacked up to #3[i] times.",
  "params": [
    [
      0.18,
      2,
      2,
      0.18,
      0.06
    ],
    [
      0.21,
      2,
      2,
      0.21,
      0.07
    ],
    [
      0.24,
      2,
      2,
      0.24,
      0.08
    ],
    [
      0.27,
      2,
      2,
      0.27,
      0.09
    ],
    [
      0.3,
      2,
      2,
      0.3,
      0.1
    ]
  ]
}