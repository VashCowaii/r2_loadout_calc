const configAbility = {
  "fileName": "2002032_Monster_W2_Valkyrie01_RLSummon_Ability01_Parallel",
  "childAbilityList": [
    "2002032_Monster_W2_Valkyrie01_RLSummon_Ability01_Parallel",
    "2002032_Monster_W2_Valkyrie01_RLSummon_Ability01_Part01"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Basic ATK",
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
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Monster_W2_Valkyrie01_RLSummon_Ability01_Part01",
      "isTrigger": true
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
          "displayLines": "{[Skill01[0]]}",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"221482818\">Standard_Unstable</a>[<span class=\"descriptionNumberColor\">Reverberation</span>]",
            "invertCondition": true
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-315004140\">Standard_Shake</a>[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
            "invertCondition": true
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"221482818\">Standard_Unstable</a>[<span class=\"descriptionNumberColor\">Reverberation</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
            "displayLines": "{[Skill01[2]]}",
            "constants": [],
            "variables": [
              "{[Skill01[2]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
            "displayLines": "{[Skill01[1]]}",
            "constants": [],
            "variables": [
              "{[Skill01[1]]}"
            ]
          },
          "valuePerStack": {
            "MDF_Shake_ActionDelayRatio": 0.7
          }
        }
      ]
    }
  ],
  "tag": "DOT_Burn",
  "references": []
}