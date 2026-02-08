const configAbility = {
  "fileName": "Garmentmaker_Servant_AglaeaServant_Ability11_Together_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "variableName": "_CurrentSpeed",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_ServantCurrentSpeed",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-892037211\">Memosprite_Aglaea_Ability11_Mark</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Rank06Ratio",
      "value": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1495039477\">Memosprite_AglaeaServant_Interwine_AdjoinMark</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (Ability11_DamagePercentage) || Variables[1] (_Rank06Ratio) || ADD || RETURN",
          "displayLines": "(Ability11_DamagePercentage + _Rank06Ratio)",
          "constants": [],
          "variables": [
            "Ability11_DamagePercentage",
            "_Rank06Ratio"
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (_PairStanceDMG1) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "(_PairStanceDMG1 * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "_PairStanceDMG1"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Thunder"
        },
        "instanceTag": "AglasaPairsDamage",
        "Tags": [
          "Joint-Attack"
        ],
        "attackType": "Basic ATK"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (Ability11_DamagePercentageAD) || Variables[1] (_Rank06Ratio) || ADD || RETURN",
          "displayLines": "(Ability11_DamagePercentageAD + _Rank06Ratio)",
          "constants": [],
          "variables": [
            "Ability11_DamagePercentageAD",
            "_Rank06Ratio"
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (_PairStanceDMG2) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "(_PairStanceDMG2 * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "_PairStanceDMG2"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Thunder"
        },
        "instanceTag": "AglasaPairsDamage",
        "Tags": [
          "Joint-Attack"
        ],
        "attackType": "Basic ATK"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-892037211\">Memosprite_Aglaea_Ability11_Mark</a>"
    }
  ],
  "references": []
}