const configAbility = {
  "fileName": "Reminiscence_Ability20022",
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
      "modifier": "<a class=\"gModGreen\" id=\"-772520149\">LC_20022_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__394065750\">LC_20022_Sub2</a>[<span class=\"descriptionNumberColor\">Commemoration</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.08) || Variables[1] (_Layer) || MUL || RETURN",
                "displayLines": "(0.08 * _Layer)",
                "constants": [],
                "variables": [
                  0.08,
                  "_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">#SkillEquip_P1_DamageAddedRatio</span>, up to 4 stacks.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Commemoration",
      "stackLimit": 4,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__377288131\">LC_20022_Sub1</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"394065750\">LC_20022_Sub2</a>[<span class=\"descriptionNumberColor\">Commemoration</span>]",
              "stackLimit": {
                "operator": "Variables[0] (4) || RETURN",
                "displayLines": "4",
                "constants": [],
                "variables": [
                  4
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"394065750\">LC_20022_Sub2</a>[<span class=\"descriptionNumberColor\">Commemoration</span>]",
              "stackLimit": {
                "operator": "Variables[0] (4) || RETURN",
                "displayLines": "4",
                "constants": [],
                "variables": [
                  4
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"394065750\">LC_20022_Sub2</a>[<span class=\"descriptionNumberColor\">Commemoration</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"394065750\">LC_20022_Sub2</a>[<span class=\"descriptionNumberColor\">Commemoration</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-772520149\">LC_20022_Main</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Memosprite"
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getSummoner]]"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"377288131\">LC_20022_Sub1</a>"
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
  "desc": "When memosprite's turn starts, the wearer and memosprite each gain 1 stack of \"Commemoration.\" Each stack increases DMG dealt by #1[i]%, stacking up to #2[i] time(s). When memosprite disappears, removes \"Commemoration\" from the wearer and memosprite.",
  "params": [
    [
      0.08,
      4
    ],
    [
      0.09,
      4
    ],
    [
      0.1,
      4
    ],
    [
      0.11,
      4
    ],
    [
      0.12,
      4
    ]
  ]
}