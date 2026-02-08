const configAbility = {
  "fileName": "TrendoftheUniversalMarket_Ability21016",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"882546269\">LC_21016_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__882546269\">LC_21016_Main</a>",
      "execute": [
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "baseChance": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage_Defence": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
                  ]
                }
              },
              "stackFlag": "Equipment"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's DEF by #1[i]%. When the wearer is attacked, there is a #2[i]% base chance to Burn the enemy. For each turn, the wearer deals DoT that is equal to #3[i]% of the wearer's DEF for #4[i] turn(s).",
  "params": [
    [
      0.16,
      1,
      0.4,
      2
    ],
    [
      0.2,
      1.05,
      0.5,
      2
    ],
    [
      0.24,
      1.1,
      0.6,
      2
    ],
    [
      0.28,
      1.15,
      0.7,
      2
    ],
    [
      0.32,
      1.2,
      0.8,
      2
    ]
  ]
}