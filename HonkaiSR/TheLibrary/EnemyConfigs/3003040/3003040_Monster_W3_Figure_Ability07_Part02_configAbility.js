const configAbility = {
  "fileName": "3003040_Monster_W3_Figure_Ability07_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "ability": "Monster_W3_Figure_Ability07_Part01",
      "isTrigger": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
      "duration": {
        "displayLines": "{[Skill05[2]]}"
      },
      "baseChance": {
        "displayLines": "{[Skill05[1]]}"
      },
      "valuePerStack": {
        "MDF_HealPercentage": {
          "displayLines": "{[Skill02[3]]}"
        },
        "MDF_AllDamageAddedRatio": {
          "displayLines": "{[Skill02[2]]}"
        }
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "tag": "DOT",
  "references": []
}