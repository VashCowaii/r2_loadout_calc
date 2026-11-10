const configAbility = {
  "fileName": "3003013_Monster_W3_Dinosaur_02_Ultimate_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "ability": "Monster_W3_Dinosaur_02_Ultimate_Part01",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Add Target by Unique Identifier",
          "identifier": "TheaterCore"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1381458312\">Enemy_W3_Theater_MainStoryUltraMark</a>"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1381458312\">Enemy_W3_Theater_MainStoryUltraMark</a>"
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
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "{[Skill08[0]]}"
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "displayLines": "{[Skill08[2]]}"
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "displayLines": "{[Skill08[2]]}"
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
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
        "displayLines": "{[Skill08[1]]}"
      },
      "stackLimit": {
        "displayLines": "{[Skill04[3]]}"
      },
      "valuePerStack": {
        "Modifier_Burn_DamagePercentage": {
          "displayLines": "{[Skill04[2]]}"
        }
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "tag": "DOT",
  "references": []
}