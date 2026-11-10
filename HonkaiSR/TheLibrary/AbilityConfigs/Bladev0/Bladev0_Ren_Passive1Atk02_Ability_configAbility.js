const configAbility = {
  "fileName": "Bladev0_Ren_Passive1Atk02_Ability",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "MwRen_isAttack"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Cyclone of Destruction"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-476823607\">MWRen_Trace03</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(1.1 + 0.5)"
          },
          "variableName": "CasterHPPercentage"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "1.1"
          },
          "variableName": "CasterHPPercentage"
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": 2,
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "displayLines": "0.44"
            },
            "DamageExtra": {
              "displayLines": "CasterHPPercentage"
            },
            "dmgFormulaExtra": "Max HP Scaling",
            "HitSplit": 0.33,
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "displayLines": "0.44"
        },
        "DamageExtra": {
          "displayLines": "CasterHPPercentage"
        },
        "dmgFormulaExtra": "Max HP Scaling",
        "HitSplit": 0.34,
        "Toughness": {
          "displayLines": "AOE Toughness Value"
        },
        "Tags": null,
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "healPercent": {
        "displayLines": "0.25"
      },
      "formula": "Heal from Target MaxHP"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1924146149\">MWRen_Qi</a>[<span class=\"descriptionNumberColor\">Charge</span>]"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": {
        "displayLines": "MWRen_Qi_MaxLayer"
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 2,
      "cooldown": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Cyclone of Destruction"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-476823607\">MWRen_Trace03</a>"
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}