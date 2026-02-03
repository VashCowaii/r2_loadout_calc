const configAbility = {
  "fileName": "8015012_Monster_AML_Boss_IF_Insert_ChangePhase_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Set Mapping Point",
      "point": "Origin",
      "reset": true
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true
    },
    {
      "name": "Set Enemy Phase",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 1}}"
      },
      "phase": 2
    },
    {
      "name": "Set Enemy Phase",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 2}}"
      },
      "phase": 2
    },
    {
      "name": "Set Enemy Phase",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "phase": 2
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "scope": "TargetEntity",
      "variableName": "ListenAllDieController"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_AML_Boss_IF_DamageTakenUp"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase0"
    }
  ],
  "references": []
}