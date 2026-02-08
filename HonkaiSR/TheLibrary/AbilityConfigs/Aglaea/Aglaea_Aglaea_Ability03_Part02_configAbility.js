const configAbility = {
  "fileName": "Aglaea_Aglaea_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Force Entity Death",
      "target": {
        "name": "Target Sequence",
        "Sequence": [
          {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          {
            "name": "Target Filter",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1954638967\">Aglaea_PassiveAbility01_BattleEvent</a>"
            }
          }
        ]
      },
      "ignoreHPLossTriggers": true,
      "ignoreDeathTriggers": true
    },
    {
      "name": "IF",
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
      "passed": [
        {
          "name": "Summon Memosprite",
          "memoID": 11402,
          "valuePerStack": {
            "_PointB3Layer": {
              "operator": "Variables[0] (_EnergyReduce) || RETURN",
              "displayLines": "_EnergyReduce",
              "constants": [],
              "variables": [
                "_EnergyReduce"
              ]
            },
            "Ability11_DamagePercentage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "Ability11_DamagePercentageAD": {
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"755493734\">Aglaea_Ability02_ChangeSkill</a>"
        }
      ],
      "failed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "ServantMaxHP"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "ServantCurrentHP"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "ServantHealValue"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "variableName": "ServantMaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "variableName": "ServantCurrentHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "ServantHealValue",
          "value": {
            "operator": "Variables[0] (ServantMaxHP) || Variables[1] (ServantCurrentHP) || SUB || RETURN",
            "displayLines": "(ServantMaxHP - ServantCurrentHP)",
            "constants": [],
            "variables": [
              "ServantMaxHP",
              "ServantCurrentHP"
            ]
          }
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "healFlat": {
            "operator": "Variables[0] (ServantHealValue) || RETURN",
            "displayLines": "ServantHealValue",
            "constants": [],
            "variables": [
              "ServantHealValue"
            ]
          },
          "formula": "Heal from Base Value"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"518821924\">Aglaea_Ability03</a>[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
    },
    {
      "name": "Add Battle Event",
      "teamName": "Player Team",
      "eventID": 11402,
      "variables": {
        "BattleEvent_Aglaea_BaseSpeed": {
          "operator": "Variables[0] (100) || RETURN",
          "displayLines": "100",
          "constants": [],
          "variables": [
            100
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-498968511\">Aglaea_Ability03_Sub</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}} + {{Caster's Memosprite}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1330366864\">Aglaea_Eidolon6_Effect</a>[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1725518252\">Aglaea_Ability03_ForbidSkill</a>"
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "set": 0
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1349068502\">March7th_UltraTarget</a>"
    }
  ]
}