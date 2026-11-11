const configAbility = {
  "fileName": "Feixiao_Feixiao_Ability03_ComboFinish1_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"69209893\">Feixiao_Combo1_CostSPBeforeDamage</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1161841910\">Feixiao_Combo1_DealSubDamage</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "displayLines": "Ability11_DamagePercentage"
        },
        "HitSplit": 0.9,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1207472342\">Feixiao_EnterFinish</a>"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}