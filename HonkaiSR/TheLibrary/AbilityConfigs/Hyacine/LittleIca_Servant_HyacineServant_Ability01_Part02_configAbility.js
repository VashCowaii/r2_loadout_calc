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
      "variableName": "_HealCount",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_ServantHealValueTotal",
      "value": {
        "operator": "Variables[0] (_ServantHealValueTotal) || Variables[1] (_SummonerHealValueTotal) || ADD || RETURN",
        "displayLines": "(_ServantHealValueTotal + _SummonerHealValueTotal)",
        "constants": [],
        "variables": [
          "_ServantHealValueTotal",
          "_SummonerHealValueTotal"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_ServantHealValueTotalNew",
      "value": {
        "operator": "Variables[0] (_ServantHealValueTotal) || RETURN",
        "displayLines": "_ServantHealValueTotal",
        "constants": [],
        "variables": [
          "_ServantHealValueTotal"
        ]
      }
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
          "variableName": "_ServantHealValueTotal",
          "value": {
            "operator": "Variables[0] (_ServantHealValueTotal) || Variables[0] (_ServantHealValueTotal) || Variables[1] (0.5) || MUL || SUB || RETURN",
            "displayLines": "(_ServantHealValueTotal - (_ServantHealValueTotal * 0.5))",
            "constants": [],
            "variables": [
              "_ServantHealValueTotal",
              0.5
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_ServantHealValueTotal",
          "value": {
            "operator": "Variables[0] (_ServantHealValueTotal) || Variables[0] (_ServantHealValueTotal) || Variables[1] (0.12) || MUL || SUB || RETURN",
            "displayLines": "(_ServantHealValueTotal - (_ServantHealValueTotal * 0.12))",
            "constants": [],
            "variables": [
              "_ServantHealValueTotal",
              0.12
            ]
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_ServantMaxHP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_SummonerHealValueTotal",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "variableName": "_HealValueTotal",
      "value": 0
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
  "references": []
}