const configAbility = {
  "fileName": "Bailu_Bailu_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1229024343\">Bailu_Eidolon4</a>"
        }
      ]
    },
    {
      "name": "Shot Fired",
      "projectileCount": 1,
      "execute": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "healPercent": {
            "displayLines": "0.117"
          },
          "healFlat": {
            "displayLines": "312"
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "0.117"
      },
      "variableName": "MDF_HealPercentage"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "312"
      },
      "variableName": "MDF_HealValue"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(MDF_HealPercentage * (1 - 0.15))"
          },
          "variableName": "MDF_HealPercentage"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(MDF_HealValue * (1 - 0.15))"
          },
          "variableName": "MDF_HealValue"
        },
        {
          "name": "Shot Fired",
          "projectileCount": 1,
          "execute": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Projectile's Target}}"
              },
              "healPercent": {
                "displayLines": "MDF_HealPercentage"
              },
              "healFlat": {
                "displayLines": "MDF_HealValue"
              },
              "formula": "Heal from Healer's MaxHP"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Projectile's Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "(2 - 1)"
      },
      "execute": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_HealPercentage * (1 - 0.15))"
              },
              "variableName": "MDF_HealPercentage"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_HealValue * (1 - 0.15))"
              },
              "variableName": "MDF_HealValue"
            },
            {
              "name": "Shot Fired",
              "projectileCount": 1,
              "execute": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Projectile's Target}}"
                  },
                  "healPercent": {
                    "displayLines": "MDF_HealPercentage"
                  },
                  "healFlat": {
                    "displayLines": "MDF_HealValue"
                  },
                  "formula": "Heal from Healer's MaxHP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Projectile's Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
                }
              ]
            }
          ]
        }
      ]
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
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1229024343\">Bailu_Eidolon4</a>"
        }
      ]
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
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}