const configAbility = {
  "fileName": "3003031_Monster_W3_Figure_02_Ability07_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "ability": "Monster_W3_Figure_02_Ability07_Part01",
      "isTrigger": true
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "DollBoss"
      },
      "variableName": "W3_FigureBoss_00_BattleScore2_Flag1",
      "context": "TargetEntity",
      "value": -1,
      "max": 100
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
          "displayLines": "{[Skill07[0]]}",
          "constants": [],
          "variables": [
            "{[Skill07[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End"
  ],
  "tag": "DOT",
  "references": []
}