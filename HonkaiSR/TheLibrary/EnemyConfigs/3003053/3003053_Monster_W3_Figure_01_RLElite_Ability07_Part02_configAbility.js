const configAbility = {
  "fileName": "3003053_Monster_W3_Figure_01_RLElite_Ability07_Part02",
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
      "ability": "Monster_W3_Figure_01_RLElite_Ability07_Part01",
      "isTrigger": true
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "Skill05Flag",
      "context": "TargetEntity",
      "value": 1,
      "min": 1,
      "max": 3
    },
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-578587123\">Enemy_W3_Figure_01_Poison</a>[<span class=\"descriptionNumberColor\">Carousal of Wantonness</span>]",
          "duration": {
            "displayLines": "{[Skill07[1]]}"
          },
          "baseChance": {
            "displayLines": "{[Skill07[0]]}"
          },
          "stackLimit": {
            "displayLines": "{[Skill01[3]]}"
          },
          "valuePerStack": {
            "Modifier_Poison_DamagePercentage": {
              "displayLines": "{[Skill07[2]]}"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"723419042\">Enemy_W3_Figure_01_Electric</a>[<span class=\"descriptionNumberColor\">Carousal of Revelry</span>]",
          "duration": {
            "displayLines": "{[Skill07[1]]}"
          },
          "baseChance": {
            "displayLines": "{[Skill07[0]]}"
          },
          "stackLimit": {
            "displayLines": "{[Skill01[4]]}"
          },
          "valuePerStack": {
            "Modifier_Electric_DamagePercentage": {
              "displayLines": "{[Skill07[2]]}"
            }
          }
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "tag": "DOT",
  "references": []
}