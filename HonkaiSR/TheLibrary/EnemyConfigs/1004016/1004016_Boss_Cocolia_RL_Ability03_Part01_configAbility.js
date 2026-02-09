const configAbility = {
  "fileName": "1004016_Boss_Cocolia_RL_Ability03_Part01",
  "childAbilityList": [
    "1004016_Boss_Cocolia_RL_Ability03_Part01_Camera",
    "1004016_Boss_Cocolia_RL_Ability03_Part01",
    "1004016_Boss_Cocolia_RL_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "Cocolia_BattleScore5_Flag"
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
      "ability": "Boss_Cocolia_RL_Ability03_Part02",
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