const configAbility = {
  "fileName": "1012040_Monster_W1_SvarogPart_Ability06_Part01",
  "childAbilityList": [
    "1012040_Monster_W1_SvarogPart_Ability06_Part01",
    "1012040_Monster_W1_SvarogPart_Ability06_Part02",
    "1012040_Monster_W1_SvarogPart_Ability06_Camera"
  ],
  "skillTrigger": "Skill06",
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
      "ability": "Monster_W1_SvarogPart_Ability06_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-898477955\">StanceBreakState</a>"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-898477955\">StanceBreakState</a>"
        }
      ]
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    }
  ],
  "references": []
}