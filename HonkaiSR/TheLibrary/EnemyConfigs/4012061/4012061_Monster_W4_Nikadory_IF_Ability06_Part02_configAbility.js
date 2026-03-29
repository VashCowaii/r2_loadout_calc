const configAbility = {
  "fileName": "4012061_Monster_W4_Nikadory_IF_Ability06_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "Skill06Count",
      "value": 0
    },
    "Ability Start",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill06Count",
          "value": {
            "operator": "Variables[0] (Skill06Count) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Skill06Count + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Skill06Count"
            ]
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill06Damage",
      "value": {
        "operator": "Variables[0] (UnusedUnderThisBase_109) || Variables[1] (Skill06Count) || DIV || RETURN",
        "displayLines": "(UnusedUnderThisBase_109 / Skill06Count)",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_109",
          "Skill06Count"
        ]
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (Skill06Damage) || RETURN",
          "displayLines": "Skill06Damage",
          "constants": [],
          "variables": [
            "Skill06Damage"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)}}.[[removeBattleEvents]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)}}.[[removeBattleEvents]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"615854836\">Enemy_W4_Nikadory_IF_Brave</a>[<span class=\"descriptionNumberColor\">Glory</span>]",
      "valuePerStack": {
        "MDF_DamageUpRatio_PerLayer": {
          "operator": "Variables[0] (UnusedUnderThisBase_542) || RETURN",
          "displayLines": "UnusedUnderThisBase_542",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_542"
          ]
        }
      },
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1417850551\">Enemy_W4_Nikadory_IF_Ability06Charge</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1307575812\">Monster_W4_Nikadory_ChargeEffect</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1849683412\">Monster_W4_Nikadory_WeaponEffect</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}