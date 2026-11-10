const configAbility = {
  "fileName": "2004015_Monster_W2_Kafka_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "UI Display Event",
      "popUpText": "Spirit Whisper"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1307984397\">Standard_MindControl</a>[<span class=\"descriptionNumberColor\">Dominated</span>]",
      "duration": {
        "displayLines": "({[Skill05[0]]} + 1)"
      },
      "baseChance": {
        "displayLines": "{[Skill05[4]]}"
      },
      "valuePerStack": {
        "MDF_MindControlDamagePercentage": {
          "displayLines": "{[Skill05[1]]}"
        },
        "MDF_MaxDamageRatio": {
          "displayLines": "{[Skill05[2]]}"
        },
        "MDF_MinDamageRatio": {
          "displayLines": "{[Skill05[3]]}"
        }
      },
      "success": []
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "advanceType": "Advance",
      "multiAdd": -1
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}