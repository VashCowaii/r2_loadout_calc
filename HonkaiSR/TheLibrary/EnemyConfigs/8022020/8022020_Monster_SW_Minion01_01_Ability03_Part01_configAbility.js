const configAbility = {
  "fileName": "8022020_Monster_SW_Minion01_01_Ability03_Part01",
  "childAbilityList": [
    "8022020_Monster_SW_Minion01_01_Ability03_Camera",
    "8022020_Monster_SW_Minion01_01_Ability03_Part01",
    "8022020_Monster_SW_Minion01_01_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_SW_Minion01_01_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1440005\">WMonster_TY_Elite01_Ability07_Mark</a>"
      }
    }
  ],
  "references": []
}