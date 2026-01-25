const configAbility = {
  "fileName": "Hyacine_Hyacine_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
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
          "memoID": 11409,
          "valuePerStack": {
            "_SummonerHealValueTotal": {
              "operator": "Variables[0] (_HealValueTotal) || RETURN",
              "displayLines": "_HealValueTotal",
              "constants": [],
              "variables": [
                "_HealValueTotal"
              ]
            },
            "AbilityP01_P3_DamageIncrease": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            },
            "AbilityP01_P4_LifeTime": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "AbilityP01_P5_Layer": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Stormy Caress"
      },
      "passed": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "dispelCount": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "dispelOrder": "LastAdded"
        }
      ]
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members}} - {{Caster}}.[[getMemosprite]]"
      },
      "healPercent": {
        "operator": "Variables[0] (0.1) || RETURN",
        "displayLines": "0.1",
        "constants": [],
        "variables": [
          0.1
        ]
      },
      "healFlat": {
        "operator": "Variables[0] (200) || RETURN",
        "displayLines": "200",
        "constants": [],
        "variables": [
          200
        ]
      },
      "formula": "Heal from Healer's MaxHP"
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Memosprite}}"
      },
      "healPercent": {
        "operator": "Variables[0] (0.12) || RETURN",
        "displayLines": "0.12",
        "constants": [],
        "variables": [
          0.12
        ]
      },
      "healFlat": {
        "operator": "Variables[0] (240) || RETURN",
        "displayLines": "240",
        "constants": [],
        "variables": [
          240
        ]
      },
      "formula": "Heal from Healer's MaxHP"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_CurrenMaxtHP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_CurrentHPConvert",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_CurrenMaxtHP",
      "value": {
        "operator": "Variables[0] (_CurrenMaxtHP) || Variables[1] (_CurrentHPConvert) || SUB || RETURN",
        "displayLines": "(_CurrenMaxtHP - _CurrentHPConvert)",
        "constants": [],
        "variables": [
          "_CurrenMaxtHP",
          "_CurrentHPConvert"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_HyacineServant_MaxHpHalo[<span class=\"descriptionNumberColor\">After Rain</span>]",
      "duration": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "valuePerStack": {
        "MDF_HaloCurrentHP": {
          "operator": "Variables[0] (_CurrenMaxtHP) || RETURN",
          "displayLines": "_CurrenMaxtHP",
          "constants": [],
          "variables": [
            "_CurrenMaxtHP"
          ]
        },
        "MDF_HaloMaxHPRatio": {
          "operator": "Variables[0] (0.3) || RETURN",
          "displayLines": "0.3",
          "constants": [],
          "variables": [
            0.3
          ]
        },
        "MDF_HaloMaxHPValue": {
          "operator": "Variables[0] (600) || RETURN",
          "displayLines": "600",
          "constants": [],
          "variables": [
            600
          ]
        },
        "MDF_ExtraMaxHPRatio": {
          "operator": "Variables[0] (0.5) || RETURN",
          "displayLines": "0.5",
          "constants": [],
          "variables": [
            0.5
          ]
        }
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Ability Target List}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "invertCondition": true
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "maximum": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "assignState": "True",
      "bar#": "Dot"
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
  "references": []
}