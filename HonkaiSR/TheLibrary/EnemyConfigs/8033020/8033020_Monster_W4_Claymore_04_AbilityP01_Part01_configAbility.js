const configAbility = {
  "fileName": "8033020_Monster_W4_Claymore_04_AbilityP01_Part01",
  "childAbilityList": [
    "8033020_Monster_W4_Claymore_04_AbilityP01_Part01",
    "8033020_Monster_W4_Claymore_04_AbilityP01_InsertAbility_Part01",
    "8033020_Monster_W4_Claymore_04_AbilityP01_InsertAbility_Part02",
    "8033020_Monster_W4_Claymore_04_AbilityP01_InsertAbility_Camera"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"290224020\">Modifier_Monster_W4_Claymore_04_Deathrattle</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "Monster_W4_Claymore_04_Main",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1225325614\">W4_Claymore_04_BattleScore1</a>"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__290224020\">Modifier_Monster_W4_Claymore_04_Deathrattle</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-950617106\">Modifier_Monster_W4_Claymore_04_Enhanced</a>[<span class=\"descriptionNumberColor\">Inspire</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1452769834\">Modifier_Monster_W4_Claymore_04_Ability03_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]",
              "onlyRemoveOwnersInstance": true
            }
          ]
        }
      ]
    }
  ]
}