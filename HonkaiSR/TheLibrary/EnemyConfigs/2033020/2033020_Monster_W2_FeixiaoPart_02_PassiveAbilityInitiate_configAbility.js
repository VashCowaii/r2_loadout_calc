const configAbility = {
  "fileName": "2033020_Monster_W2_FeixiaoPart_02_PassiveAbilityInitiate",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Feixiao: Self}}"
      },
      "scope": "TargetEntity",
      "variableName": "Skill05DamagePercentage",
      "value": {
        "operator": "Variables[0] (UnusedUnderThisBase_29) || RETURN",
        "displayLines": "UnusedUnderThisBase_29",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_29"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Nebula Devourer: Self Initial}}"
      },
      "scope": "TargetEntity",
      "variableName": "Skill05DamagePercentage",
      "value": {
        "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
        "displayLines": "UnusedUnderThisBase_3",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_3"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1928525254\">Monster_W2_FeixiaoPart_SuperArmorController</a>",
      "valuePerStack": {
        "MDF_SuperArmorDamageResistance": {
          "operator": "Variables[0] (UnusedUnderThisBase_395) || RETURN",
          "displayLines": "UnusedUnderThisBase_395",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_395"
          ]
        },
        "MDF_BreakActionDelay": {
          "operator": "Variables[0] (UnusedUnderThisBase_396) || RETURN",
          "displayLines": "UnusedUnderThisBase_396",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_396"
          ]
        },
        "MDF_SuperArmorBreakDamageAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_397) || RETURN",
          "displayLines": "UnusedUnderThisBase_397",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_397"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1429897457\">Monster_W2_FeixiaoPart_LockHP</a>"
    }
  ],
  "references": []
}