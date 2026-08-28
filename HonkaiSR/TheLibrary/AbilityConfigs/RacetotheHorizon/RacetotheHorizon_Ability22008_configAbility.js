const configAbility = {
  "fileName": "RacetotheHorizon_Ability22008",
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
      "modifier": "<a class=\"gModGreen\" id=\"316295913\">LC_22008_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1966037906\">LC_22008_Sub</a>[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Each stack increases CRIT DMG by <span class=\"descriptionNumberColor\">#SkillEquip_P2_CriticalDamage</span>. This effect can stack up to <span class=\"descriptionNumberColor\">#SkillEquip_P4_MaxLayer</span> time(s).",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "CRIT DMG Boost",
      "stackLimit": 5,
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
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.03) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(0.03 * MDF_Layer)",
                "constants": [],
                "variables": [
                  0.03,
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__316295913\">LC_22008_Main</a>",
      "execute": [
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_IsInsert",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Follow-up"
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_IsInsert",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_IsInsert",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1966037906\">LC_22008_Sub</a>[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (10) || RETURN",
                    "displayLines": "10",
                    "constants": [],
                    "variables": [
                      10
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's ATK by #1[i]%. After the wearer uses Follow-Up ATK, increases their CRIT DMG by #2[f1]% for #3[i] turn(s). This effect can stack up to #4[i] times.",
  "params": [
    [
      0.12,
      0.03,
      2,
      10
    ],
    [
      0.15,
      0.035,
      2,
      10
    ],
    [
      0.18,
      0.04,
      2,
      10
    ],
    [
      0.21,
      0.044999998,
      2,
      10
    ],
    [
      0.24,
      0.05,
      2,
      10
    ]
  ]
}