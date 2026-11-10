const configAbility = {
  "fileName": "3003017_Monster_W3_Dinosaur_02_Ability09_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1792784435\">Enemy_W3_Dinosaur_02_AttackRatioUp</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "duration": {
        "displayLines": "{[Skill09[2]]}"
      },
      "stackLimit": {
        "displayLines": "{[Skill09[0]]}"
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "displayLines": "{[Skill09[1]]}"
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1792784435\">Enemy_W3_Dinosaur_02_AttackRatioUp</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "duration": {
        "displayLines": "{[Skill09[2]]}"
      },
      "stackLimit": {
        "displayLines": "{[Skill09[0]]}"
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "displayLines": "{[Skill09[1]]}"
        }
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}