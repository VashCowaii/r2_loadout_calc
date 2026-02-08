const configAbility = {
  "fileName": "Aglaea_Aglaea_PassiveAbility01",
  "childAbilityList": [
    "Aglaea_Aglaea_PassiveAbility01",
    "Aglaea_Aglaea_Bonus",
    "Aglaea_Aglaea_Bonus_Camera"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": 10,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Define Custom Variable",
      "scope": "AITag",
      "variableName": "DamageCarry",
      "value": 1
    },
    {
      "name": "Update Displayed Energy Bar",
      "displaySubType": "Fraction",
      "assignState": "False",
      "bar#": "Number"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1078632093\">Aglaea_Passive</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"779865108\">Aglaea_Ability03Preshow</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1390492215\">Aglaea_Ability02Preshow</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-184277426\">Aglaea_Eidolon2_Listen</a>"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1078632093\">Aglaea_Passive</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Caster's Memosprite}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Energy",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-184277426\">Aglaea_Eidolon2_Listen</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_SPvalue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_MaxSp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_SPRatio",
              "value": {
                "operator": "Variables[0] (_SPvalue) || Variables[1] (_MaxSp) || DIV || RETURN",
                "displayLines": "(_SPvalue / _MaxSp)",
                "constants": [],
                "variables": [
                  "_SPvalue",
                  "_MaxSp"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "The Speeding Sol"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_SPRatio",
                    "compareType": "<=",
                    "value2": 0.5
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "valuePercent": 0.5,
                  "isFixed": "(Fixed)",
                  "isSetToValue": true
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "entityType": "Servant",
        "entityID": 11402,
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "Compare: Target Count",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "compareType": "<=",
          "value2": 0,
          "livingTargets": true
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": -1
        }
      }
    }
  ]
}