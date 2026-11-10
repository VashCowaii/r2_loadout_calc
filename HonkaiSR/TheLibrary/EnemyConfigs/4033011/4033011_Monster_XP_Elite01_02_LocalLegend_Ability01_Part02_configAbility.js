const configAbility = {
  "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "_TargetMaxHp",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "_TargetCurrentHp",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
    },
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Projectile's Target}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "({[Skill01[0]]} * (1 + ((_TargetCurrentHp / _TargetMaxHp) * {[Skill01[1]]})))"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}