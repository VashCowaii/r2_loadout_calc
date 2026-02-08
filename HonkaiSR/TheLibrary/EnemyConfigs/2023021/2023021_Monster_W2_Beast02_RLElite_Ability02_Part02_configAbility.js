const configAbility = {
  "fileName": "2023021_Monster_W2_Beast02_RLElite_Ability02_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
    },
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"296260861\">Monster_W2_Beast02_RLElite_Bullet</a>",
      "counter": 1
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Bullet_Count"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (Bullet_Count) || RETURN",
        "displayLines": "Bullet_Count",
        "constants": [],
        "variables": [
          "Bullet_Count"
        ]
      },
      "entityClass": "Enemy",
      "maximum": 3,
      "assignState": "True"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-61251553\">Monster_W2_Beast02_RLElite_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-61251553\">Monster_W2_Beast02_RLElite_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1835721372\">Monster_W2_Beast02_RLElite_Edict</a>"
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "advanceType": "Set",
      "multiAdd": "{[Skill02[0]]}"
    },
    "Trigger: Ability End"
  ],
  "references": []
}