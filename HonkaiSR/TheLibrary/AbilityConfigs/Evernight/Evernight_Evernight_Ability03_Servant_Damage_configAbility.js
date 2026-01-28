const configAbility = {
  "fileName": "Evernight_Evernight_Ability03_Servant_Damage",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}.[[getSummoner]]"
      },
      "ability": "Evernight_Ability03_Part02_Charge",
      "isTrigger": true
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (_Skill03_P1_DamagePercentage) || RETURN",
          "displayLines": "_Skill03_P1_DamagePercentage",
          "constants": [],
          "variables": [
            "_Skill03_P1_DamagePercentage"
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "Toughness": {
          "operator": "Variables[0] (_Skill03_Stance) || RETURN",
          "displayLines": "_Skill03_Stance",
          "constants": [],
          "variables": [
            "_Skill03_Stance"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Ice"
        },
        "Tags": null,
        "attackType": "Ultimate"
      }
    },
    "Trigger: Attack End"
  ],
  "references": []
}