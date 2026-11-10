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
              "displayLines": "_HealValueTotal"
            },
            "AbilityP01_P3_DamageIncrease": {
              "displayLines": "0.8"
            },
            "AbilityP01_P4_LifeTime": {
              "displayLines": "2"
            },
            "AbilityP01_P5_Layer": {
              "displayLines": "3"
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
            "displayLines": "1"
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
        "displayLines": "0.1"
      },
      "healFlat": {
        "displayLines": "200"
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
        "displayLines": "0.12"
      },
      "healFlat": {
        "displayLines": "240"
      },
      "formula": "Heal from Healer's MaxHP"
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "_CurrenMaxtHP",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "_CurrentHPConvert",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(_CurrenMaxtHP - _CurrentHPConvert)"
      },
      "variableName": "_CurrenMaxtHP"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1902777328\">Memosprite_HyacineServant_MaxHpHalo</a>[<span class=\"descriptionNumberColor\">After Rain</span>]",
      "duration": {
        "displayLines": "3"
      },
      "valuePerStack": {
        "MDF_HaloCurrentHP": {
          "displayLines": "_CurrenMaxtHP"
        },
        "MDF_HaloMaxHPRatio": {
          "displayLines": "0.3"
        },
        "MDF_HaloMaxHPValue": {
          "displayLines": "600"
        },
        "MDF_ExtraMaxHPRatio": {
          "displayLines": "0.5"
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
        "displayLines": "3"
      },
      "maximum": {
        "displayLines": "3"
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}