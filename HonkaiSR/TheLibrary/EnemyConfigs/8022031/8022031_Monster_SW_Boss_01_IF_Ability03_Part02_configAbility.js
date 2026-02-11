const configAbility = {
  "fileName": "8022031_Monster_SW_Boss_01_IF_Ability03_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-850302516\">Monster_SW_Boss_01_DamageReduce</a>[<span class=\"descriptionNumberColor\">Multiply</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2142572207\">Monster_SW_Boss_01_Ability05_Passive</a>"
    },
    "Ability Start",
    {
      "name": "Looped Event",
      "maxLoops": 8,
      "Event": [
        {
          "name": "Random Event",
          "odds": [
            0.333,
            0.333,
            0.334
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_64) || RETURN",
              "displayLines": "UnusedUnderThisBase_64",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_64"
              ]
            },
            "HitSplit": {
              "operator": "Variables[0] (UnusedUnderThisBase_64) || Variables[1] (UnusedUnderThisBase_175) || SUB || Variables[0] (UnusedUnderThisBase_64) || DIV || Constants[0] (8) || DIV || RETURN",
              "displayLines": "(((UnusedUnderThisBase_64 - UnusedUnderThisBase_175) / UnusedUnderThisBase_64) / 8)",
              "constants": [
                8
              ],
              "variables": [
                "UnusedUnderThisBase_64",
                "UnusedUnderThisBase_175"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_64) || RETURN",
          "displayLines": "UnusedUnderThisBase_64",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_64"
          ]
        },
        "HitSplit": {
          "operator": "Variables[0] (UnusedUnderThisBase_175) || Variables[1] (UnusedUnderThisBase_64) || DIV || Constants[0] (1) || DIV || RETURN",
          "displayLines": "((UnusedUnderThisBase_175 / UnusedUnderThisBase_64) / 1)",
          "constants": [
            1
          ],
          "variables": [
            "UnusedUnderThisBase_175",
            "UnusedUnderThisBase_64"
          ]
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
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_175) || Constants[0] (1) || DIV || RETURN",
          "displayLines": "(UnusedUnderThisBase_175 / 1)",
          "constants": [
            1
          ],
          "variables": [
            "UnusedUnderThisBase_175"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}