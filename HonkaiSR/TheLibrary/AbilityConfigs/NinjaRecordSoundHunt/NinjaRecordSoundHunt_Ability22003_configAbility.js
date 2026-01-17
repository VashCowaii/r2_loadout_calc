const configAbility = {
  "fileName": "NinjaRecordSoundHunt_Ability22003",
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
      "modifier": "LC_22003_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_22003_Sub[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.18) || RETURN",
                "displayLines": "0.18",
                "constants": [],
                "variables": [
                  0.18
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases CRIT DMG by <span class=\"descriptionNumberColor\">#SkillEquip_P2_CriticalDamage</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "CRIT DMG Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_22003_Main",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Flag_22003",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Heal Target End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
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
                  {
                    "name": "Compare: Variable",
                    "value1": "Flag_22003",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_22003_Sub[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Flag_22003",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Flag_22003",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_22003_Sub[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Flag_22003",
                  "value": 1
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
  "desc": "Increases the wearer's Max HP by #1[i]%. When losing or restoring this unit's HP, increases CRIT DMG by #2[i]%, lasting for #3[i] turn(s). This effect can only trigger once per turn.",
  "params": [
    [
      0.12,
      0.18,
      2
    ],
    [
      0.15,
      0.225,
      2
    ],
    [
      0.18,
      0.27,
      2
    ],
    [
      0.21,
      0.315,
      2
    ],
    [
      0.24,
      0.36,
      2
    ]
  ]
}