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
        "operator": "Variables[0] (_ServantHealValueTotal) || Variables[1] (_SummonerHealValueTotal) || ADD || RETURN",
        "displayLines": "(_ServantHealValueTotal + _SummonerHealValueTotal)",
        "constants": [],
        "variables": [
          "_ServantHealValueTotal",
          "_SummonerHealValueTotal"
        ]
      },
      "variableName": "_ServantHealValueTotal"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "operator": "Variables[0] (_ServantHealValueTotal) || RETURN",
        "displayLines": "_ServantHealValueTotal",
        "constants": [],
        "variables": [
          "_ServantHealValueTotal"
        ]
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
            "operator": "Variables[0] (_ServantHealValueTotal) || Variables[0] (_ServantHealValueTotal) || Variables[1] (0.5) || MUL || SUB || RETURN",
            "displayLines": "(_ServantHealValueTotal - (_ServantHealValueTotal * 0.5))",
            "constants": [],
            "variables": [
              "_ServantHealValueTotal",
              0.5
            ]
          },
          "variableName": "_ServantHealValueTotal"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] (_ServantHealValueTotal) || Variables[0] (_ServantHealValueTotal) || Variables[1] (0.12) || MUL || SUB || RETURN",
            "displayLines": "(_ServantHealValueTotal - (_ServantHealValueTotal * 0.12))",
            "constants": [],
            "variables": [
              "_ServantHealValueTotal",
              0.12
            ]
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
          "operator": "Variables[0] (_ServantHealValueTotalNew) || Variables[1] (0.2) || MUL || RETURN",
          "displayLines": "(_ServantHealValueTotalNew * 0.2)",
          "constants": [],
          "variables": [
            "_ServantHealValueTotalNew",
            0.2
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
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