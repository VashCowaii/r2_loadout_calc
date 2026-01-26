const configAbility = {
  "fileName": "Feixiao_Feixiao_Ability03_Finish_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "M_Feixiao_UltraTarget_Mark"
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
          "operator": "Variables[0] (1.6) || RETURN",
          "displayLines": "1.6",
          "constants": [],
          "variables": [
            1.6
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null
      },
      "attackType": "Ultimate"
    },
    "Trigger: Attack End",
    {
      "name": "Use Custom Character Function",
      "functionName": "Feixiao_Passive_CostTeamAttackCountToGainSP"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "M_Feixiao_UltraTarget"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Feixiao_Ultramode"
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": []
}