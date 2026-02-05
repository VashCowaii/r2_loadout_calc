const configAbility = {
  "fileName": "4012073_Monster_W4_PolluxPart_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
          "displayLines": "{[Skill01[0]]}",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Use Custom Character Function",
      "functionName": "Monster_W4_PolluxPart_Strengthen_EggAbsorb_FX"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Monster_W4_PolluxPart_Strengthen_EggAbsorb"
    },
    "Trigger: Ability End"
  ],
  "references": []
}