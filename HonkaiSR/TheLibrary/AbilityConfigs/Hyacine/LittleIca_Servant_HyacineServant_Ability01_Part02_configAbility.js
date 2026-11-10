const configAbility = {
  "fileName": "LittleIca_Servant_HyacineServant_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "scope": "SummonerEntity",
      "value": 0,
      "variableName": "_HealCount"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(_ServantHealValueTotal + _SummonerHealValueTotal)"
      },
      "variableName": "_ServantHealValueTotal"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "_ServantHealValueTotal"
      },
      "variableName": "_ServantHealValueTotalNew"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6,
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_ServantHealValueTotal - (_ServantHealValueTotal * 0.5))"
          },
          "variableName": "_ServantHealValueTotal"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_ServantHealValueTotal - (_ServantHealValueTotal * 0.12))"
          },
          "variableName": "_ServantHealValueTotal"
        }
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "_ServantMaxHP",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "_SummonerHealValueTotal"
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "value": 0,
      "variableName": "_HealValueTotal"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"492819159\">Memosprite_HyacineServant_Passive_Mark</a>[<span class=\"descriptionNumberColor\">Rainclouds, Time to Go!</span>]"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Wind",
        "DamageFlat": {
          "displayLines": "(_ServantHealValueTotalNew * 0.2)"
        },
        "Toughness": {
          "displayLines": "AOE Toughness Value"
        },
        "ToughnessDMGType": {
          "DamageType": "Wind"
        },
        "Tags": null,
        "attackType": "Memosprite",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}