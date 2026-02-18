const configAbility = {
  "fileName": "2024011_Monster_W2_Xuanlu_10_ChangePhase2",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Force Entity Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      }
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true
    },
    "Deleted bullshit",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2023283041\">Enemy_W2_Xuanlu_Ability07_NoWeakness</a>[<span class=\"descriptionNumberColor\">Hardy Leaf Sheath</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-585027897\">Enemy_W2_Xuanlu_Endurance</a>"
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "set": 0
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "AIFlag",
      "value": 1
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MaxMinionCount",
      "value": 4
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"113542848\">Enemy_W2_Xuanlu_10_SecondPhase</a>"
    },
    {
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "variableName": "InsertCheck",
      "value": 1
    }
  ],
  "references": []
}