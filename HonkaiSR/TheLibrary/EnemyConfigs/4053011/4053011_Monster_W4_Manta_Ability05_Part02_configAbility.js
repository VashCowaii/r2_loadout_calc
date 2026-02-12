const configAbility = {
  "fileName": "4053011_Monster_W4_Manta_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1670308834\">Enemy_W4_Manta_TimeSlow</a>"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1053900391\">Enemy_W4_Manta_Virus_Transfer</a>",
      "valuePerStack": {
        "MDF_TransferRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_226) || RETURN",
          "displayLines": "UnusedUnderThisBase_226",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_226"
          ]
        },
        "MDF_LifeTime": {
          "operator": "Variables[0] (UnusedUnderThisBase_224) || RETURN",
          "displayLines": "UnusedUnderThisBase_224",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_224"
          ]
        },
        "MDF_TriggerRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_225) || RETURN",
          "displayLines": "UnusedUnderThisBase_225",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_225"
          ]
        }
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
          "displayLines": "{[Skill05[0]]}",
          "constants": [],
          "variables": [
            "{[Skill05[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1053900391\">Enemy_W4_Manta_Virus_Transfer</a>",
      "onlyRemoveOwnersInstance": true
    },
    "Trigger: Ability End"
  ],
  "references": []
}