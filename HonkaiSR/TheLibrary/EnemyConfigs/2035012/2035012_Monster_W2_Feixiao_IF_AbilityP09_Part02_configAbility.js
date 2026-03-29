const configAbility = {
  "fileName": "2035012_Monster_W2_Feixiao_IF_AbilityP09_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1095869748\">Monster_W2_Feixiao_IF_Locking</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-27045153\">Monster_W2_Feixiao_IF_Ability09_Prepare</a>"
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
          "operator": "Variables[0] ({[Skill09[0]]}) || RETURN",
          "displayLines": "{[Skill09[0]]}",
          "constants": [],
          "variables": [
            "{[Skill09[0]]}"
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
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "value": 10,
      "isFixed": "* ERR"
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Nebula Devourer: Self}}"
      },
      "variableName": "_TurnCount",
      "value": 4
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1355974529\">AvatarChange_W2_Lycan_ResetCameraDither</a>",
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1963334892\">AvatarChange_W2_Lycan_SheepStatus</a>[<span class=\"descriptionNumberColor\">Malediction</span>]"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}