const configAbility = {
  "fileName": "8002060_Monster_XP_Minion04_02_AbilityP01_InsertAbility_Huimie",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_02_Huimie_EffectRound"
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (Huimie_BeHitCounter) || RETURN",
        "displayLines": "Huimie_BeHitCounter",
        "constants": [],
        "variables": [
          "Huimie_BeHitCounter"
        ]
      },
      "Event": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_02_Huimie_EffectRound"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Huimie_BeHitCounter"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "XP_Minion04_02_Huimie_InsertFlag"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "Enemy_XP_Minion04_02_Bonus_Huimie_Minion_On"
    }
  ],
  "references": []
}