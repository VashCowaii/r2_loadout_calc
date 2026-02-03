const configAbility = {
  "fileName": "8013145_Monster_AML_Boss_Part2_IF_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "AML_Boss_00_BattleScore2_Flag",
      "value": 1
    },
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_AML_Boss_Part2_Ability11_ListenSelfDieModifier"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_AML_Boss_Part2_Ability11_Charge"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 0}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 1}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 2}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "phase": "Phase1"
    },
    "Trigger: Ability End"
  ],
  "references": []
}