const configAbility = {
  "fileName": "8024012_Monster_SW_Boss_Ability08_Part01",
  "childAbilityList": [
    "8024012_Monster_SW_Boss_Ability08_Camera",
    "8024012_Monster_SW_Boss_Ability08_Part01",
    "8024012_Monster_SW_Boss_Ability08_Part02"
  ],
  "skillTrigger": "Skill08",
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
      "ability": "Monster_SW_Boss_Ability08_Part02",
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
        "modifier": "<a class=\"gModGreen\" id=\"-1638258882\">Monster_SW_Boss_Ability07_Mark</a>"
      }
    }
  ],
  "references": []
}