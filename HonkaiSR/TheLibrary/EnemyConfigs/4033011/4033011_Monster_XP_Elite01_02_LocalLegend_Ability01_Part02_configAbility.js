const configAbility = {
  "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "variableName": "_TargetMaxHp",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "variableName": "_TargetCurrentHp",
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
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (1) || Variables[1] (_TargetCurrentHp) || Variables[2] (_TargetMaxHp) || DIV || Variables[3] ({[Skill01[1]]}) || MUL || ADD || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * (1 + ((_TargetCurrentHp / _TargetMaxHp) * {[Skill01[1]]})))",
              "constants": [
                1
              ],
              "variables": [
                "{[Skill01[0]]}",
                "_TargetCurrentHp",
                "_TargetMaxHp",
                "{[Skill01[1]]}"
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
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}