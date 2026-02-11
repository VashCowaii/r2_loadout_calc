const configAbility = {
  "fileName": "1004017_Boss_Cocolia_P1_Ability03_Part01",
  "childAbilityList": [
    "1004017_Boss_Cocolia_P1_Ability03_Camera",
    "1004017_Boss_Cocolia_P1_Ability03_Part01",
    "1004017_Boss_Cocolia_P1_Ability03_Part02",
    "1004017_Boss_Cocolia_P1_FT_Ability03_Insert_Part01",
    "1004017_Boss_Cocolia_P1_FT_Ability03_Insert_Part02",
    "1004017_Boss_Cocolia_P1_Ability03_Insert_Camera"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Skill",
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
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1117029266\">Cocolia_P1_Ability03_Modifier</a>"
    },
    "Ability Start",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Boss_Cocolia_P1_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1117029266\">Cocolia_P1_Ability03_Modifier</a>"
    }
  ],
  "references": []
}