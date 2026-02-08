const configAbility = {
  "fileName": "FinalVictor_Ability21037",
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
      "modifier": "<a class=\"gModGreen\" id=\"-743341522\">LC_21037_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1915494643\">LC_21037_Sub</a>[<span class=\"descriptionNumberColor\">Good Fortune</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
      "description": "Each stack increases CRIT DMG dealt by <span class=\"descriptionNumberColor\">#SkillEquip_P2_CriticalDamage</span>, up to <span class=\"descriptionNumberColor\">#SkillEquip_P3_MaxLayer</span> stack(s).",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "Good Fortune",
      "stackLimit": 5,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-743341522\">LC_21037_Main</a>",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1915494643\">LC_21037_Sub</a>[<span class=\"descriptionNumberColor\">Good Fortune</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage End [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is a Crit"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1915494643\">LC_21037_Sub</a>[<span class=\"descriptionNumberColor\">Good Fortune</span>]",
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
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's ATK by #1[i]%. When the wearer lands a CRIT hit on enemies, gains 1 stack of Good Fortune. This can stack up to #3[i] time(s). Every stack of Good Fortune increases the wearer's CRIT DMG by #2[i]%. Good Fortune will be removed at the end of the wearer's turn.",
  "params": [
    [
      0.12,
      0.08,
      4
    ],
    [
      0.14,
      0.09,
      4
    ],
    [
      0.16,
      0.1,
      4
    ],
    [
      0.18,
      0.11,
      4
    ],
    [
      0.2,
      0.12,
      4
    ]
  ]
}