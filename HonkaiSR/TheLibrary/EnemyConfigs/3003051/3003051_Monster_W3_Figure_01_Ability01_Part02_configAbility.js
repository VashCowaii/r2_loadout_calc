const configAbility = {
  "fileName": "3003051_Monster_W3_Figure_01_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Random Event",
      "odds": [
        0.5,
        0.5
      ],
      "execute": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-578587123\">Enemy_W3_Figure_01_Poison</a>[<span class=\"descriptionNumberColor\">Carousal of Wantonness</span>]",
          "duration": {
            "displayLines": "{[Skill01[1]]}"
          },
          "baseChance": {
            "displayLines": "{[Skill01[0]]}"
          },
          "stackLimit": {
            "displayLines": "{[Skill01[3]]}"
          },
          "valuePerStack": {
            "Modifier_Poison_DamagePercentage": {
              "displayLines": "{[Skill01[2]]}"
            }
          },
          "success": []
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"723419042\">Enemy_W3_Figure_01_Electric</a>[<span class=\"descriptionNumberColor\">Carousal of Revelry</span>]",
          "duration": {
            "displayLines": "{[Skill01[1]]}"
          },
          "baseChance": {
            "displayLines": "{[Skill01[0]]}"
          },
          "stackLimit": {
            "displayLines": "{[Skill01[4]]}"
          },
          "valuePerStack": {
            "Modifier_Electric_DamagePercentage": {
              "displayLines": "{[Skill01[2]]}"
            }
          },
          "success": []
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}