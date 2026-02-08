const configAbility = {
  "fileName": "8002079_Monster_XP_Minion04_02_AbilityP01_InsertAbility_Huimie",
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
      "modifier": "<a class=\"gModGreen\" id=\"24516597\">Enemy_XP_Minion04_02_Huimie_EffectRound</a>"
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
              "operator": "Variables[0] (UnusedUnderThisBase_7) || RETURN",
              "displayLines": "UnusedUnderThisBase_7",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_7"
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
      "modifier": "<a class=\"gModGreen\" id=\"24516597\">Enemy_XP_Minion04_02_Huimie_EffectRound</a>"
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
      "modifier": "<a class=\"gModGreen\" id=\"224113690\">Enemy_XP_Minion04_02_Bonus_Huimie_Minion_On</a>"
    }
  ],
  "references": []
}