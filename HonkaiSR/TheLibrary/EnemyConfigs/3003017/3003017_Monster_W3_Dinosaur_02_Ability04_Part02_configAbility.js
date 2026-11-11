const configAbility = {
  "fileName": "3003017_Monster_W3_Dinosaur_02_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "{[Skill04[0]]}"
        },
        "HitSplit": 0.2,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "{[Skill04[0]]}"
        },
        "HitSplit": 0.3,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "{[Skill04[0]]}"
        },
        "HitSplit": 0.5,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1761981801\">MModifier_Monster_W3_Dinosaur_SpeedDownRatio</a>[<span class=\"descriptionNumberColor\">Slow</span>]",
      "duration": {
        "displayLines": "{[PassiveSkillInitiate[3]]}"
      },
      "baseChance": {
        "displayLines": "{[PassiveSkillInitiate[1]]}"
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "displayLines": "{[PassiveSkillInitiate[2]]}"
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1809911628\">Enemy_W3_Dinosaur_02_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
      "duration": {
        "displayLines": "{[Skill04[4]]}"
      },
      "baseChance": {
        "displayLines": "{[Skill04[1]]}"
      },
      "stackLimit": {
        "displayLines": "{[Skill04[3]]}"
      },
      "valuePerStack": {
        "Modifier_Burn_DamagePercentage": {
          "displayLines": "{[Skill04[2]]}"
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "variableName": "MonsterType_W3_Theater"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1129261000\">MModifier_Monster_W3_Theater_RLBoss_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">Oil to the Banabana</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "UnusedUnderThisBase_11348"
            }
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}