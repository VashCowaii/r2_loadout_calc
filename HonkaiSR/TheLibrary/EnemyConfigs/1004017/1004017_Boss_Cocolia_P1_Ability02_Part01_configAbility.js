const configAbility = {
  "fileName": "1004017_Boss_Cocolia_P1_Ability02_Part01",
  "childAbilityList": [
    "1004017_Boss_Cocolia_P1_Ability02_Part01_Camera",
    "1004017_Boss_Cocolia_P1_Ability02_Part01",
    "1004017_Boss_Cocolia_P1_Ability02_Part02",
    "1004017_Boss_Cocolia_P1_FT_Ability02_Insert_Part01",
    "1004017_Boss_Cocolia_P1_FT_Ability02_Insert_Part02",
    "1004017_Boss_Cocolia_P1_Ability02_Part01_Insert_Camera"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1075172229\">HeiShengBei_PreAddBEModifier</a>",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Boss_Cocolia_P1_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}