const configAbility = {
  "fileName": "Yanqing_Yanqing_Ability02_Part01",
  "childAbilityList": [
    "Yanqing_Yanqing_Ability02_Camera",
    "Yanqing_Yanqing_Ability02_Part01",
    "Yanqing_Yanqing_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    20,
    0,
    0
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Yanqing_Ability02_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-348622200\">Yanqing_BonusTargetMark</a>"
      }
    }
  ],
  "references": []
}