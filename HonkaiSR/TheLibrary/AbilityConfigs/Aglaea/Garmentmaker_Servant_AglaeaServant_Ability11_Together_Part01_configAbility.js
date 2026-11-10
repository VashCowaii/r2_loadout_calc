const configAbility = {
  "fileName": "Garmentmaker_Servant_AglaeaServant_Ability11_Together_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "_CurrentSpeed",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "_ServantCurrentSpeed",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
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
      "value": 0,
      "variableName": "_Rank06Ratio"
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
          "displayLines": "(Ability11_DamagePercentage + _Rank06Ratio)"
        },
        "Toughness": {
          "displayLines": "(_PairStanceDMG1 * 0.5)"
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
          "displayLines": "(Ability11_DamagePercentageAD + _Rank06Ratio)"
        },
        "Toughness": {
          "displayLines": "(_PairStanceDMG2 * 0.5)"
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}