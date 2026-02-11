const configAbility = {
  "fileName": "1004024_Monster_W1_Gepard_RL_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2038076408\">Monster_Gepard_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Aggravate</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
        "displayLines": "{[Skill05[0]]}",
        "constants": [],
        "variables": [
          "{[Skill05[0]]}"
        ]
      }
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "multiBase": 0
    },
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "popUpText": "Action Advanced",
      "living": true
    },
    "Trigger: Ability End"
  ],
  "references": []
}